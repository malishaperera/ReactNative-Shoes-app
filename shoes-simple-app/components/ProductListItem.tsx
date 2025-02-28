import { View, Text, FlatList } from "react-native";
import products from "../assets/products.json";
 

export default function ProductListItem({ product }) {
  return (
    <View style={{ padding: 10, borderBottomWidth: 1, borderColor: "#ccc" }}>
      <Text style={{ fontSize: 18, fontWeight: "bold" }}>{product.name}</Text>
    </View>
  );
}