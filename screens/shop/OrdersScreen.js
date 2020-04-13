import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../component/UI/HeaderButton';
import OrderItem from '../../component/shop/OrderItem';

const OrdersScreen = props => {

    const orders = useSelector(state => state.order.orders);

    return <FlatList
        data={orders}
        keyExtractor={Item => Item.id}
        renderItem={itemData => <OrderItem
            amount={itemData.item.totalAmount}
            date={itemData.item.readableDate}
            items={itemData.item.items}
        />}
    />

};




const styles = StyleSheet.create({

});

OrdersScreen.navigationOptions = navData => {
    return {
        headerTitle: 'your orders',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ),
    };


};

export default OrdersScreen;