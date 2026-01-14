import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Stack,
} from "@chakra-ui/react";
import {
  MdBrush,
  MdPrint,
  MdEmojiEvents,
  MdOutlineLayers,
} from "react-icons/md";

const About = () => {
  return (
    // Added id for scrolling and ensure it starts after Home
    <Box id="about" py={20} position="relative" zIndex={1}>
      <Container maxW={"6xl"}>
        <Stack
          spacing={4}
          as={Container}
          maxW={"3xl"}
          textAlign={"center"}
          mb={12}
        >
          <Heading fontSize={{ base: "3xl", md: "4xl" }} color="white">
            About Fresco Creation
          </Heading>
          <Text color={"gray.300"} fontSize={"xl"} lineHeight="tall">
            At Fresco Creation, we don’t just print, we bring your ideas to
            life. From high-quality business essentials like cards and banners
            to custom-crafted trophies and medals, we provide a comprehensive
            suite of branding and recognition solutions.
          </Text>
        </Stack>

        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          <VStack align={"center"} textAlign="center">
            <Icon as={MdPrint} w={10} h={10} color="blue.400" />
            <Text fontWeight={600} color="white" fontSize="lg">
              Custom Printing
            </Text>
            <Text color={"gray.400"}>
              Mugs, shirts, banners, and wedding cards crafted with precision.
            </Text>
          </VStack>

          <VStack align={"center"} textAlign="center">
            <Icon as={MdEmojiEvents} w={10} h={10} color="yellow.400" />
            <Text fontWeight={600} color="white" fontSize="lg">
              Awards & Honors
            </Text>
            <Text color={"gray.400"}>
              Bespoke souvenirs, medals, and trophies for your special
              achievements.
            </Text>
          </VStack>

          <VStack align={"center"} textAlign="center">
            <Icon as={MdBrush} w={10} h={10} color="pink.400" />
            <Text fontWeight={600} color="white" fontSize="lg">
              Creative Design
            </Text>
            <Text color={"gray.400"}>
              Professional graphic design and stickers that make your brand pop.
            </Text>
          </VStack>

          <VStack align={"center"} textAlign="center">
            <Icon as={MdOutlineLayers} w={10} h={10} color="green.400" />
            <Text fontWeight={600} color="white" fontSize="lg">
              Interior & Signage
            </Text>
            <Text color={"gray.400"}>
              Expert interior design and custom light boards to transform your
              space.
            </Text>
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default About;
