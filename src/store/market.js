import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import _ from 'lodash';
import { BigNumber } from 'bignumber.js';

import PriceApi from 'api/PriceApi';
import MasterdataApi from 'api/MasterdataApi';
import TrendingApi from 'api/TrendingApi';
import { marketFormat, stringToNumber, priceFormatWithPrecision } from 'helpers/format';


/**
 * =====================================================
 * Market actions
 * =====================================================
 */

export const MARKET_UPDATE_STATE = createAction('MARKET_UPDATE_STATE');

export const MARKET_GET_MASTERDATA = () => async (dispatch) => {
    try {
        const response = await MasterdataApi.getAll();
        
        // Update coin setting
        const coinSetting = _.reduce(response.data.coin_settings, (memo, coinSetting) => {
            const { coin, currency } = coinSetting;
            const pair = coin + '_' + currency;

            memo[pair] = { ...coinSetting };
            return memo;
        }, {});
        await dispatch(MARKET_UPDATE_STATE({
            markets: { ...coinSetting },
        }));

        // Update coins confirmation
        const coinsConfirmation = _.reduce(response.data.coins_confirmation, (memo, coinConfirmation) => {
            const { coin } = coinConfirmation;
            memo[coin] = { ...coinConfirmation };
            return memo;
        }, {});
        await dispatch(MARKET_UPDATE_STATE({
            coinsConfirmation: { ...coinsConfirmation },
        }));

        // Update price groups
        const priceGroups = _.reduce(response.data.price_groups, (memo, priceGroup) => {
            const { coin, currency, group } = priceGroup;
            const pair = coin + '_' + currency;

            memo = fromJS(memo)
                .mergeDeep({
                    [pair]: {
                        [group]: { ...priceGroup },
                    },
                })
                .toJS();
            return memo;
        }, {});
        await dispatch(MARKET_UPDATE_STATE({
            priceGroups: { ...priceGroups },
        }));

        // Update withdrawal limit
        const withdrawalLimits = _.reduce(response.data.withdrawal_limits, (memo, withdrawalLimit) => {
            const { currency, security_level } = withdrawalLimit;

            memo = fromJS(memo)
                .mergeDeep({
                    [currency]: {
                        [security_level]: { ...withdrawalLimit },
                    },
                })
                .toJS();
            return memo;
        }, {});
        await dispatch(MARKET_UPDATE_STATE({
            withdrawalLimits: { ...withdrawalLimits },
        }));
    } catch (error) {
        console.log(error)
    }
};

export const MARKET_GET_PRICES = () => async (dispatch) => {
    try {
        const response = await PriceApi.getPrices();
        const marketPrices = _.reduce(response.data, (memo, marketPrice) => {
            const { coin, currency } = marketPrice;
            const pair = coin + '_' + currency;

            memo[pair] = { ...marketPrice };
            return memo;
        }, {});

        await dispatch(MARKET_UPDATE_STATE({
            markets: { ...marketPrices },
        }));
    } catch (error) {
        
    }
};

export const MARKET_GET_DATA = () => async (dispatch) => {
    await dispatch(MARKET_GET_MASTERDATA());
    await dispatch(MARKET_GET_PRICES());
};

export const MARKET_UPDATE_TRENDING_MARKETS = createAction('MARKET_UPDATE_TRENDING_MARKETS');
export const MARKET_GET_TRENDING_MARKETS = () => async (dispatch) => {
    try {
        const response = await TrendingApi.getTrendingMarkets();
        const trendingMarkets = _.reduce(response.data, (memo, market) => {
            const { coin, currency } = market;
            const pair = coin + '_' + currency;

            memo.push(pair);
            return memo;
        }, []);
        await dispatch(MARKET_UPDATE_TRENDING_MARKETS(trendingMarkets));
    } catch (error) {
    
    }
};


/**
 * =====================================================
 * Market reducer
 * =====================================================
 */

const defaultState = {
    markets: {},
    trendingMarkets: [],

    coinsConfirmation: {},
    priceGroups: {},
    withdrawalLimits: {},
};

