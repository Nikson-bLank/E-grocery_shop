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
import { useEffect } from "react";
import SimilarProducts from "../../components/products/similar_products/SimilarProducts";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const ProductDetails = () => {
  const param = useParams();

const {isLoading, data} = useFetch(`https://62f6249ca3bce3eed7ba33e8.mockapi.io/products/${param.id}`)

  // useEffect(() => {
  //   window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  // }, []);

  console.log(data);

//   createdAt: "2022-08-12T01:47:42.678Z"
// description: "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive"
// discountPercent: 2
// discount_price: "511.00"
// id: "1"
// imageURL: "http://loremflickr.com/640/480"
// isNew: true
// name: "Pizza"
// price: "207.00"
// shortDescription: "Handcrafted Steel Soap"
// totalReveiw: 88545

  return (
    <Container maxW={{ base: "9xl", xl: "6xl" }}>
      <SimpleGrid columns={[1, 1, 2]} w="100%">
        <Box borderWidth={"1px"}>
          <Image w="100%" h="500px" alt="product" src={data?.imageURL}></Image>
        </Box>
        <Flex direction="column" justify="space-between" px={5} h="auto" gap={5}>
          <PriceDetails name={data?.name} price={data?.price} discountPercent={data?.discountPercent} discountPrice={data?.discountPrice}/>
          <CartDetails />
          <ProductDescription description={data?.description}  />
        </Flex>
      </SimpleGrid>
      <DetailedDescription name={data?.name} description={data?.description} />
      <ReviewDetails />
      <SimilarProducts></SimilarProducts>
    </Container>
  );
};

export default ProductDetails;
