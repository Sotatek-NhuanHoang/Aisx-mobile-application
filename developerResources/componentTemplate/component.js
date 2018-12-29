import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';

import styles from './ComponentName.style';


export class ComponentName extends PureComponent {

    constructor(props) {
        super(props);
    }

    render() {
        const { style } = this.props;
        
        return (
            <View style={[styles.container, style]}>

            </View>
        );
    }
}


export default ComponentName;
