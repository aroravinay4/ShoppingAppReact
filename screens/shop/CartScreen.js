import React from 'react';
import { View, Button, StyleSheet, Text, FlatList } from 'react-native';
import Colors from '../../constant/Colors';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../component/shop/CartItem';
import * as CartActions from '../../store/actions/cartActions';
import * as OrderActions from '../../store/actions/ordersActions';
import Card from '../../component/UI/Card';


const CartScreen = props => {
    const cartTotalAmount = useSelector(state => state.cart.totalAmount);
    const cartItems = useSelector(state => {
        const transformedcartitems = [];
        for (const key in state.cart.items) {
            transformedcartitems.push({
                productId: key,
                productTitle: state.cart.items[key].productTitle,
                productPrice: state.cart.items[key].productPrice,
                quantity: state.cart.items[key].quantity,
                sum: state.cart.items[key].sum

            });

        }
        return transformedcartitems.sort((a, b) =>
            a.productId > b.productId ? 1 : -1
        );


    });

    const dispatch = useDispatch();

    return (
        <View style={styles.screen}>
            <Card style={styles.summery}>
                <Text style={styles.summerText}>Total:
                <Text style={styles.amount}>${Math.round(cartTotalAmount.toFixed(2) * 100) / 100}</Text>
                </Text>

                <Button color={Colors.accentColor} title='Order Now'
                    disabled={cartItems.length === 0}
                    onPress={() => { dispatch(OrderActions.addOrder(cartItems, cartTotalAmount)) }} />
            </Card>

            <FlatList
                data={cartItems}
                keyExtractor={item => item.productId}
                renderItem={itemData =>
                    <CartItem
                        quantity={itemData.item.quantity}
                        title={itemData.item.productTitle}
                        amount={itemData.item.sum}
                        deletable
                        onRemove={() => {
                            dispatch(CartActions.removeFromCart(itemData.item.productId));
                        }} />} />
        </View>

    );

};


const styles = StyleSheet.create({
    screen: {
        margin: 10
    },
    amount: {
        color: Colors.primaryColor

    },
    summery: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 10,
        padding: 10,

    },
    summerText: {
        fontFamily: 'OpenSensBold',
        fontSize: 18


    }

});

CartScreen.navigationOptions = navData => {
    return {
        headerTitle: 'your cart'
    }
};

export default CartScreen;