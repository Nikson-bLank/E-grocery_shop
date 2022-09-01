/* eslint-disable no-unused-vars */
import { background, Box, Center, Flex, HStack } from "@chakra-ui/react";
// import ProductImageSlide from "./ProductImageSlide";
// import { cat_3 } from "../../../../images/IMAGE_IMPORTS";
import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Dot,
    Image,
    ImageWithZoom,
    Slide,
    Slider,
} from "pure-react-carousel";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
const ProductImage = ({ image, imgURL, images }) => {
    // const [isImageError, setIsImageError] = useState(false);
    // const imageErrorHandler = () => {
    //     setIsImageError(true);
    // };

    // eslint-disable-next-line no-unused-vars
    const [selectedSlide, setSelectedSlide] = useState(0);

    const multipleImages = [{ product_image: image }, ...images];
    console.log("multiple", multipleImages);
    // console.log("Images", images);
    // console.log("Image", image);

    return (
        <CarouselProvider
            naturalSlideHeight={100}
            naturalSlideWidth={100}
            totalSlides={multipleImages.length}
            visibleSlides={1}
            step={1}
            orientation={"horizontal"}
            interval={3000}
            isIntrinsicHeight
            hasMasterSpinner
            isPlaying
            infinite
        >
            <Box position={"relative"}>
                <ButtonBack
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "10px",
                        backgroundColor: "#fff",
                        padding: "10px",
                        zIndex: 1,
                        borderRadius: "50%",
                        opacity: "0.7",
                    }}
                >
                    <FaChevronLeft />
                </ButtonBack>

                <Slider>
                    {multipleImages?.map((image, index) => {
                        return (
                            <Slide
                                index={index}
                                key={index}
                            >
                                <ImageWithZoom
                                    src={imgURL + image.product_image}
                                    style={{
                                        height: "400px",
                                        width: "100%",
                                    }}
                                    isPinchZoomEnabled
                                    alt="Product Images"
                                ></ImageWithZoom>
                            </Slide>
                        );
                    })}
                </Slider>
                <ButtonNext
                    style={{
                        position: "absolute",
                        top: "50%",
                        right: "5px",
                        backgroundColor: "#fff",
                        padding: "10px",
                        borderRadius: "50%",
                        opacity: "0.7",
                    }}
                >
                    <FaChevronRight />
                </ButtonNext>
            </Box>

            <Center mt={2}>
                {multipleImages?.map((image, index) => {
                    return (
                        <Dot
                            key={index}
                            slide={index}
                            style={{
                                margin: "auto",
                            }}
                        >
                            <Image
                                style={{
                                    height: "70px",
                                    width: "100px",
                                }}
                                src={imgURL + image.product_image}
                            ></Image>
                        </Dot>
                    );
                })}
            </Center>
        </CarouselProvider>
    );
};

ProductImage.propTypes = {
    image: PropTypes.string,
    images: PropTypes.array,
    imgURL: PropTypes.string,
};

export default ProductImage;
