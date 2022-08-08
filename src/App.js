import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Navbar from "./components/common/navbar/Navbar";
import PageRoute from "./routes/PageRoute";

function App() {
  return (
    <ChakraProvider>
      <Flex direction="column">
      <Header />
      <Box w={{ base: "95%", xl: "80%" }} mx="auto" mb="10">
        <Box>
          <Navbar />
        </Box>
      <PageRoute />
      </Box>
      <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
