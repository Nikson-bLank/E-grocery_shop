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
import { useEffect, useState } from "react";
import SimilarProducts from "../../components/products/similar_products/SimilarProducts";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import axios from "axios";
import Loading from "../../components/common/Loading";

const ProductDetails = () => {
  const param = useParams();

  const { isLoading, data } = useFetch(
    `/products/${param.id}`
  );

  useEffect(() => {
    window.scrollTo({top:0});
    console.log("useEffect call");
  }, [param.id]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Container
      maxW={{
        base: "9xl",
        xl: "6xl",
      }}
    >
      <SimpleGrid columns={[1, 1, 2]} w="100%">
        <Box borderWidth={"1px"}>
          <Image
            w="100%"
            h="500px"
            objectFit={"cover"}
            alt="product"
            src={data?.imageURL}
          ></Image>
        </Box>
        <Flex
          direction="column"
          justify="space-between"
          px={5}
          h="auto"
          gap={5}
        >
          <PriceDetails
            name={data?.name}
            price={data?.price}
            discountPercent={data?.discountPercent}
            discountPrice={data?.discountPrice}
          />
          <CartDetails />
          <ProductDescription description={data?.description} />
        </Flex>
      </SimpleGrid>
      <DetailedDescription name={data?.name} description={data?.description} />
      <ReviewDetails />
      <Box>
      <SimilarProducts />
      </Box>
    </Container>
  );
};

export default ProductDetails;
