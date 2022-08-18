import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useFetch from "../../../hooks/useFetch";
import SingleSimilarProduct from "./SingleSimilarProduct";
import Slider from "react-slick";

const SimilarProducts = () => {
  const { isLoading, data } = useFetch("/products");

  const noOfBoxes = [1, 2, 3, 4, 5, 6, 7, 8];

  if (isLoading) {
    return (
      <Box mt={10}>
      <Text fontSize={"2xl"} fontWeight="500">
        Similar Products
      </Text>
      <Divider />
      <Slider slidesToShow={4} slidesToScroll={4} infinite="false">
        {noOfBoxes.map((_, idx) => (
          <Box
            bg={"#fff"}
            _hover={{
              shadow: "xl",
            }}
            shadow={{ base: "xl", sm: "md" }}
            position="relative"
            transition={"all 0.3s ease"}
            display="flex"
            w={"100%"}
            flexDirection={{ base: "row", sm: "column" }}
            alignSelf={"baseline"}
            key={idx}
          >
            <Skeleton
              h={150}
              w={"100%" }
              fadeDuration={1}
            ></Skeleton>

            <SkeletonText
              w={"100%"}
              h={"160px"}
              mt={4}
              p={3}
              noOfLines={4}
              fadeDuration={1}
            ></SkeletonText>
          </Box>
        ))}
      </Slider>
      </Box>
    );
  }

  // const products = data?.slice(0,5)
  return (
    <Box mt={10}>
      <Text fontSize={"2xl"} fontWeight="500">
        Similar Products
      </Text>
      <Divider />
      {/* <Flex
        direction={"row"}
        overflowX={"auto"}
        gap={4}
        py={10}
      >
       {products.map(productData=>(
        <SingleSimilarProduct productData={productData} />
       ))}
      </Flex> */}

      <Slider slidesToShow={4} slidesToScroll={4} infinite="false">
        {data.map((productData) => {
          return <SingleSimilarProduct productData={productData} />;
        })}
      </Slider>
    </Box>
  );
};

export default SimilarProducts;
