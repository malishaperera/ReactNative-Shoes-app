import { Button, ButtonText } from "@/components/ui/button";
import { FormControl } from "@/components/ui/form-control";
import { Heading } from "@/components/ui/heading";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Text } from "@/components/ui/text";
import { VStack } from "@/components/ui/vstack";
import { EyeIcon, EyeOffIcon } from "@/components/ui/icon";
import React, { useState } from "react";
import { HStack } from "@/components/ui/hstack";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);

  const handleState = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = () => {
    console.log("Login button pressed!");
    // Add authentication logic here
  };

  return (
    <FormControl className="p-4 border rounded-lg border-outline-300 bg-white m-2 max-w-[500px]">
      <VStack space="xl">
        <Heading className="text-typography-900 leading-3 pt-3">Login</Heading>

        {/* Email Field */}
        <VStack space="xs">
          <Text className="text-typography-500">Email</Text>
          <Input className="min-w-[250px]">
            <InputField type="text" placeholder="Enter your email" />
          </Input>
        </VStack>

        {/* Password Field */}
        <VStack space="xs">
          <Text className="text-typography-500">Password</Text>
          <Input>
            <InputField type={showPassword ? "text" : "password"} placeholder="Enter your password" />
            <InputSlot className="pr-3" onPress={handleState}>
              <InputIcon as={showPassword ? EyeIcon : EyeOffIcon} />
            </InputSlot>
          </Input>
        </VStack>
        <HStack space="sm">

        {/* Login Button */}
        <Button className="flex-1" onPress={handleLogin} variant="outline">
          <ButtonText>Sign up</ButtonText>
        </Button>
        <Button className="flex-1" onPress={handleLogin}>
          <ButtonText className="text-typography-0">Sign in</ButtonText>
        </Button>
        </HStack>
      </VStack>
    </FormControl>
  );
}
