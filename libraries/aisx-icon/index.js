import React from 'react';
import PureComponent from 'pure-component';
import { Text } from 'react-native';

import mapping from './mapping';


class AixsIcon extends PureComponent {
    render () {
        const { name, style, ...props } = this.props;
        const iconUnicode = mapping[name] || 'Icon not found';

        return (
            <Text { ...props } style={[{ fontFamily: 'aisxicon' }, style || {}]}>
                { iconUnicode }
            </Text>
        )
    }
}


export default AixsIcon;
