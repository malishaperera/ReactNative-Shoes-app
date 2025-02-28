import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, useWindowDimensions } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import { useBreakpointValue } from '@/components/ui/utils/use-break-point-value';

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const {width} = useWindowDimensions();
  const numColumns = width > 700 ? 3 : 2;

  // const numColumns = useBreakpointValue({
  //   default: "column",
  //   sm: "row",
  //   xl:4
  // });

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
      key={numColumns}
      data={products}
      numColumns={numColumns}
      contentContainerClassName='gap-2'
      columnWrapperClassName='gap-2 mx-w-[960px] w-full mx-auto'
      className='bg-gray-500'
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
