import { Box } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SocialIcons from "./components/SocialIcons";

function App() {
  return (
    <>
      <Box
        pt={4}
        background="radial-gradient(circle at 70% 95%, #ff4602ff 0%, #300000 35%, black 65%)"
        minH={"100vh"}
        overflowX="hidden"
      >
        <NavBar />
        <Home />
      </Box>
      <Box bgColor={"#000"} pb={10}>
        <About />
      </Box>
      <SocialIcons />
    </>
  );
}

export default App;
