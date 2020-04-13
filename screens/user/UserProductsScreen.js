import React from 'react';
import { FlatList, StyleSheet, Button, Alert } from 'react-native';

import ProductItem from '../../component/shop/ProductItem';

import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../component/UI/HeaderButton';
import Colors from '../../constant/Colors';
import * as productActions from '../../store/actions/productsActions';

const UserProductsScreen = props => {
    const userProducts = useSelector(state => state.products.userProducts);
    const dispatch = useDispatch();


    const editProducthandler = (id) => {
        props.navigation.navigate('EditProduct', { productId: id });

    };
    const deleteHandler = (id) => {
        Alert.alert('Are you sure!', 'Do you really want to delete this item?', [
            { text: 'No', style: 'default' },
            {
                text: 'Yes', style: 'destructive', onPress: () => {
                    dispatch(productActions.deleteProduct(id));
                }
            }

        ]);

    };

    return (

        <FlatList
            data={userProducts}
            keyExtractor={item => item.id}
            renderItem={itemData => <ProductItem
                image={itemData.item.imageUrl}
                title={itemData.item.title}
                price={itemData.item.price}
                onSelect={() => { editProducthandler(itemData.item.id) }}
            >
                <Button
                    color={Colors.primaryColor}
                    title='Edit'
                    onPress={() => {
                        editProducthandler(itemData.item.id);
                    }}></Button>
                <Button
                    color={Colors.primaryColor}
                    title='Delete'
                    onPress={() => deleteHandler(itemData.item.id)}
                ></Button>
            </ProductItem>
            }

        />
    );

};

const styles = StyleSheet.create({

});

UserProductsScreen.navigationOptions = navData => {
    return {
        headerTitle: 'Your Products',
        headerLeft: (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title='Menu' iconName='ios-menu' onPress={() => {
                    navData.navigation.toggleDrawer();
                }} />
            </HeaderButtons>
        ),
        headerRight: (
            < HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='Add' iconName='md-create' onPress={() => {
                    navData.navigation.navigate('EditProduct');
                }} />
            </HeaderButtons>
        ),
    };


};

export default UserProductsScreen;