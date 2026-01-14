import {
  Box,
  Img,
  IconButton,
  useDisclosure,
  Stack,
  Collapse,
  Flex,
  Divider,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import logo from "../assets/logo1.png";

import React from "react";
import AppText from "./AppText";

const NavBar = () => {
  const { isOpen, onToggle } = useDisclosure();

  const NavLinks = ({ isMobile }: { isMobile?: boolean }) => {
    const links = ["HOME", "ABOUT", "CONTACT"];

    return (
      <>
        {links.map((link) => (
          <React.Fragment key={link}>
            <AppText
              _hover={{ color: "orange.300" }}
              transition="color 0.4s ease-in-out"
              cursor="pointer"
              textAlign={"right"}
            >
              {link}
            </AppText>

            {isMobile && (
              <Divider mt={2} mb={3} borderColor="rgba(255, 255, 255, 0.46)" />
            )}
          </React.Fragment>
        ))}

        <AppText
          cursor="pointer"
          transition="all 0.4s ease-in-out"
          color={"#000"}
          textAlign={"right"}
          paddingX={isMobile ? 0 : 8}
          paddingY={isMobile ? 0 : 3}
          bgColor={"#fff"}
          borderRadius={isMobile ? 0 : 10}
          _hover={
            isMobile
              ? { color: "orange.300" }
              : {
                  backgroundColor: "rgb(165, 53, 25)",
                  color: "#fff",
                }
          }
        >
          SERVICES
        </AppText>
      </>
    );
  };

  return (
    <Box
      position="relative"
      mt={5}
      mx={{ base: 4, md: 10, lg: 40 }}
      zIndex={100}
    >
      <Box
        px={5}
        py={1}
        bg="rgba(0, 0, 0, 0.12)"
        backdropFilter="blur(70px)"
        border="1px solid rgba(255, 255, 255, 0.25)"
        borderRadius="xl"
        boxShadow="0 8px 32px rgba(61, 61, 61, 0.1)"
      >
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Box className="logo" height={20} display="flex" alignItems="center">
            <Img src={logo} height={16} cursor="pointer" />
          </Box>

          <Box
            display={{ base: "none", lg: "flex" }}
            columnGap={10}
            alignItems={"center"}
          >
            <NavLinks />
          </Box>

          <IconButton
            display={{ base: "flex", lg: "none" }}
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color="white" />
              ) : (
                <HamburgerIcon color="white" />
              )
            }
            variant="ghost"
            _hover={{ bg: "whiteAlpha.200" }}
            aria-label="Toggle Navigation"
          />
        </Flex>
      </Box>

      <Box position="absolute" top="110%" left={0} right={0} zIndex={1000}>
        {isOpen && (
          <Box
            position="absolute"
            top={0}
            left={0}
            right={0}
            bottom={0}
            borderRadius="xl"
            bg="rgba(0, 0, 0, 0.4)"
            backdropFilter="blur(30px)"
            border="1px solid rgba(255, 255, 255, 0.25)"
            zIndex={-1}
          />
        )}

        <Collapse in={isOpen} animateOpacity>
          <Stack p={6} spacing={4} alignItems="right">
            <NavLinks isMobile={true} />
          </Stack>
        </Collapse>
      </Box>
    </Box>
  );
};

export default NavBar;
