import { Box, Button, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import React, { useState } from "react";

import { FaPlus, FaMinus } from "react-icons/fa";

const QuantityButton = ({ label, icon, on_click }) => {
  return (
    <Button
      bg={"#fff"}
      color={"#7fad39"}
      aria-label={label}
      borderRadius={0}
      border="1px solid #7fad39"
      // letterSpacing="2px"
      fontWeight={600}
      px={"26px"}
      _hover={{
        shadow: "lg",
        color: "#fff",
        bg: "#729c33"
      }}
      onClick={on_click}
    >
      <Icon as={icon}></Icon>
    </Button>
  );
};

const CartButton = ({ label, on_click }) => {
  return (
    <Button
      bg={"#7fad39"}
      color={"#fff"}
      aria-label="add to cart"
      borderRadius={0}
      // letterSpacing="2px"
      fontWeight={600}
      px={"26px"}
      _hover={{
        shadow: "lg",
        color: "#fff",
        bg: "#729c33"
      }}
      //   onClick={on_click}
    >
      {label}
    </Button>
  );
};

const CartDetails = () => {
  const [itemCount, setItemCount] = useState(1);

  const increaseItemQuantity = () => {
    setItemCount((prevState) => prevState + 1);
  };

  const decreaseItemQuantity = () => {
    setItemCount((prevState) => {
      if (prevState === 1) return 1;
      return prevState - 1;
    });
  };

  return (
    <Box>
      <Flex
        w={{ base: "100%", sm: "50%" }}
        direction={"row"}
        align="center"
        justify="space-between"
      >
        <QuantityButton
          label={"decrease quantity"}
          icon={FaMinus}
          on_click={decreaseItemQuantity}
        />
        <Text fontSize="xl">{itemCount}</Text>
        <QuantityButton
          label={"increase quantity"}
          icon={FaPlus}
          on_click={increaseItemQuantity}
        />
      </Flex>
      <Flex
        w={{ base: "100%", sm: "50%" }}
        mt={4}
        direction={"column"}
        gap={4}
        justify={"flex-start"}
      >
        <CartButton label={"Add to cart"} />
        <CartButton label={"Add to Whishlist"} />
      </Flex>
    </Box>
  );
};

export default CartDetails;
