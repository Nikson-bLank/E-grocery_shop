/* eslint-disable no-unused-vars */
/* eslint-disable  */

import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    ButtonBack,
    ButtonNext,
    CarouselProvider,
    Slide,
    Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { HStack, Icon, useMediaQuery } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SingleProductCard from "../../products/product_lists/SingleProductCard";

const ProductSlides = ({ productData }) => {

    const [isLargerThan1024] = useMediaQuery("(min-width: 1024px)");
    const [isLargerThan720] = useMediaQuery("(min-width: 720px)");
    const [isLargerThan480] = useMediaQuery("(min-width: 480px)");


    return (
        <CarouselProvider
            naturalSlideHeight={400}
            naturalSlideWidth={400}
            orientation="horizontal"
            totalSlides={productData?.result?.length}
            visibleSlides={
                isLargerThan1024
                    ? 4
                    : isLargerThan720
                    ? 3
                    : isLargerThan480
                    ? 2
                    : 1
            }
            step={1}
            isIntrinsicHeight
        >
            <HStack>
                <ButtonBack>
                    <Icon
                        as={FaChevronLeft}
                        aria-label="previous products"
                    ></Icon>
                </ButtonBack>
                <Slider
                    style={{
                        minHeight: "360px",
                    }}
                >
                    {productData?.result?.map((product, idx) => {
                        return (
                            <Slide
                                style={{
                                    margin: "0px 20px ",
                                }}
                                key={product.id}
                                index={idx}
                            >
                                <SingleProductCard
                                    productData={product}
                                    imgUrl={productData?.image_url}
                                />
                            </Slide>
                        );
                    })}
                </Slider>

                <ButtonNext>
                    <Icon as={FaChevronRight} aria-label="next products"></Icon>
                </ButtonNext>
            </HStack>
        </CarouselProvider>
    );
};
ProductSlides.propTypes = {
    productData: PropTypes.any,
};

export default ProductSlides;
