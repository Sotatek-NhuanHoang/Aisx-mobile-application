import React from 'react';
import PureComponent from 'pure-component';
import { SafeAreaView, View, StatusBar, Platform } from 'react-native';

import ViewContainer from 'react-native-view-container';

import styles from './GlobalHeader.style';
import { Colors } from 'styles/variables';


class GlobalHeader extends PureComponent {

    render() {
        const { titleComponent, leftComponent, rightComponent, style, ...otherProps } = this.props;

        return (
            <ViewContainer style={ styles.container } { ...otherProps }>
                {Platform.OS !== 'ios' ? (
                    <StatusBar backgroundColor={ Colors.yellow } />
                ) : null}

                <View style={[styles.wrapper, style]}>
                    {/* Left component */}
                    <View style={ styles.leftComponentContainer }>
                        { leftComponent }
                    </View>

                    {/* Title component */}
                    <View style={ styles.titleComponentContainer }>
                        { titleComponent }
                    </View>

                    {/* Right component */}
                    <View style={ styles.rightComponentContainer }>
                        { rightComponent }
                    </View>
                </View>
            </ViewContainer>
        );
    }
}


export default GlobalHeader;
