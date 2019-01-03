import numbro from 'numbro';
import numeral from 'numeral';
import { fromJS } from 'immutable';


export const stringToNumber = (numberString = 0) => {
    return numeral(numberString).value();
};

export const countDecimals = (value) => {
    if (Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}

export const priceFormat = (number = 0, formatOption = {}) => {
    number = stringToNumber(number);

    try {
        return numbro(number).format(formatOption);
    } catch (error) {
        return number;
    }
};

export const priceFormatWithPrecision = (number = 0, precision = '0.01') => {
    try {
        const formatOption = {
            trimMantissa: true,
            mantissa: countDecimals(precision),
        };
        return numbro(number).format(formatOption);
    } catch (error) {
        return number;
    }
};


export const percentFormat = (percent = 0) => {
    percent = stringToNumber(percent);

    try {
        const formatedPercent = numbro(percent).format({
            forceSign: true,
            trimMantissa: true,
            mantissa: 4,
        });
        return formatedPercent + ' %';
    } catch (error) {
        return percent;
    }
};

export const marketFormat = (market) => {
    const { precision } = market;
    const formatedMarket = fromJS(market)
        .mergeDeep({
            last_24h_price: priceFormatWithPrecision(market.last_24h_price, precision),
            price: priceFormatWithPrecision(market.price, precision),
            change: stringToNumber(market.change),
            formatedChange: percentFormat(market.change),
            volume: priceFormatWithPrecision(market.volume, '0.01'),
        })
        .toJS();
    return formatedMarket;
};
