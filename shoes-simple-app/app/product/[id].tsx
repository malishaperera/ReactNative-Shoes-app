import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Card } from "@/components/ui/card";
import { Image } from "@/components//ui/image";
import { VStack } from "@/components//ui/vstack";
import { Heading } from "@/components//ui/heading";
import { Box } from "@/components//ui/box";
import { Button, ButtonText } from "@/components//ui/button";
import { Text } from "@/components//ui/text";
import { Stack } from "expo-router";
import { getProductById } from "@/api/product";
import { useCart } from '@/store/cartStore';

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const addProduct = useCart(state => state.addProduct);



  // useEffect(() => {
  //   fetch(`https://dummyjson.com/products/${id}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProduct(data);
  //     })
  //     .catch((error) => console.error('Error fetching product details:', error))
  //     .finally(() => setLoading(false));
  // }, [id]);
  useEffect(() => {
    async function fetchProduct() {
      setLoading(true);
      const data = await getProductById(Number(id)); // Use the new function
      setProduct(data);
      setLoading(false);
    }
  
    fetchProduct();
  }, [id]);
  

  const addToCart = () =>{
    addProduct(product);
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  if (!product) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Product not found</Text>
      </View>
    );
  }

  return (
    <Box className=" flex-1 items-center p-3">
        <Stack.Screen name="product/[id]" options={{ title: product.title}} />
    <Card  className="p-5 rounded-lg  max-w-[960px] w-full m-3 flex-1">

    <Image
      source={{
        uri: product.thumbnail, 
      }}
      className="mb-6 h-[240px] w-full rounded-md aspect-[4/3]"
      alt={`${product.title} image`}
      style={{ width: '100%', height: 240 }}
    />
    <Text className="text-sm font-normal mb-2 text-typography-700">
      {product.title}
    </Text>
    <VStack className="mb-6">
      <Heading size="md" className="mb-4">
        ${product.price}
      </Heading>
      <Text size="sm">
        {product.description}
      </Text>
    </VStack>
    <Box className="flex-col sm:flex-row">
      <Button onPress={addToCart} className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
        <ButtonText size="sm">Add to cart</ButtonText>
      </Button>
      <Button variant="outline" className="px-4 py-2 border-outline-300 sm:flex-1">
        <ButtonText size="sm" className="text-typography-600">
          Wishlist
        </ButtonText>
      </Button>
    </Box>
  </Card>
  </Box>
  );
}
