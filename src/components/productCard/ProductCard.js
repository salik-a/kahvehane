
import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import styles from './ProductCardStyle'
const ProductCard = () => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
               
            </View>
        </TouchableWithoutFeedback>

    );
};


export default ProductCard;