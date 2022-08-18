import { ChakraProvider, Box, Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Navbar from "./components/common/navbar/Navbar";
import PageRoute from "./routes/PageRoute";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {


  return (
    <ChakraProvider>
      <Flex direction="column">
        <Header />
        <Navbar />
        <PageRoute />
        <Footer />
      </Flex>
    </ChakraProvider>
  );
}

export default App;
