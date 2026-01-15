import { Box } from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import AppText from "./AppText";

const items = [
  "Mug-Printing",
  "LightBoards",
  "Wedding-Cards",
  "Trophies",
  "Stickers",
  "Soveniers",
  "Rubber-Seals",
  "Banners",
  "Posters",
  "Business-Cards",
  "Interior-Designing",
];

const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
`;

const SlidingText = () => {
  return (
    <Box overflow="hidden" bg="black" py={10} position="relative" width="100%">
      <Box
        display="flex"
        width="max-content"
        animation={`${scroll} 25s linear infinite`}
      >
        {[...items, ...items].map((text, index) => (
          <AppText
            key={`${text}-${index}`}
            color="white"
            fontSize="lg"
            fontWeight="bold"
            mx={10}
            whiteSpace="nowrap"
            flexShrink={0}
          >
            {text}
          </AppText>
        ))}
      </Box>

      <Box
        position="absolute"
        top={0}
        left={0}
        width="120px"
        height="100%"
        bgGradient="linear(to-r, black, transparent)"
        zIndex={2}
      />
      <Box
        position="absolute"
        top={0}
        right={0}
        width="120px"
        height="100%"
        bgGradient="linear(to-l, black, transparent)"
        zIndex={2}
      />
    </Box>
  );
};

export default SlidingText;
