import {
    Box,
    Button,
    Container,
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
import { useState } from "react";
import LoadingCard from "../../components/common/loading/LoadingCard";

const Products = () => {
    const param = useParams();
    const [page] = useState(0);
    const { isLoading, data } = useFetch(
        `/product/get_productby_categoryid?page=${page}&size=12&category_id=${param.id}`
    );
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
                            <MobileProductFilter
                                isOpen={isOpen}
                                onClose={onClose}
                            />
                        </Box>
                    </Flex>
                    {isLoading ? (
                        <LoadingCard />
                    ) : (
                        <ProductCards products={data} />
                    )}
                </Box>
            </Flex>
        </Container>
    );
};

export default Products;
