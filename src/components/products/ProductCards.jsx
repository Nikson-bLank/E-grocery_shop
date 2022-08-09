import { Box, Flex, Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SingleProductCard from "./SingleProductCard";

//image import
import product_1 from "../../images/featured/feature-1.jpg";
import product_2 from "../../images/featured/feature-2.jpg";
import product_3 from "../../images/featured/feature-3.jpg";
import product_4 from "../../images/featured/feature-4.jpg";
import product_5 from "../../images/featured/feature-5.jpg";
import product_6 from "../../images/featured/feature-6.jpg";
import product_7 from "../../images/featured/feature-7.jpg";
import product_8 from "../../images/featured/feature-8.jpg";

const productsData = [
  {
    isNew: false,
    imageURL: product_1,
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL: product_2,
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL: product_3,
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL: product_4,
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: true,
    imageURL: product_5,
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: false,
    imageURL: product_6,
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: false,
    imageURL: product_7,
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: false,
    imageURL: product_8,
    name: "Wayfarer Classic",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
  {
    isNew: false,
    imageURL: product_8,
    name: "Wayfarer Classicsdsdhfjs sdfhsjdf sdfhsdjf",
    price: 4.5,
    rating: 4.2,
    numReviews: 34,
  },
];

const ProductCards = () => {
  return (
    <Flex w={"100%"}>
      <Box>filter</Box>
      <SimpleGrid
        columns={[1, 2, 3, 4, 5]}
        w="100%"
        placeItems="center"
        spacingX="10px"
        spacingY="20px"
      >
        {productsData.map((productData) => (
          <SingleProductCard {...productData} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default ProductCards;
