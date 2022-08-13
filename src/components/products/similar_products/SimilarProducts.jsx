import { Box, Divider, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import useFetch from "../../../hooks/useFetch";
import SingleSimilarProduct from "./SingleSimilarProduct";


const SimilarProducts = () => {
  const { isLoading, data } = useFetch(
    "https://62f6249ca3bce3eed7ba33e8.mockapi.io/products"
  );

  return (
    <Box mt={10}>
      <Text fontSize={"2xl"} fontWeight="500">
        Similar Products
      </Text>
      <Divider />
      <Box my="5"
      height={"100vh"}
    >
      </Box>
      </Box>
      );
    };
    
    export default SimilarProducts;
    