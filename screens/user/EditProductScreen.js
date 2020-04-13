import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../component/UI/HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import * as ProductActions from '../../store/actions/productsActions';

const EditProductScreen = props => {
    const dispatch = useDispatch();
    const prodId = props.navigation.getParam('productId');
    const editedProduct = useSelector(
        state => state.products.userProducts.find(prod => prod.id === prodId));

    const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
    const [imageUrl, setImageUrl] = useState(editedProduct ? editedProduct.imageUrl : '');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState(editedProduct ? editedProduct.description : '');

    const submitHandler = useCallback(() => {
        if (editedProduct) {
            dispatch(ProductActions.updateProduct(prodId, title, description, imageUrl));
        }
        else {
            dispatch(ProductActions.createProduct(title, description, imageUrl, +price));
        }

    }, [dispatch, prodId, title, imageUrl, description, price]);

    useEffect(() => {
        props.navigation.setParams({ submit: submitHandler });

    }, [submitHandler]);

    return (
        <ScrollView>
            <View style={Styles.form}>
                <View style={Styles.formControl}>
                    <Text style={Styles.lable}>Title</Text>
                    <TextInput style={Styles.input}
                        value={title}
                        onChangeText={text => setTitle(text)} />
                </View>
                <View style={Styles.formControl}>
                    <Text style={Styles.lable}>Image Url</Text>
                    <TextInput style={Styles.input}
                        value={imageUrl}
                        onChangeText={text => setImageUrl(text)} />
                </View>
                {editedProduct ? null : (
                    <View style={Styles.formControl}>
                        <Text style={Styles.lable}>Price</Text>
                        <TextInput style={Styles.input}
                            value={price}
                            onChangeText={text => setPrice(text)} />
                    </View>
                )}

                <View style={Styles.formControl}>
                    <Text style={Styles.lable}>Description</Text>
                    <TextInput style={Styles.input}
                        value={description}
                        onChangeText={text => setDescription(text)} />
                </View>
            </View>
        </ScrollView >
    );

};

EditProductScreen.navigationOptions = navData => {
    const submitfn = navData.navigation.getParam('submit');
    return {

        headerTitle: navData.navigation.getParam('productId')
            ? 'Edit Product'
            : 'Edit Product',

        headerRight: (
            < HeaderButtons HeaderButtonComponent={HeaderButton} >
                <Item title='save' iconName='md-checkmark' onPress={submitfn} />
            </HeaderButtons>
        ),
    };

};

const Styles = StyleSheet.create({
    form: {
        margin: 20

    },
    formControl: {
        width: '100%'

    },
    lable: {
        fontFamily: 'OpenSansBold',
        marginVertical: 8

    },
    input: {
        paddingHorizontal: 2,
        paddingVertical: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1
    }

});

export default EditProductScreen;