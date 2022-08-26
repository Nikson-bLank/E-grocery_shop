import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ProductDescription = ({ description }) => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight={500}>
        Product Description
      </Text>
      <p>
        {description ||
          "description"}
      </p>
    </Box>
  );
};

export default ProductDescription;
