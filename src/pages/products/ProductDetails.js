import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
// import { useParams } from "react-router-dom";

import { feat_3 } from "../../images/IMAGE_IMPORTS";
import PriceDetails from "../../components/products/product_details/PriceDetails";
import CartDetails from "../../components/products/product_details/CartDetails";
import ProductDescription from "../../components/products/product_details/ProductDescription";
import DetailedDescription from "../../components/products/product_details/detailed_description/DetailedDescription";
import ReviewDetails from "../../components/products/product_details/ReviewDetails";
import ProductCards from "../../components/products/product_lists/ProductCards";
import { useEffect } from "react";
import SimilarProducts from "../../components/products/similar_products/SimilarProducts";

const ProductDetails = () => {
  //  const param = useParams()

  //  console.log(param.id);



  return (
    <Container maxW={{ base: "9xl", xl: "6xl" }}>
      <SimpleGrid columns={[1, 1, 2]} w="100%">
        <Box borderWidth={"1px"}>
          <Image w="100%" h="500px" alt="product" src={feat_3}></Image>
        </Box>
        <Flex direction="column" justify="space-between" px={5} h="auto">
          <PriceDetails />
          <CartDetails />
          <ProductDescription />
        </Flex>
      </SimpleGrid>
      <DetailedDescription />
      <ReviewDetails />
       <SimilarProducts></SimilarProducts>
    </Container>
  );
};

export default ProductDetails;
