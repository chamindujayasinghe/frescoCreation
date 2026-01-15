import { Box, Flex } from "@chakra-ui/react";
import AppText from "./AppText";
import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { keyframes } from "@emotion/react";

const fadeUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeUpDelayed = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Home = () => {
  const frescoRef = useRef<HTMLDivElement>(null);
  const [frescoWidth, setFrescoWidth] = useState<number>(0);

  const words = ["CREATIVE", "PRINTING", "SOLUTION"];
  const [index, setIndex] = useState(0);
  const [subText, setSubText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [speed, setSpeed] = useState(150);

  useEffect(() => {
    if (!frescoRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setFrescoWidth(entry.contentRect.width);
      }
    });
    observer.observe(frescoRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const fullWord = words[index];

      if (!isDeleting) {
        setSubText(fullWord.substring(0, subText.length + 1));
        setSpeed(150);

        if (subText === fullWord) {
          setSpeed(3000);
          setIsDeleting(true);
        }
      } else {
        setSubText(fullWord.substring(0, subText.length - 1));
        setSpeed(100);

        if (subText === "") {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [subText, isDeleting, index, speed]);

  return (
    <Box
      w="100%"
      px={{ base: 4, md: 40 }}
      textAlign="center"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="82vh"
      position="relative"
    >
      <Box
        ref={frescoRef}
        display="inline-block"
        whiteSpace="nowrap"
        animation={`${fadeUp} 1s ease-out forwards`}
      >
        <AppText
          fontSize={{ base: 55, md: 70, lg: 110 }}
          fontWeight="bold"
          mb={{ base: 5 }}
          lineHeight="1.2"
        >
          F R E S C O
        </AppText>
      </Box>

      <Box
        w={frescoWidth ? `${frescoWidth}px` : "auto"}
        mb={{ base: 5, lg: 10 }}
        display="flex"
        justifyContent="space-between"
      >
        {"CREATION".split("").map((char, idx) => (
          <AppText
            animation={`${fadeUpDelayed} 0.6s ease-out forwards`}
            key={idx}
            fontSize={{ base: 30, lg: 70 }}
            color="#837e7eff"
            lineHeight="1"
          >
            {char}
          </AppText>
        ))}
      </Box>

      <Box minH="30px">
        <AppText
          fontSize={{ base: 14, lg: 20 }}
          letterSpacing="0.3em"
          fontWeight="medium"
        >
          {subText.split("").join(" ")}
          <Box
            as="span"
            borderRight="2px solid"
            borderColor="black"
            ml={1}
            animation="blink 1s infinite"
          />
        </AppText>
      </Box>

      <Flex
        position="absolute"
        bottom="20px"
        transform="translateX(-50%)"
        alignItems="center"
        flexDir="column"
        animation="float 3s ease-in-out infinite"
        cursor="pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight * 0.82,
            behavior: "smooth",
          });
        }}
        zIndex={1}
      >
        <AppText fontSize={{ base: 10, md: 12 }} letterSpacing="0.2em" mb={1}>
          SCROLL DOWN
        </AppText>
        <FiChevronDown size={20} color="#fff" />
      </Flex>

      <style>{`
        @keyframes blink {
          50% { opacity: 0; }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(8px); }
          100% { transform: translateY(0); }
        }
      `}</style>
    </Box>
  );
};

export default Home;
