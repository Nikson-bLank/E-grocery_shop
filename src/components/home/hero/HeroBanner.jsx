import { Box, Flex, Img, Text, Button } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const HeroBanner = ({ img, headTitle, title, subTitle, buttonLink }) => {
    const navigate = useNavigate();

    return (
        <Flex
            justifyContent={"space-between"}
            gap={10}
            position="relative"
            height={"500px"}
        >
            <Box position="absolute" top={20} left={10}>
                <Flex
                    direction={"column"}
                    justify="flex-start"
                    w={"70%"}
                    margin="auto"
                    wrap="wrap"
                    gap={8}
                >
                    <Text
                        align="left"
                        color={"#7fad39"}
                        letterSpacing="2px"
                        fontWeight={600}
                    >
                        {headTitle}
                    </Text>
                    <Text
                        align="left"
                        fontWeight={900}
                        fontSize="48px"
                        lineHeight={"40px"}
                    >
                        {title}
                    </Text>
                    <Text align="left" color={"#6f6f6f"} fontWeight={600}>
                        {subTitle}
                    </Text>
                    <Button
                        maxWidth={"50%"}
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
                            bg: "#729c33",
                        }}
                        onClick={() => {
                            navigate(buttonLink);
                        }}
                    >
                        Shop Now
                    </Button>
                </Flex>
            </Box>

            <Img src={img} height={"500px"} w={"100vw"}></Img>
        </Flex>
    );
};

HeroBanner.propTypes = {
    img: PropTypes.string,
    headTitle: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    buttonLink: PropTypes.string,
};

export default HeroBanner;