export const marketReducer = handleActions({
    MARKET_UPDATE_STATE: (state, { payload }) => {
        return fromJS(state)
            .mergeDeep(payload)
            .toJS();
    },

    MARKET_UPDATE_TRENDING_MARKETS: (state, { payload }) => {
        const trendingMarkets = payload;
        return fromJS(state)
            .setIn(['trendingMarkets'], trendingMarkets)
            .toJS();
    },
}, defaultState);



/**
 * =====================================================
 * Market selectors
 * =====================================================
 */

export const marketSelector = createSelector(
    (store, coinPair) => ({
        markets: store.market.markets,
        coinPair: coinPair,
    }),
    ({ markets, coinPair }) => {
        const market = markets[coinPair];

        if (!market) {
            return null;
        }

        return marketFormat(market);
    }
);

export const topChangeMarketsSelector = createSelector(
    (store, changeType) => ({
        markets: store.market.markets,
        changeType: changeType,
    }),
    ({ markets, changeType }) => {
        const sortedMarketsByChange = _.orderBy(markets, (market) => {
            return -stringToNumber(market.change);
        });
        
        // Select top 8 market
        if (changeType === 'gainers') {
            const top8ChangeMarkets = sortedMarketsByChange.slice(0, 8)
                .map((market) => {
                    if (!market) {
                        return null;
                    }

                    const { coin, currency } = market;
                    const pair = coin + '_' + currency;
                    return pair;
                });
            return top8ChangeMarkets;
        } else { // change type = losers
            const top8ChangeMarkets = sortedMarketsByChange.slice(-8)
                .map((market) => {
                    if (!market) {
                        return null;
                    }

                    const { coin, currency } = market;
                    const pair = coin + '_' + currency;
                    return pair;
                })
                .reverse();
            return top8ChangeMarkets;
        }
    }
);

export const topVolumeMarketsSelector = createSelector(
    (store) => ({
        markets: store.market.markets,
    }),
    ({ markets }) => {
        const sortedMarketsByVolume = _.orderBy(markets, (market) => {
            return -market.volume;
        });
        
        // Select top 8 market
        const top8VolumeMarkets = sortedMarketsByVolume.slice(0, 8)
            .map((market) => {
                if (!market) {
                    return null;
                }
    
                const { coin, currency } = market;
                const pair = coin + '_' + currency;
                return pair;
            });
        return top8VolumeMarkets;
    }
);

export const marketsWithCurrencySelector = createSelector(
    (store, currency, sortProperty = 'coin', sortDirection = 'asc') => ({
        markets: store.market.markets,
        currency: currency,
        sortProperty: sortProperty,
        sortDirection: sortDirection,
    }),
    ({ markets, currency, sortProperty, sortDirection }) => {
        const marketsWithCurrency = _.reduce(markets, (memo, market) => {
            if (market.currency !== currency) {
                return memo;
            }

            const pair = market.coin + '_' + market.currency;
            memo.push(pair);

            return memo;
        }, []);

        const sortedMarkets = _.sortBy(marketsWithCurrency, [(coinPair) => {
            const market = markets[coinPair];
            const sortPropertyValue = sortProperty === 'coin' ? market[sortProperty].toLowerCase() : stringToNumber(market[sortProperty]);
            
            if (sortDirection === 'asc') {
                return sortPropertyValue;
            } else { // desc
                return -sortPropertyValue;
            }
        }]);

        return sortedMarkets;
    }
);

export const priceUsdSelector = createSelector(
    (store, currency) => ({
        markets: store.market.markets,
        currency: currency,
    }),
    ({ markets, currency }) => {
        const market = markets[currency];

        if (market.currency === 'usd') {
            return '$ ' + priceFormatWithPrecision(market.price, '0.01');
        }

        const currencyUsdPrice = new BigNumber(markets[market.currency + '_' + 'usd'].price);
        const coinPrice = currencyUsdPrice.multipliedBy(market.price).toNumber();

        return '$ ' + priceFormatWithPrecision(coinPrice, '0.01');
    }
);



export default marketReducer;
