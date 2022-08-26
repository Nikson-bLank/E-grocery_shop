import { Box, ChakraProvider, Flex } from "@chakra-ui/react";

import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Navbar from "./components/common/navbar/Navbar";
import PageRoute from "./routes/PageRoute";

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
