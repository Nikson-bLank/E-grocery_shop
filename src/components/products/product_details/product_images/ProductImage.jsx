import { Box, HStack, Image } from "@chakra-ui/react";
// import ProductImageSlide from "./ProductImageSlide";
// import { cat_3 } from "../../../../images/IMAGE_IMPORTS";
import React from "react";
import PropTypes from "prop-types";
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const ProductImage = ({ image, imgURL, images }) => {
    // const [isImageError, setIsImageError] = useState(false);
    // const imageErrorHandler = () => {
    //     setIsImageError(true);
    // };

    const multipleImages = [{ product_image: image }, ...images];
    console.log("multiple", multipleImages);
    // console.log("Images", images);
    // console.log("Image", image);

    return (
        <Box>
            <CarouselProvider
                naturalSlideHeight={50}
                naturalSlideWidth={50}
                totalSlides={images.length + 1}
                visibleSlides={1}
                step={1}
                orientation={"horizontal"}
                interval={3000}
                isIntrinsicHeight
                isPlaying
                infinite
            >
                <HStack>
                    <ButtonBack>
                        <FaChevronLeft />
                    </ButtonBack>
                    <Slider>
                        {multipleImages.map((image, index) => {
                            return (
                                <Slide
                                    index={index}
                                    key={index}
                                    style={{
                                        height: "400px",
                                        width: "560px",
                                    }}
                                >
                                    <Image
                                        src={imgURL + image.product_image}
                                        alt="Product Images"
                                        objectFit={"fill"}
                                        height={"400px"}
                                        width="100%"
                                    ></Image>
                                </Slide>
                            );
                        })}
                    </Slider>
                    <ButtonNext>
                        <FaChevronRight />
                    </ButtonNext>
                </HStack>
                {/* <Center my={2}>
                    {multipleImages?.slice(0, 5)?.map((images, index) => {
                        return (
                            <Image
                                key={index}
                                h={"50px"}
                                w={"50px"}
                                mx={2}
                                _hover={{
                                    cursor: "pointer",
                                }}
                                src={imgURL + images.product_image}
                            ></Image>
                        );
                    })}
                </Center> */}
            </CarouselProvider>

            {/* <Image
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
            </Flex> */}
        </Box>
    );
};

ProductImage.propTypes = {
    image: PropTypes.string,
    images: PropTypes.array,
    imgURL: PropTypes.string,
};

export default ProductImage;
