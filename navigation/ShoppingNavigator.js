import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Platform } from 'react-native';
import ProductOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import Colors from '../constant/Colors';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrdersScreen';
import Icon from 'react-native-vector-icons/Ionicons';
import UserProductScreen from '../screens/user/UserProductsScreen';
import EditProductScreen from '../screens/user/EditProductScreen';


const defaultNavOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'OpenSansBold'

    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primaryColor
};




const ProductsNavigator = createStackNavigator({
    ProductOverview: ProductOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen

}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Icon name='ios-cart'
            size={23}
            color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions

});

const OrdersNavigator = createStackNavigator({
    Orders: OrderScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Icon name='ios-list'
            size={23}
            color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions

});

const UserProductNavigator = createStackNavigator({
    UserProduct: UserProductScreen,
    EditProduct: EditProductScreen
}, {
    navigationOptions: {
        drawerIcon: drawerConfig => <Icon name='ios-create'
            size={23}
            color={drawerConfig.tintColor} />
    },
    defaultNavigationOptions: defaultNavOptions

});

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator,
    Admin: UserProductNavigator

}, {
    contentOptions: {
        activeTintColor: Colors.primaryColor
    }
});

export default createAppContainer(ShopNavigator);