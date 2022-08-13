import { Box, Flex, Grid, SimpleGrid, Skeleton, SkeletonText, Text } from "@chakra-ui/react";
import React from "react";
import SingleProductCard from "./SingleProductCard";
import useFetch from "../../../hooks/useFetch";

// //image import
// import product_1 from "../../images/featured/feature-1.jpg";
// import product_2 from "../../images/featured/feature-2.jpg";
// import product_3 from "../../images/featured/feature-3.jpg";
// import product_4 from "../../images/featured/feature-4.jpg";
// import product_5 from "../../images/featured/feature-5.jpg";
// import product_6 from "../../images/featured/feature-6.jpg";
// import product_7 from "../../images/featured/feature-7.jpg";
// import product_8 from "../../images/featured/feature-8.jpg";

// const productsData = [
//   {
//     isNew: false,
//     imageURL: product_1,
//     name: "Wayfarer Classic",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
//   {
//     isNew: true,
//     imageURL: product_2,
//     name: "Wayfarer Classic",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
//   {
//     isNew: true,
//     imageURL: product_3,
//     name: "Wayfarer Classic",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
//   {
//     isNew: true,
//     imageURL: product_4,
//     name: "Wayfarer Classic",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
//   {
//     isNew: true,
//     imageURL: product_5,
//     name: "Wayfarer Classics",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
//   {
//     isNew: false,
//     imageURL: product_6,
//     name: "Wayfarer Classic",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
//   {
//     isNew: false,
//     imageURL: product_7,
//     name: "Wayfarer Classic",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
//   {
//     isNew: false,
//     imageURL: product_8,
//     name: "Wayfarer Classic",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
//   {
//     isNew: false,
//     imageURL: product_8,
//     name: "Wayfarer Classics",
//     shortDescription: "fresh quality vegetable",
//     price: 4.5,
//     rating: 4.2,
//     numReviews: 34,
//   },
// ];





const ProductCards = () => {

const {isLoading, data} = useFetch("https://62f6249ca3bce3eed7ba33e8.mockapi.io/products")



  return (
    <SimpleGrid
      columns={[1, 2, 3, 4]}
      placeItems="center"
      spacingX="10px"
      spacingY="20px"
    >
      {data?.map((productData, idx) => (
        <SingleProductCard key={idx} productData={{...productData}} isLoading={isLoading} />
      ))}
    </SimpleGrid>
  );
};

export default ProductCards;
