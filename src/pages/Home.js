import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ProductSection from "../components/home/categorized_product/ProductSection";
import FilterProductBox from "../components/home/filter_box/FilterProductBox";
import Hero from "../components/home/hero/Hero";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { isLoading, data } = useFetch("/products");

  return (
    <Container maxW={{ base: "9xl", xl: "6xl" }}>
      <Stack direction={"column"} spacing={20}>
        <Hero />
        <ProductSection
          productSectionTitle={"Popular Product"}
          productData={data}
          isLoading={isLoading}
        />
        <Box>
          <FilterProductBox />
        </Box>
      </Stack>
    </Container>
  );
};

export default Home;
