import { Box, IconButton, VStack, Link } from "@chakra-ui/react";
import { FaWhatsapp, FaInstagram, FaFacebookF } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <Box position="fixed" bottom="20px" right="20px" zIndex="1000">
      <VStack spacing={3}>
        <Link href="https://wa.me/947XXXXXXXX" isExternal>
          <IconButton
            aria-label="WhatsApp"
            icon={<FaWhatsapp />}
            colorScheme="green"
            w="60px"
            h="60px"
            fontSize="32px"
            isRound
          />
        </Link>

        <Link href="https://instagram.com/your_username" isExternal>
          <IconButton
            aria-label="Instagram"
            icon={<FaInstagram />}
            bg="#d8466b"
            color="white"
            w="50px"
            h="50px"
            fontSize="32px"
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
            fontSize="28px"
            isRound
            _hover={{ bg: "#1b5286" }}
          />
        </Link>
      </VStack>
    </Box>
  );
}
