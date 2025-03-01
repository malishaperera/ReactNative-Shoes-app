import "@/global.css";
import { Link, Stack } from "expo-router";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { Icon } from "@/components/ui/icon";
import { ShoppingCart } from "lucide-react-native";
import { View, Text ,FlatList} from "react-native";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { useCart } from "@/store/cartStore";
// import { Text } from "react-native-reanimated/lib/typescript/Animated";
export default function RootLayout() {

  const carItemsNum = useCart((state)=>state.items.length);

  const router = useRouter(); 
  return (
    <GluestackUIProvider>
     <Stack
        screenOptions={{
          headerRight: () => 
            carItemsNum > 0 && (
            <Link href="/cart" asChild>
              <Pressable className="flex-row items-center gap-2">
                <Icon as={ShoppingCart} />
                <Text>{carItemsNum}</Text>
              </Pressable>
            </Link>
          ),
        }}
      >
       {/* <Stack
      screenOptions={{
        headerRight: () => (
          <Pressable onPress={() => router.push("cart")}>  
            <Icon as={ShoppingCart} />
          </Pressable>
        ),
      }}
    > */}
        <Stack.Screen name="index" options={{ title: 'Shop'}} />
        <Stack.Screen name="product/[id]" options={{ title: 'Product'}} />
        <Stack.Screen name="cart" options={{ title: "Cart" }} />
      </Stack>
    </GluestackUIProvider>
  );
}
