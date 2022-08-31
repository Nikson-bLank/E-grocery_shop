import { Center, Icon, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
import { FaRegFrownOpen } from "react-icons/fa";
import SingleProductCard from "./SingleProductCard";
import { AnimatePresence, motion } from "framer-motion";
const ProductCards = ({ products }) => {
    const { result: productData, image_url } = products;

    if (!productData || productData.length === 0) {
        return (
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
        );
    }

    return (
        <SimpleGrid
            columns={[1, 2, 3, 4]}
            placeItems="center"
            spacingX="10px"
            spacingY="20px"
        >
            <AnimatePresence>
                {productData?.map((productData, idx) => (
                    <SingleProductCard
                        key={idx}
                        productData={{ ...productData }}
                        imgUrl={image_url}
                        isResponsive
                    />
                ))}
            </AnimatePresence>
        </SimpleGrid>
    );
};

ProductCards.propTypes = {
    products: PropTypes.any,
};

export default ProductCards;
