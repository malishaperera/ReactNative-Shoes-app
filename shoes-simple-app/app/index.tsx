import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import ProductListItem from '../components/ProductListItem';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    Promise.all([
      fetch('https://dummyjson.com/products/category/mens-shoes').then((res) =>
        res.json()
      ),
      fetch('https://dummyjson.com/products/category/womens-shoes').then((res) =>
        res.json()
      ),
    ])
      .then(([mensData, womensData]) => {
        
        const combinedProducts = [
          ...mensData.products,
          ...womensData.products,
        ];
       
        setProducts(combinedProducts.slice(0, 30));
      })
      .catch((error) => console.error('Error fetching data:', error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <FlatList
      data={products}
      numColumns={2}
      contentContainerClassName='gap-2'
      columnWrapperClassName='gap-2'
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
