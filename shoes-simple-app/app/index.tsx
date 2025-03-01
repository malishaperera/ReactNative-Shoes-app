import React, { useEffect, useState } from 'react';
import { FlatList, View, ActivityIndicator, useWindowDimensions } from 'react-native';
import ProductListItem from '../components/ProductListItem';
import { listProducts } from '../api/product'; 

export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { width } = useWindowDimensions();
  const numColumns = width > 500 ? 3 : 2;

  useEffect(() => {
    async function fetchData() {
      const data = await listProducts();
      setProducts(data);
      setLoading(false);
    }
    fetchData();
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
      contentContainerClassName=""
      columnWrapperClassName="mx-w-[960px] w-full mx-auto"
      className="bg-gray-500"
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <ProductListItem product={item} />}
    />
  );
}
