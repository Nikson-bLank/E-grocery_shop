import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import FilterProductBox from "../components/home/hero/filter_box/FilterProductBox";
import Hero from "../components/home/hero/Hero";

const Home = () => {
  return (
    <Container maxW={{ base: "9xl", xl: "6xl" }}>
      <Hero />
      <Box>
       <FilterProductBox />
      </Box>
    </Container>
  );
};

export default Home;
