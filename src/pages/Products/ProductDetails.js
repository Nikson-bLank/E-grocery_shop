import { Box, Button, Flex, Icon, Image, Text } from "@chakra-ui/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";
// import { useParams } from "react-router-dom";

import { feat_3 } from "../../images/IMAGE_IMPORTS";

const ProductDetails = () => {
  //  const param = useParams()

  //  console.log(param.id);

  const [itemCount, setItemCount] = useState(1);

  const handleItemCount = (e) => {
    const { ariaLabel } = e.target;
    if (ariaLabel === "increase quantity") {
      setItemCount((prevState) => prevState + 1);
    }
    if (ariaLabel === "decrease quantity") {
      setItemCount((prevState) => {
        if (prevState <= 1) {
          return 1;
        }
        return prevState - 1;
      });
    }
  };

  return (
    <Flex direction={{ base: "column", lg: "row" }} justify="space-between">
      <Box borderWidth={"1px"}>
        <Image w="100%" h="500px" alt="product" src={feat_3}></Image>
      </Box>
      <Flex grow="1" gap={10}>
        <Box px="2">
          <Text fontSize="4xl" color={"#1c1c1c"}>
            Wayfarer Classic
          </Text>
          <Box p="3">
            <Text fontSize="xl" color={"#1c1c1c"}>
              Price: ₹200
            </Text>
            <Text fontSize="sm" color={"#888"}>
              MRP:{" "}
              <Text display="inline" as="s">
                ₹200
              </Text>
            </Text>
            <Text fontSize="sm" color={"#7fad39"}>
              You save: 10%
            </Text>
            <Text fontSize="sm" color={"#888"}>
              (Inclusive of all taxes)
            </Text>
          </Box>
          <Flex direction="column" justify="space-between" p="3" gap={3}>
            <Flex direction={"row"} gap={10} align="center">
              <Button
                bg={"#fff"}
                color={"#7fad39"}
                aria-label="decrease quantity"
                borderRadius={0}
                border="1px solid #7fad39"
                letterSpacing="2px"
                fontWeight={600}
                px={"26px"}
                _hover={{
                  shadow: "lg",
                  color: "#fff",
                  bg: "#7fad39",
                }}
                onClick={handleItemCount}
              >
                <Icon as={FaMinus}></Icon>
              </Button>
              <Text fontSize="xl">{itemCount}</Text>
              <Button
                bg={"#fff"}
                color={"#7fad39"}
                aria-label="increase quantity"
                borderRadius={0}
                border="1px solid #7fad39"
                letterSpacing="2px"
                fontWeight={600}
                px={"26px"}
                _hover={{
                  shadow: "lg",
                  color: "#fff",
                  bg: "#7fad39",
                }}
                onClick={handleItemCount}
              >
                <Icon as={FaPlus}></Icon>
              </Button>
            </Flex>
            <Button
              bg={"#7fad39"}
              color={"#fff"}
              aria-label="add to cart"
              borderRadius={0}
              letterSpacing="2px"
              fontWeight={600}
              px={"26px"}
              _hover={{
                shadow: "lg",
                color: "#fff",
                bg: "#7fad39",
              }}
            >
              Add to cart
            </Button>
            <Button
              bg={"#7fad39"}
              color={"#fff"}
              aria-label="add to wishlist"
              borderRadius={0}
              fontWeight={600}
              letterSpacing="2px"
              px={"26px"}
              _hover={{
                shadow: "lg",
                color: "#fff",
                bg: "#7fad39",
              }}
            >
              Add to wishlist
            </Button>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default ProductDetails;
