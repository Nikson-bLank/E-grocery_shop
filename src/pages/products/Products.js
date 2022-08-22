import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Flex,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ProductCards from "../../components/products/product_lists/ProductCards";
import DesktopProductFilter from "../../components/products/product_filters/DesktopProductFilter";
import MobileProductFilter from "../../components/products/product_filters/MobileProductFilter";
import useFetch from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

const Products = () => {
  const param = useParams();
  const { isLoading, data } = useFetch(`/product/get_productby_categoryid/${param.id}`);
  console.log("products", data);

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
          borderRight="1px solid #e2e8f0 "
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
          <ProductCards isLoading={isLoading} products={data} />
        </Box>
      </Flex>
    </Container>
  );
};

export default Products;
