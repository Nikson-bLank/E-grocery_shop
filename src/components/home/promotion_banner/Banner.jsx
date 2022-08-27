import { Box, Flex, HStack, Image, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import { banner_1, banner_2 } from "../../../images/IMAGE_IMPORTS";

const Banner = () => {
    return (
        <SimpleGrid w={"100%"} columns={[1, 1, 2, 2]} spacing={10}>
            <Image src={banner_1} maxWidth={"100%"}></Image>
            <Image src={banner_2} maxWidth={"100%"}></Image>
        </SimpleGrid>
    );
};

export default Banner;
