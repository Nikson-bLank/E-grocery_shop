import {
  Box,
  Button,
  Container,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ProductCards from "../../components/products/ProductCards";
import DesktopProductFilter from "../../components/products/product_filters/DesktopProductFilter";
import MobileProductFilter from "../../components/products/product_filters/MobileProductFilter";

const Products = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Container maxW={{ base: "9xl", xl: "6xl" }}>
      <Flex
        direction={"row"}
        gap={10}
        justify={{ base: "center", xl: "space-between" }}
      >
        <Box
          display={{ base: "none", xl: "flex" }}
          width={"25%"}
          px="6"
          border="none"
          borderRight="1px solid #d9d9d9 "
        >
          <DesktopProductFilter />
        </Box>
        <Box w="100%">
          <Flex mb={2} justify={"space-between"}>
            <Text fontSize={"2xl"} fontWeight={"bold"}>
              Products
            </Text>
            <Box display={{ base: "flex", xl: "none" }}>
              <Button
                bg={"#7fad39"}
                color={"#fff"}
                fontWeight={600}
                _hover={{
                  shadow: "lg",
                  color: "#fff",
                  bg: "#7fad39",
                }}
                size="sm"
                onClick={onOpen}
              >
                Filter
              </Button>
              <MobileProductFilter isOpen={isOpen} onClose={onClose} />
            </Box>
          </Flex>
          <ProductCards />
        </Box>
      </Flex>
    </Container>
  );
};

export default Products;
