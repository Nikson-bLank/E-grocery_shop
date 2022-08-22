import {
  Box,
  Flex,
  Grid,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React from "react";
import SingleProductCard from "./SingleProductCard";
import useFetch from "../../../hooks/useFetch";
import LoadingCard from "../../common/loading/LoadingCard";

const ProductCards = () => {
  const { isLoading, data:productData } = useFetch("/products");

  const noOfBoxes = [1, 2, 3, 4, 5, 6, 7, 8];

  if (isLoading) {
    return <LoadingCard />
  }

  return (
    <SimpleGrid
      columns={[1, 2, 3, 4]}
      placeItems="center"
      spacingX="10px"
      spacingY="20px"
    >
      {productData?.map((productData, idx) => (
        <SingleProductCard
          key={idx}
          productData={{ ...productData }}
          isLoading={isLoading}
          isResponsive
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductCards;
