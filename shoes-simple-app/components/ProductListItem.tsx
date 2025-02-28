import { Card } from "./ui/card";
import { Image } from "./ui/image";
import { VStack } from "./ui/vstack";
import { Heading } from "./ui/heading";
import { Box } from "./ui/box";
import { Button, ButtonText } from "./ui/button";
import { Text } from "./ui/text";

export default function ProductListItem({ product }) {
  return (
    <Card className="p-5 rounded-lg max-w-[360px] m-3 flex-1">
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
        <Button className="px-4 py-2 mr-0 mb-3 sm:mr-3 sm:mb-0 sm:flex-1">
          <ButtonText size="sm">Add to cart</ButtonText>
        </Button>
        <Button variant="outline" className="px-4 py-2 border-outline-300 sm:flex-1">
          <ButtonText size="sm" className="text-typography-600">
            Wishlist
          </ButtonText>
        </Button>
      </Box>
    </Card>
  );
}
