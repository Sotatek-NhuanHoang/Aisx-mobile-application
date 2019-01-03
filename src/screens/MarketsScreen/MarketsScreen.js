import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';

import AisxIcon from 'aisx-icon';
import GlobalHeader from 'components/GlobalHeader';
import ListMarketsComponent from './ListMarketsComponent';
import { MARKET_GET_DATA } from 'store/market';

import styles from './MarketsScreen.style';


export class MarketsScreen extends PureComponent {

    state = {
        marketCurrency: 'btc',
        sortProperty: 'coin', // coin, volume, price, change,
        sortDirection: 'asc', // asc, desc
    }

    constructor(props) {
        super(props);

        this.props.navigation.addListener('willFocus', async () => {
            await this.props.getMarketsData();
        });
    }

    onTabPressed(currency) {
        this.setState({
            marketCurrency: currency,
            sortProperty: 'coin',
            sortDirection: 'asc',
        });
    }

    onHeaderTitlePressed(sortProperty) {
        this.setState((prevState) => {
            let sortDirection;
            if (prevState.sortProperty === sortProperty) {
                sortDirection = prevState.sortDirection === 'asc' ? 'desc' : 'asc';
            } else {
                sortDirection = 'asc';
            }

            return {
                sortProperty: sortProperty,
                sortDirection: sortDirection,
            };
        });
    }

    renderFavoriteTab() {
        const { marketCurrency } = this.state;

        return (
            <TouchableOpacity
                onPress={() => this.onTabPressed('favourites')}
                style={[styles.tabContainer, marketCurrency === 'favourites' ? styles.tabContainer__active : null]}
            >
                <AisxIcon name="favorites" style={[styles.tabIcon, marketCurrency === 'favourites' ? styles.tabIcon__active : null]} />
            </TouchableOpacity>
        );
    }

    renderCurrencyTab(currency) {
        const { marketCurrency } = this.state;

        return (
            <TouchableOpacity
                onPress={() => this.onTabPressed(currency)}
                style={[styles.tabContainer, marketCurrency === currency ? styles.tabContainer__active : null]}
            >
                <Text style={[styles.tabLabel, marketCurrency === currency ? styles.tabLabel__active : null]}>
                    { currency.toUpperCase() }
                </Text>
            </TouchableOpacity>
        );
    }

    render() {
        const { style } = this.props;
        const { marketCurrency, sortProperty, sortDirection } = this.state;
        
        return (
            <View style={[styles.container, style]}>
                <GlobalHeader
                    titleComponent={(
                        <Text style={ styles.header_Title }>Markets</Text>
                    )}
                    rightComponent={(
                        <AisxIcon name="Search" style={ styles.header_SearchButton } />
                    )}
                />

                {/* Tabbar */}
                <View style={ styles.tabbarContainer }>
                    { this.renderFavoriteTab() }
                    { this.renderCurrencyTab('ais') }
                    { this.renderCurrencyTab('btc') }
                    { this.renderCurrencyTab('eth') }
                    { this.renderCurrencyTab('tusd') }
                    { this.renderCurrencyTab('usd') }
                </View>

                {/* Market sortable header */}
                <View style={ styles.marketHeader }>
                    {/* Name and volume */}
                    <View style={ styles.marketHeader_NameVolumeContainer }>
                        {/* Name */}
                        <TouchableOpacity
                            style={ styles.marketHeader_ColContainer }
                            onPress={() => this.onHeaderTitlePressed('coin')}
                        >
                            <Text style={[styles.marketHeader_TitleText, sortProperty === 'coin' ? styles.marketHeader_TitleText__active: null]}>
                                Name
                            </Text>

                            {/* Sort icon */}
                            {sortProperty === 'coin' ? (
                                <AisxIcon
                                    name={sortDirection === 'asc' ? 'arrow_1' : 'arrow_1_1'}
                                    style={ styles.marketHeader_TitleIcon }
                                />
                            ) : null}
                        </TouchableOpacity>

                        <Text style={ styles.marketHeader_TitleText }> / </Text>

                        {/* Volume */}
                        <TouchableOpacity
                            style={ styles.marketHeader_ColContainer }
                            onPress={() => this.onHeaderTitlePressed('volume')}
                        >
                            <Text style={[styles.marketHeader_TitleText, sortProperty === 'volume' ? styles.marketHeader_TitleText__active: null]}>
                                Volume
                            </Text>

                            {/* Sort icon */}
                            {sortProperty === 'volume' ? (
                                <AisxIcon
                                    name={sortDirection === 'asc' ? 'arrow_1' : 'arrow_1_1'}
                                    style={ styles.marketHeader_TitleIcon }
                                />
                            ) : null}
                        </TouchableOpacity>
                    </View>

                    {/* Price */}
                    <View style={ styles.marketHeader_PriceContainer }>
                        {/* Name */}
                        <TouchableOpacity
                            style={ styles.marketHeader_ColContainer }
                            onPress={() => this.onHeaderTitlePressed('price')}
                        >
                            <Text style={[styles.marketHeader_TitleText, sortProperty === 'price' ? styles.marketHeader_TitleText__active: null]}>
                                Price
                            </Text>

                            {/* Sort icon */}
                            {sortProperty === 'price' ? (
                                <AisxIcon
                                    name={sortDirection === 'asc' ? 'arrow_1' : 'arrow_1_1'}
                                    style={ styles.marketHeader_TitleIcon }
                                />
                            ) : null}
                        </TouchableOpacity>
                    </View>

                    {/* 24h change */}
                    <View style={ styles.marketHeader_ChangeContainer }>
                        {/* Name */}
                        <TouchableOpacity
                            style={ styles.marketHeader_ColContainer }
                            onPress={() => this.onHeaderTitlePressed('change')}
                        >
                            <Text style={[styles.marketHeader_TitleText, sortProperty === 'change' ? styles.marketHeader_TitleText__active: null]}>
                                24h Change%
                            </Text>

                            {/* Sort icon */}
                            {sortProperty === 'change' ? (
                                <AisxIcon
                                    name={sortDirection === 'asc' ? 'arrow_1' : 'arrow_1_1'}
                                    style={ styles.marketHeader_TitleIcon }
                                />
                            ) : null}
                        </TouchableOpacity>
                    </View>
                </View>

                {/* List markets */}
                <ListMarketsComponent
                    currency={ marketCurrency }
                    sortProperty={ sortProperty }
                    sortDirection={ sortDirection }
                />
            </View>
        );
    }
}


const mapDispatchToProps = (dispatch) => ({
    getMarketsData: () => {
        return dispatch(MARKET_GET_DATA());
    },
});

export default connect(null, mapDispatchToProps)(MarketsScreen);
