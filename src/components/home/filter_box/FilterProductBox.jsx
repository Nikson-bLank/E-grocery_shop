import {
    Center,
    Container,
    Divider,
    Flex,
    Icon,
    SimpleGrid,
    Text,
    VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../../hooks/useFetch";
import SingleProductCard from "../../products/product_lists/SingleProductCard";
import LoadingCard from "../../common/loading/LoadingCard";
import { FaRegFrownOpen } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FilterProductBox = ({ imageUrl }) => {
    const { isLoading, data } = useFetch(
        "/product/get_featured_product/featured"
    );
    const { data: categories } = useFetch("/get_all_categories");
    const [activeFilter, setActiveFilter] = useState("all");
    const [filteredProduct, setFilteredProduct] = useState([]);
    console.log("filter length", filteredProduct?.length);

    useEffect(() => {
        const featuredData = data?.result;

        if (activeFilter === "all") {
            return setFilteredProduct(featuredData);
        }

        const filteredProduct = featuredData.filter(
            (filteredProduct) => filteredProduct.category_id === activeFilter
        );
        if (filteredProduct.length < 1) {
            return setFilteredProduct([]);
        }
        setFilteredProduct(filteredProduct);
    }, [data, activeFilter]);

    return (
        <Container maxW={{ base: "9xl", xl: "6xl" }}>
            <VStack mb={5} spacing={5}>
                <Text align={"center"} fontSize={"32px"} fontWeight="700">
                    Featured Products
                </Text>
                <Divider
                    border={"5px"}
                    w="80px"
                    opacity={100}
                    borderColor={"#7fad39"}
                ></Divider>
                <Flex direction={"row"} gap={5} wrap={"wrap"}>
                    <Text
                        as={"button"}
                        textAlign="left"
                        className={
                            activeFilter === "all" && "active_filter_category"
                        }
                        onClick={() => setActiveFilter("all")}
                    >
                        All
                    </Text>
                    {categories?.result?.map((category) => (
                        <Text
                            as={"button"}
                            textAlign="left"
                            key={category.id}
                            className={
                                activeFilter === category.id &&
                                "active_filter_category"
                            }
                            onClick={() => setActiveFilter(category.id)}
                        >
                            {category.category_name}
                        </Text>
                    ))}
                </Flex>
            </VStack>
            {isLoading ? (
                <LoadingCard />
            ) : !isLoading && filteredProduct?.length < 1 ? (
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
                        Oops! no data found
                    </Text>
                    <Icon as={FaRegFrownOpen} h={10} w={10} mx={1}></Icon>
                </Center>
            ) : (
                <SimpleGrid
                    as={motion.div}
                    columns={[1, 2, 3, 4]}
                    spacingX="50px"
                    spacingY="20px"
                >
                    <AnimatePresence>
                        {filteredProduct?.slice(0, 8)?.map((productData) => {
                            return (
                                <SingleProductCard
                                    key={productData.id}
                                    productData={productData}
                                    imgUrl={imageUrl}
                                    isResponsive
                                />
                            );
                        })}
                    </AnimatePresence>
                </SimpleGrid>
            )}
        </Container>
    );
};
FilterProductBox.propTypes = {
    imageUrl: PropTypes.string,
};

export default FilterProductBox;
