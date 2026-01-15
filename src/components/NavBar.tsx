import {
  Box,
  Img,
  IconButton,
  useDisclosure,
  Stack,
  Collapse,
  Flex,
} from "@chakra-ui/react";
import { CloseIcon, PhoneIcon } from "@chakra-ui/icons";
import logo from "../assets/logo1.png";
import React, { useEffect, useState } from "react";
import AppText from "./AppText";
import { keyframes } from "@emotion/react";

const verticalWave = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0);
  }
`;

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [showNumber, setShowNumber] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLinks = () => {
    const links = ["HOME", "ABOUT", "CONTACT", "SERVICES"];

    return (
      <>
        {links.map((link) => (
          <React.Fragment key={link}>
            <AppText
              color="white"
              cursor="pointer"
              _hover={{ color: "orange.300" }}
              transition="color 0.3s ease"
              textAlign={"center"}
              fontSize={{ base: 18, md: 24, lg: 30 }}
            >
              {link}
            </AppText>
          </React.Fragment>
        ))}
      </>
    );
  };

  return (
    <Box
      position={scrolled ? "fixed" : "relative"}
      mt={0}
      top={0}
      left={0}
      right={0}
      px={{ base: 4, md: 10, lg: "100px" }}
      zIndex={1000}
      transition="background-color 0.3s ease"
      bg={scrolled || isOpen ? "black" : "transparent"}
    >
      <Flex
        align="center"
        justify="space-between"
        py={4}
        px={4}
        bg={isOpen ? "black" : "transparent"}
        transition="background-color 0.3s ease"
        borderRadius="xl"
        position="relative"
      >
        <Box minW="40px">
          <Img src={logo} height={{ base: 16, md: 20 }} cursor="pointer" />
        </Box>

        <Box
          position={{ base: "static", md: "absolute" }}
          left={{ md: "50%" }}
          transform={{ md: "translateX(-50%)" }}
          cursor="pointer"
          onClick={onToggle}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          {isOpen ? (
            <CloseIcon color="white" boxSize={{ base: 6, md: 10, lg: 14 }} />
          ) : (
            <Box display="flex" flexDirection="column" alignItems="flex-end">
              <Box
                h="5px"
                w={{ base: "30px", md: "80px" }}
                bg="white"
                mb={2}
                borderRadius={20}
                animation={`${verticalWave} 1.8s ease-in-out infinite`}
              />
              <Box
                h="5px"
                w={{ base: "40px", md: "100px" }}
                bg="white"
                borderRadius={20}
              />
            </Box>
          )}
        </Box>

        <Box
          minW="40px"
          textAlign="right"
          display={{ base: "none", md: "block" }}
          backgroundColor={"#fff"}
          borderRadius={25}
        >
          <Flex align="center" gap={2} position="relative">
            <IconButton
              aria-label="Call"
              icon={<PhoneIcon />}
              variant="ghost"
              color="black"
              fontSize="20px"
              _hover={{ bg: "whiteAlpha.200" }}
              onClick={() => setShowNumber(!showNumber)}
            />

            <Collapse in={showNumber} animateOpacity>
              <Box
                bg="white"
                px={4}
                py={2}
                borderRadius="25px"
                shadow="md"
                position="absolute"
                right="100%"
                top="50%"
                transform="translateY(-50%)"
                whiteSpace="nowrap"
              >
                +94 123 456 789
              </Box>
            </Collapse>
          </Flex>
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box
          position="absolute"
          top="100%"
          left={0}
          right={0}
          p={6}
          bg="black"
          borderRadius="xl"
          zIndex={999}
        >
          <Stack spacing={10} align="center">
            <NavLinks />
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};

export default NavBar;
