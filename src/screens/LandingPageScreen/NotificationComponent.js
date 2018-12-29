import React from 'react';
import PureComponent from 'pure-component';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import AisxIcon from 'aisx-icon';

import styles from './NotificationComponent.style';


export class NotificationComponent extends PureComponent {

    render() {
        const { style } = this.props;

        return (
            <View style={[styles.container, style]}>
                {/* Icon */}
                <AisxIcon name="account" style={ styles.notificationIcon } />

                {/* Notification text */}
                <Text style={ styles.notificationText }>
                    AIS-X Will Support the Upcoming Bitcoin
                </Text>

                {/* More notifications icon */}
                <AisxIcon name="account" style={ styles.moreNotificationsIcon } />
            </View>
        );
    }
}


export default NotificationComponent;
