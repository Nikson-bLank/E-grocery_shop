import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";
import ProductSection from "../components/home/categorized_product/ProductSection";
import FilterProductBox from "../components/home/filter_box/FilterProductBox";
import Hero from "../components/home/hero/Hero";
import Banner from "../components/home/promotion_banner/Banner";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { isLoading, data } = useFetch("/product/getproduct?page=0&size=10");

  return (
    <Container maxW={{ base: "9xl", xl: "9xl" }} display="flex" flexDirection={"column"}>
      <Hero />
      <Container maxW={{ base: "9xl", xl: "7xl" }}>
        <ProductSection
          productSectionTitle={"Popular Product"}
          productData={data}
          isLoading={isLoading}
        />
        <Container maxW={{ base: "9xl", xl: "6xl" }}>
          <Banner />
          <Box>
            <FilterProductBox />
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default Home;
