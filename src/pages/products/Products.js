import {
    Box,
    Button,
    Container,
    Flex,
    Text,
    useDisclosure,
    Center,
    Icon,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaRegTimesCircle } from "react-icons/fa";
import useAxiosFetch from "../../hooks/useAxiosFetch";
import ProductCards from "../../components/products/product_lists/ProductCards";
import DesktopProductFilter from "../../components/products/product_filters/DesktopProductFilter";
import MobileProductFilter from "../../components/products/product_filters/MobileProductFilter";
// import useFetch from "../../hooks/useFetch";
import LoadingCard from "../../components/common/loading/LoadingCard";

const Products = () => {
    const param = useParams();
    const [page] = useState(0);
    // const { isLoading, data } = useFetch(
    //     `/product/get_productby_categoryid?page=${page}&size=12&category_id=${param.id}`
    // );
    const { status, response, error } = useAxiosFetch(
        `/product/get_productby_categoryid?page=${page}&size=8&category_id=${param.id}`
    );
    const { isOpen, onOpen, onClose } = useDisclosure();
    console.log(error);
    console.log(response);

    const errorComponent = (
        <Center
            as={motion.div}
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.5 },
            }}
            color={"#ef3e3e"}
            p={10}
        >
            <Text align={"center"} fontSize={"24px"} fontWeight="500">
                Oops! Something went Wrong!
            </Text>
            <Icon as={FaRegTimesCircle} h={10} w={10} mx={1}></Icon>
        </Center>
    );

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
                    {status === "idle" ? (
                        <LoadingCard />
                    ) : status === "resolved" ? (
                        <ProductCards products={response} />
                    ) : (
                        errorComponent
                    )}
                </Box>
            </Flex>
        </Container>
    );
};

export default Products;
