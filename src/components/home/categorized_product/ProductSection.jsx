import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";
import LoadingProductCarousel from "../../common/loading/LoadingProductCarousel";
import ProductSlides from "./ProductSlides";

const ProductSection = ({ productSectionTitle, productData, isLoading }) => {
  return (
    <VStack mb={5} spacing={5}>
      <Text align={"center"} fontSize={"32px"} fontWeight="700">
        {productSectionTitle}
      </Text>
      <Divider
        border={"5px"}
        w="80px"
        opacity={100}
        borderColor={"#7fad39"}
      ></Divider>
      <Box w="100%">
        {isLoading ? (
          <LoadingProductCarousel></LoadingProductCarousel>
        ) : (
          <ProductSlides productData={productData}></ProductSlides>
        )}
      </Box>
    </VStack>
  );
};

export default ProductSection;
