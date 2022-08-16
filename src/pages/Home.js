import { Container } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/home/hero/Hero";

const Home = () => {
  return (
    <Container maxW={{ base: "9xl", xl: "6xl" }}>
      <Hero />
    </Container>
  );
};

export default Home;
