import numbro from 'numbro';
import numeral from 'numeral';


const stringToNumber = (numberString) => {
    return numeral(numberString).value();
};

const countDecimals = (value) => {
    if(Math.floor(value) === value) return 0;
    return value.toString().split(".")[1].length || 0; 
}

export const priceFormat = (number, formatOption = {}) => {
    number = stringToNumber(number);

    try {
        return numbro(number).format(formatOption);
    } catch (error) {
        return number;
    }
};

export const priceFormatWithPrecision = (number, precision = '0.01') => {
    precision = stringToNumber(precision);

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


export const percentFormat = (percent) => {
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
