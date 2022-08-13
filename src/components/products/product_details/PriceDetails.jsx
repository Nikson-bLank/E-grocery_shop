import { Box, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const PriceDetails = ({ name, price, discountPrice, discountPercent }) => {
  return (
    <Box>
      <Text fontSize="4xl" color={"#1c1c1c"}>
        {name || "Wayfarer Classic"}
      </Text>
      <Box>
        <Text fontSize="xl" color={"#1c1c1c"}>
          Price: ₹{discountPrice || 200}
        </Text>
        <Text fontSize="sm" color={"#888"}>
          MRP:
          <Text display="inline" as="s">
            ₹{price || 300}
          </Text>
        </Text>
        <Text fontSize="sm" color={"#7fad39"}>
          You save: {discountPercent || 10}%
        </Text>
        <Text fontSize="sm" color={"#888"}>
          (Inclusive of all taxes)
        </Text>
      </Box>
    </Box>
  );
};

export default PriceDetails;
