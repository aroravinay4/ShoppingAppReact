import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const CartItem = props => {

    return (
        <View style={styles.cartItem}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{props.quantity}  </Text>
                <Text style={styles.mainText}>{props.title}</Text>
            </View>

            <View style={styles.itemData}>
                <Text style={styles.mainText}>${props.amount.toFixed(2)}</Text>


                {props.deletable && (
                    <TouchableOpacity style={styles.remove} onPress={props.onRemove}>
                        <Icon name='ios-trash'
                            size={23}
                            color="red" />
                    </TouchableOpacity>)}

            </View>



        </View>

    );

};

const styles = StyleSheet.create({

    itemData: {
        flexDirection: 'row',
        alignItems: "center"

    },
    quantity: {
        fontFamily: 'OpenSans',
        color: '#888',
        fontSize: 16

    },
    mainText: {
        fontFamily: 'OpenSansBold',
        fontSize: 16
    },

    remove: {
        marginLeft: 20,


    },
    cartItem: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20


    }


});

export default CartItem;