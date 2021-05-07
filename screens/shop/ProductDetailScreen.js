import React from 'react';
import {
    Button,
    StyleSheet,
    ScrollView,
    Image,
    Text,
    View
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Colors from '../../constant/Colors';
import * as cartActions from '../../store/actions/cartActions';


const ProductDetailScreen = props => {
    const productId = props.navigation.getParam('productId');
    const selectedProduct = useSelector(state =>
        state.products.availableProducts.find(prod => prod.id === productId));

    const dispatch = useDispatch();
    return (
        <ScrollView>
            <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
            <View style={styles.action}>
                <Button color={Colors.primaryColor} title="Add to cart" onPress={() => { dispatch(cartActions.addToCart(selectedProduct)) }} />
            </View>
            <Text style={styles.price}> ${selectedProduct.price.toFixed(2)}</Text>
            <Text style={styles.description}>{selectedProduct.description}</Text>

        </ScrollView>
    );

};


ProductDetailScreen.navigationOptions = navData => {
    return {
        headerTitle: navData.navigation.getParam('productTitle')
    }

};
const styles = StyleSheet.create({
    image: {

        width: '100%',
        height: 300,


    },
    action: {
        marginVertical: 10,
        alignItems: "center"

    },
    price: {
        fontSize: 20,
        color: '#888',
        textAlign: 'center',
        marginVertical: 20,
        fontFamily: 'OpenSansBold'
    },
    description: {
        fontFamily: 'OpenSans',
        fontSize: 14,
        textAlign: "center",
        marginHorizontal: 10

    }

});

export default ProductDetailScreen;