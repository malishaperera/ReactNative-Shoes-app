import { View, Text, FlatList } from "react-native";
import products from "../assets/products.json";
import ProductListItem from "../components/ProductListItem";
import { Button, ButtonText } from "@/components/ui/button";



export default function HomeScreen() {
  return (
    <>
      <Button variant="outline">
        <ButtonText>Press Me</ButtonText>
      </Button>



      {/* <FlatList
        data={products}
        renderItem={({ item }) => <ProductListItem product={item} />}
        keyExtractor={(item) => item.id.toString()} // Ensure each item has a unique key
      /> */}
    </>

  );
}
