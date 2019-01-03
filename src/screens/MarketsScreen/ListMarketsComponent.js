import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, FlatList } from 'react-native';
import { connect } from 'react-redux';

import GlobalMartketDetail from 'components/GlobalMarketDetail';
import { marketsWithCurrencySelector } from 'store/market';

import styles from './ListMarketsComponent.style';


export class ListMarketsComponent extends PureComponent {

    constructor(props) {
        super(props);

        this.renderMarketDetail_keyExtractor = this.renderMarketDetail_keyExtractor.bind(this);
        this.renderMarketDetail = this.renderMarketDetail.bind(this);
    }

    renderMarketDetail_keyExtractor(item) {
        return item;
    }
    renderMarketDetail({ item: coinPair, index }) {
        return (
            <GlobalMartketDetail type={ 3 } coinPair={ coinPair } index={ index } />
        );
    }

    render() {
        const { style, markets } = this.props;

        return (
            <View style={[styles.container, style]}>
                <FlatList
                    key={ markets.join(',') }
                    data={ markets }
                    keyExtractor={ this.renderMarketDetail_keyExtractor }
                    renderItem={ this.renderMarketDetail }
                />
            </View>
        );
    }
}


const mapStateToProps = (store, ownProps) => ({
    markets: marketsWithCurrencySelector(store, ownProps.currency, ownProps.sortProperty, ownProps.sortDirection)
});

export default connect(mapStateToProps)(ListMarketsComponent);
