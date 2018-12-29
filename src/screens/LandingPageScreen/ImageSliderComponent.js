import React from 'react';
import PureComponent from 'pure-component';
import { View, Text, Image } from 'react-native';
import { connect } from 'react-redux';
import Swiper from 'react-native-swiper';

import styles from './ImageSliderComponent.style';


export class ImageSliderComponent extends PureComponent {

    state = {
        listImagesSource: [
            { uri: 'https://www.manhattandigest.com/wp-content/uploads/2017/09/bitcoin-perfecthue.jpg' },
            { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm6Zs6DcveIQhHQytorio78sixDClZDLweYSTY5__7jGZTTH58dg' },
            { uri: 'https://www.blackopscrypto.com/wp-content/uploads/why-bitcoins-price-continues-to-640x445.jpg' },
            { uri: 'http://cafefcdn.com/thumb_w/650/2017/84289973-concept-of-tether-coin-aka-usdt-a-cryptocurrency-blockchain-platform-digital-money-1511256840179.jpg' }
        ],
        imagePositionNumber: 0,
    }

    constructor(props) {
        super(props);
        this.onImagePositionChanged = this.onImagePositionChanged.bind(this);
    }

    onImagePositionChanged(position) {
        this.setState({ imagePositionNumber: position, });
    }

    render() {
        const { style } = this.props;
        const { listImagesSource, imagePositionNumber } = this.state;

        return (
            <View style={[styles.container, style]}>
                <View style={styles.imageSliderContainer }>
                    {/* Slider */}
                    <Swiper 
                        onIndexChanged={ this.onImagePositionChanged }
                        showsButtons={false}
                        showsPagination={false}
                        autoplayTimeout={4}
                        autoplay={ true }
                    >
                        {listImagesSource.map((img, index) => {
                            return (
                                <View style={ styles.imageItemContainer } key={index}>
                                    <Image style={ styles.imageItem } source={{ uri: img.uri }} />
                                </View>
                            );
                        })}
                    </Swiper>

                    {/* Image position */}
                    <View style={ styles.imagePositionContainer }>
                        <Text style={ styles.imagePositionText }>
                            { imagePositionNumber + 1 }
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}


export default ImageSliderComponent;
