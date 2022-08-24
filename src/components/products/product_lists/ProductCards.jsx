import { SimpleGrid } from "@chakra-ui/react";
import React from "react";
import SingleProductCard from "./SingleProductCard";
const ProductCards = ({ products }) => {
  const { result: productData, image_url } = products;

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
          imgUrl={image_url}
          isResponsive
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductCards;
