import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialIcons from "./components/SocialIcons";
import SlidingText from "./components/SlidingText";

function App() {
  return (
    <>
      <Box
        background="radial-gradient(circle at 70% 95%, #ff4602ff 0%, #300000 35%, black 65%)"
        minH={"100vh"}
        overflowX="hidden"
      >
        <NavBar />
        <Home />
      </Box>
      <SlidingText />
      <Box bgColor={"#000"}>
        <About />
      </Box>

      <SocialIcons />
    </>
  );
}

export default App;
