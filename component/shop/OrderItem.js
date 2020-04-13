import React, { useState } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';

import CartItem from '../../component/shop/CartItem';
import Colors from '../../constant/Colors';
import Card from '../UI/Card';

const OrderItem = props => {
    const [showDetails, setShowDetails] = useState(false);

    return (
        <Card style={styles.orderItem}>
            <View style={styles.summery}>
                <Text style={styles.totalAmount}>${props.amount.toFixed(2)}</Text>
                <Text style={styles.date}>{props.date}</Text>
            </View>
            <Button color={Colors.primaryColor} title={showDetails ? 'Hide Details' : 'Show Details'}
                onPress={() => { setShowDetails(preState => !preState) }} />

            {showDetails && <View style={styles.detailItems}>
                {props.items.map(cartItems => <CartItem
                    key={cartItems.productId}
                    quantity={cartItems.quantity}
                    amount={cartItems.sum}
                    title={cartItems.productTitle} />)}


            </View>
            }
        </Card>

    );
};

const styles = StyleSheet.create({
    orderItem: {
        overflow: "hidden",
        margin: 20,
        padding: 10,
        alignItems: "center"
    },
    summery: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: '100%',
        marginBottom: 10

    },
    totalAmount: {
        fontFamily: 'OpenSansBold',
        fontSize: 16

    },
    date: {
        fontSize: 16,
        fontFamily: 'OpenSans',
        color: '#888'
    },
    detailItems: {
        width: '100%'

    }




});

export default OrderItem;