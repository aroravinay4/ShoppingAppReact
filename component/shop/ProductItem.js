import React from 'react';
import { View, Text, StyleSheet, Image, Button, TouchableOpacity, Platform } from 'react-native';
import Colors from '../../constant/Colors';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';




const ProductItem = props => {
    let TouchableCmp = TouchableOpacity;

    if (Platform.OS === 'android ' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;

    }

    return (
        <View style={styles.product}>
            <View style={styles.touchable}>
                <TouchableCmp onPress={props.onSelect} useForeground>

                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={{ uri: props.image }} />
                    </View>
                    <View style={styles.detail}>
                        <Text style={styles.title}>{props.title}</Text>
                        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
                    </View>
                    <View style={styles.action}>
                       {props.children}
                    </View>

                </TouchableCmp>
            </View>
        </View>
    );


};

const styles = StyleSheet.create({
    product: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.26,
        shadowRadius: 8,
        elevation: 3,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20,
        overflow: "hidden"


    },
    imageContainer: {
        width: '100%',
        height: '60%',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        overflow: "hidden"

    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4,
        fontFamily: 'OpenSansBold'

    },
    price: {
        fontSize: 14,
        color: '#888',
        fontFamily: 'OpenSans'

    },
    action: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 20

    },
    detail: {
        padding: 10
    },
    touchable: {
        borderRadius: 10
    }


});

export default ProductItem;