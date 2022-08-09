import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ProductCards from "../../components/products/ProductCards";
import ProductFilters from "../../components/products/product_filters/ProductFilters";

const Products = () => {
  return (
    <Flex direction={"row"} gap={10} width="100%" justify={{ base: "center", xl: "space-between" }}>
      <Box
        display={{ base: "none", xl: "flex" }}
        width={"25%"}
        px="6"
        border="none"
        borderRight="1px solid #d9d9d9 "
      >
        <ProductFilters />
      </Box>
      <Box>
        <ProductCards />
      </Box>
    </Flex>
  );
};

export default Products;
