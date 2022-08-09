import { Box, Text } from "@chakra-ui/react";
import React from "react";

const ProductDescription = () => {
  return (
    <Box>
      <Text fontSize="xl" fontWeight={500}>
        Product Description
      </Text>
      <p>
        Guava (/ˈɡwɑːvə/) is a common tropical fruit cultivated in many tropical
        and subtropical regions. The common guava Psidium guajava (lemon guava,
        apple guava) is a small tree in the myrtle family (Myrtaceae), native to
        Mexico, Central America, the Caribbean and northern South America.
      </p>
    </Box>
  );
};

export default ProductDescription;
