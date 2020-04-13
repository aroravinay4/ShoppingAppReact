import React from 'react';
import { FlatList, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductItem from '../../component/shop/ProductItem';
import * as cartActions from '../../store/actions/cartActions';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../../component/UI/HeaderButton';
import Colors from '../../constant/Colors';




const ProductsOverviewScreen = props => {
  const selectItemHandler = (id, title) => {
    props.navigation.navigate('ProductDetail',
      {
        productId: id,
        productTitle: title
      });
  };
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <ProductItem
        image={itemData.item.imageUrl}
        title={itemData.item.title}
        price={itemData.item.price}
        onSelect={() => {
          selectItemHandler(itemData.item.id, itemData.item.title);

        }}

      >
        <Button
          color={Colors.primaryColor}
          title='View Details'
          onPress={() => {
            selectItemHandler(itemData.item.id, itemData.item.title);
          }}></Button>
        <Button
          color={Colors.primaryColor}
          title='Add to Cart'
          onPress={() => {
            dispatch(cartActions.addToCart(itemData.item));
          }}></Button>
      </ProductItem>
      }
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Menu' iconName='ios-menu' onPress={() => {
          navData.navigation.toggleDrawer();
        }} />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='Cart' iconName='ios-cart' onPress={() => {
          navData.navigation.navigate('Cart')
        }} />
      </HeaderButtons>
    )
  };
};


export default ProductsOverviewScreen;
