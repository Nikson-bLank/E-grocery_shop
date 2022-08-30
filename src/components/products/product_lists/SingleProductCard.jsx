import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Flex,
    Box,
    Image,
    Badge,
    Icon,
    HStack,
    Text,
    Link,
    Stack,
    // Skeleton,
    // SkeletonText,
    useToast,
} from "@chakra-ui/react";

import {
    // FaHeart,
    // FaRegHeart,
    // FaShoppingCart,
    FaStarHalfAlt,
    FaStar,
} from "react-icons/fa";
import {
    AiOutlineShoppingCart,
    AiOutlineHeart,
    AiFillHeart,
} from "react-icons/ai";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { motion } from "framer-motion";

import { cat_3 } from "../../../images/IMAGE_IMPORTS";

function SingleProductCard({ productData, imgUrl, isResponsive }) {
    const navigate = useNavigate();
    const toast = useToast();
    const [isChecked, setIsChecked] = useState(false);
    const [isImageError, setIsImageError] = useState(false);

    const imageErrorHandler = () => {
        setIsImageError(true);
    };

    const handleChecked = () => {
        toast({
            position: "top",
            isClosable: true,
            render: () => (
                <Flex
                    direction={"row"}
                    justify="center"
                    align="center"
                    gap={2}
                    color="white"
                    opacity={"70%"}
                    borderRadius="10px"
                    p={3}
                    bg={"#7fad39"}
                >
                    <Icon as={AiFillHeart}></Icon>Successfully added to wishlist
                </Flex>
            ),
        });
        setIsChecked(!isChecked);
    };

    return (
        <Box
            as={motion.div}
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
                opacity: { ease: "linear" },
                layout: { duration: 0.3 },
            }}
            bg={"#fff"}
            _hover={{ shadow: "xl" }}
            shadow={{
                base: "xl",
                sm: "md",
            }}
            position="relative"
            display="flex"
            w={{
                base: "100%",
                // sm: "200px",
            }}
            flexDirection={{
                base: isResponsive ? "row" : "column",
                sm: "column",
            }}
            alignSelf={{
                base: "center",
            }}
        >
            {productData.isNew && (
                <Badge
                    rounded="full"
                    px="2"
                    fontSize="0.8em"
                    colorScheme="green"
                    size="10px"
                    position="absolute"
                    top={2}
                    left={2}
                >
                    New
                </Badge>
            )}

            <Image
                src={isImageError ? cat_3 : imgUrl + productData.product_image}
                alt={`Picture of ${productData.product_name}`}
                alignSelf="center"
                onError={imageErrorHandler}
                sx={{
                    aspectRatio: "1",
                }}
                h={150}
                w={{
                    base: isResponsive ? "50%" : "100%",
                    sm: "100%",
                }}
                objectFit={"cover"}
                onClick={() => {
                    navigate(`/product/${productData.id}`);
                }}
                cursor="pointer"
            />
            <Flex direction="column" gap={2} p={3}>
                <Link
                    as={ReactRouterLink}
                    to={`/product/${productData.id}`}
                    fontSize="16px"
                    fontWeight={500}
                    color={"#252525"}
                    _hover={{
                        textDecoration: "none",
                        color: "#7fad39",
                    }}
                >
                    <Text fontSize="xs" color={"#888"}>
                        {productData.brand}
                    </Text>
                    {productData.product_name}
                    <Text fontSize={"sm"} color={"#555"}>
                        {productData.tag}
                    </Text>
                </Link>
                <HStack>
                    <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
                    <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
                    <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
                    <Icon
                        as={FaStarHalfAlt}
                        color={"#7fad39"}
                        h={3}
                        w={3}
                    ></Icon>
                </HStack>
                <Box fontSize="xl" color={"#1c1c1c"} fontWeight={600}>
                    <Box as="span" color={"#1c1c1c"} fontSize="md">
                        ₹
                    </Box>
                    {productData?.product_amount}
                </Box>
                <Stack direction={"row"}>
                    <Icon
                        onClick={() => {
                            alert("Added to cart");
                        }}
                        variant="ghost"
                        mx={1}
                        as={AiOutlineShoppingCart}
                        w={6}
                        h={6}
                        aria-label={"Added to cart"}
                        cursor="pointer"
                    />
                    <Icon
                        onClick={handleChecked}
                        variant="ghost"
                        mx={1}
                        as={isChecked ? AiFillHeart : AiOutlineHeart}
                        w={6}
                        h={6}
                        fill={isChecked ? "#7fad39" : "inherit"}
                        aria-label={"Added to wishlist"}
                        cursor="pointer"
                    />
                </Stack>
            </Flex>
        </Box>
    );
}

SingleProductCard.propTypes = {
    productData: PropTypes.object,
    imgUrl: PropTypes.string,
    isResponsive: PropTypes.bool,
};

export default SingleProductCard;
