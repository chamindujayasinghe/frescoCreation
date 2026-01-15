import { Text } from "@chakra-ui/react";
import type { TextProps } from "@chakra-ui/react";
import React from "react";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
}

const AppText = ({ children, ...props }: AppTextProps) => {
  return (
    <Text
      color={"#fff"}
      fontFamily={"'Chiqueta', sans-serif"}
      fontSize={16}
      cursor={"pointer"}
      {...props}
      textAlign={"center"}
    >
      {children}
    </Text>
  );
};

export default AppText;
