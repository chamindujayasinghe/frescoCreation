import { Box, IconButton, VStack, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <Box
      position="fixed"
      bottom={{ base: "20px", md: "40px" }}
      right={{ base: "20px", md: "40px" }}
      zIndex="1000"
    >
      <VStack spacing={3}>
        <Link href="https://wa.me/947XXXXXXXX" isExternal>
          <IconButton
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            colorScheme="green"
            w={{ base: "40px", md: "60px" }}
            h={{ base: "40px", md: "60px" }}
            fontSize={{ base: 20, md: 32 }}
            isRound
          />
        </Link>

        <Link href="https://instagram.com/your_username" isExternal>
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            bg="#d8466b"
            color="white"
            w={{ base: "40px", md: "50px" }}
            h={{ base: "40px", md: "50px" }}
            fontSize={{ base: 20, md: 26 }}
            isRound
            _hover={{ bg: "#c13584" }}
          />
        </Link>
        <Link href="https://instagram.com/your_username" isExternal>
          <IconButton
            aria-label="Facebook"
            icon={<FaFacebookF />}
            bg="#3694c0"
            color="white"
            w="40px"
            h="40px"
            fontSize={{ base: 18, md: 26 }}
            isRound
            _hover={{ bg: "#1b5286" }}
          />
        </Link>
      </VStack>
    </Box>
  );
}
