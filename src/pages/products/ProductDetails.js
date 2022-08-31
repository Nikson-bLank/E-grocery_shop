import {
    Box,
    Container,
    Flex,
    SimpleGrid,
    Text,
    Icon,
    Center,
} from "@chakra-ui/react";
import { FaRegTimesCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import React, { useEffect } from "react";
import ProductImage from "../../components/products/product_details/product_images/ProductImage";
import PriceDetails from "../../components/products/product_details/PriceDetails";
import CartDetails from "../../components/products/product_details/CartDetails";
import ProductDescription from "../../components/products/product_details/ProductDescription";
import DetailedDescription from "../../components/products/product_details/detailed_description/DetailedDescription";
import ReviewDetails from "../../components/products/product_details/ReviewDetails";
import SimilarProducts from "../../components/products/similar_products/SimilarProducts";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/common/loading/Loading";

//image

const ProductDetails = () => {
    const param = useParams();
    const { isLoading, data, error } = useFetch(
        `/product/getproduct_details_with_mult_img/${param.id}`
    );
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [param.id]);

    if (isLoading) {
        return (
            <Container
                maxW={{
                    base: "9xl",
                    xl: "6xl",
                }}
            >
                <Loading />
            </Container>
        );
    }
    if (error) {
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
                    Oops! Something went Wrong!
                </Text>
                <Icon as={FaRegTimesCircle} h={10} w={10} mx={1}></Icon>
            </Center>
        );
    }

    return (
        <Container
            maxW={{
                base: "9xl",
                xl: "6xl",
            }}
        >
            <Box>
                <SimpleGrid columns={[1, 1, 2]} w="100%">
                    <ProductImage
                        image={data?.result[0]?.product_image}
                        imgURL={data?.image_url}
                        images={data?.result[1]?.Image}
                    />
                    <Flex
                        direction="column"
                        justify="space-between"
                        px={5}
                        h="auto"
                        gap={5}
                    >
                        <PriceDetails
                            name={data?.result[0]?.product_name}
                            brand={data?.result[0]?.brand}
                            price={data?.result[0]?.product_amount}
                            discountPercent={
                                data?.result[0]?.product_discount_percent
                            }
                            discountPrice={
                                data?.result[0]?.product_discount_price
                            }
                        />
                        <CartDetails />
                        <ProductDescription
                            description={data?.result[0]?.description}
                        />
                    </Flex>
                </SimpleGrid>
                <DetailedDescription
                    name={data?.result[0]?.product_name}
                    benefits={data?.result[0]?.benefits}
                    description={data?.result[0]?.description}
                    storageAndUsage={data?.result[0]?.storage_and_usage}
                    policy={data?.result[0]?.is_weight_variable}
                    otherInfo={data?.result[0]?.other_product_info}
                />
                <ReviewDetails />
            </Box>
            <Box>
                <SimilarProducts slug={data?.result[0]?.product_slug} />
            </Box>
        </Container>
    );
};

export default ProductDetails;
