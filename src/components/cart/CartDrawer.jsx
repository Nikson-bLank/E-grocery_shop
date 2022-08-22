import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Text,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import CartItem from "./CartItem";

const CartDrawer = ({onClose, isOpen}) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen} placement="right" size={"lg"}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px">My Cart</DrawerHeader>
        <DrawerBody>
          <Flex direction="column" justify={"space-between"}>
            <Box >
              <CartItem />
              <CartItem />
              <CartItem />
              <CartItem />
            </Box>
            <Box borderTopWidth="1px" justifySelf={"flex-end"}>
              <Flex p="2" direction="row" justify={"space-between"}>
                <Flex direction="column" >
                <Text>Shipping</Text>
                <Text>Total</Text>
                </Flex>
                <Flex textAlign={"right"} direction="column" >
                <Text>₹ 50</Text>
                <Text>₹ 1550</Text>
                </Flex>
              </Flex>
            </Box>
          </Flex>
        </DrawerBody>

        <DrawerFooter borderTopWidth="1px">
          <HStack spacing={5}>
            <Button
              colorScheme="red"
              aria-label="buyout"
              borderRadius={0}
              // letterSpacing="2px"
              fontWeight={600}
              px={"26px"}
              _hover={{
                shadow: "lg",
              }}
            >
              Clear All
            </Button>
            <Button
              bg={"#7fad39"}
              color={"#fff"}
              aria-label="buyout"
              borderRadius={0}
              // letterSpacing="2px"
              fontWeight={600}
              px={"26px"}
              _hover={{
                shadow: "lg",
                color: "#fff",
                bg: "#729c33",
              }}
            >
              Checkout
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
