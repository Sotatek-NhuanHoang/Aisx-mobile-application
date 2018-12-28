import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import isEqual from 'react-fast-compare';

import I18n from 'i18n';


const styles = {};


class GlobalLoc extends Component {
    shouldComponentUpdate(nextProps) {
        const { customizer, dispatch, ...params } = this.props;
        const { customizer: nextCustomizer, dispatch: nextDispatch, ...nextParams } = nextProps;
        return !isEqual(params, nextParams);
    }

    render() {
        const { locKey, style, ellipsizeMode, numberOfLines, ...props } = this.props

        return (
            <Text style={[styles.text, style || {}]} ellipsizeMode={ ellipsizeMode || 'tail' } numberOfLines={ numberOfLines }>
                { I18n.t(locKey, props) }
            </Text>
        );
    }
}


GlobalLoc.propTypes = {
    locKey: PropTypes.any.isRequired,
};


const mapStateToProps = ({ i18n }) => ({
    locale: i18n.locale,
    version: i18n.version,
});

export default connect(mapStateToProps)(GlobalLoc);
