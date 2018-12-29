import { handleActions, createAction } from 'redux-actions';
import { fromJS } from 'immutable';
import { createSelector } from 'reselect';
import _ from 'lodash';

import PriceApi from 'api/PriceApi';
import MasterdataApi from 'api/MasterdataApi';
import TrendingApi from 'api/TrendingApi';
import { priceFormatWithPrecision, percentFormat } from 'helpers/format';


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

            memo[pair] = {
                price: { ...marketPrice },
            };
            return memo;
        }, {});

        await dispatch(MARKET_UPDATE_STATE({
            markets: { ...marketPrices },
        }));
    } catch (error) {
        
    }
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

export const trendingMarketsSelector = createSelector(
    (store) => ({
        markets: store.market.markets,
        trendingMarkets: store.market.trendingMarkets,
    }),
    ({ markets, trendingMarkets }) => {
        return _.reduce(trendingMarkets, (memo, trendingMarket) => {
            const marketData = markets[trendingMarket];

            if (!marketData || !marketData.price) {
                return memo;
            }

            const { precision } = marketData;
            const formatedMarketData = fromJS(marketData)
                .mergeDeep({
                    price: {
                        price: priceFormatWithPrecision(marketData.price.price, precision),
                        change: percentFormat(marketData.price.change),
                    }
                })
                .toJS();
            
            memo.push(formatedMarketData);
            return memo;
        }, []);
    }
);



export default marketReducer;