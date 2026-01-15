import { Box, Container, Stack } from "@chakra-ui/react";

import AppText from "./AppText";

const About = () => {
  return (
    <Box id="about" py={10} position="relative" zIndex={1}>
      <Container maxW={"6xl"}>
        <Stack spacing={4} as={Container} maxW={"3xl"} textAlign={"center"}>
          <AppText fontSize={{ base: "3xl", md: "4xl" }} color="white">
            About Fresco Creation
          </AppText>
          <AppText
            color={"gray.300"}
            fontSize={{ base: "xl", md: "2xl" }}
            lineHeight="tall"
          >
            At Fresco Creation, we don’t just print, we bring your ideas to
            life. From high-quality business essentials like cards and banners
            to custom-crafted trophies and medals, we provide a comprehensive
            suite of branding and recognition solutions.
          </AppText>
        </Stack>
      </Container>
    </Box>
  );
};

export default About;
