import { Box, Flex, Image } from "@chakra-ui/react";
import ProductImageSlide from "./ProductImageSlide";
import { cat_3 } from "../../../../images/IMAGE_IMPORTS";
import { useState } from "react";

const ProductImage = ({ image, imgURL, images }) => {
    const [isImageError, setIsImageError] = useState(false);
    const imageErrorHandler = (e) => {
        setIsImageError(true);
    };

    return (
        <Box>
            <Image
                w="100%"
                h="500px"
                objectFit={"fill"}
                alt="product"
                src={isImageError ? cat_3 : imgURL + image}
                onError={imageErrorHandler}
            ></Image>
            <Flex
                justifyContent={"center"}
                bottom={0}
                width={"100%"}
                borderWidth={1}
            >
                <ProductImageSlide images={images} imgURL={imgURL} />
            </Flex>
        </Box>
    );
};

export default ProductImage;
