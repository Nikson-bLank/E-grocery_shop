import React from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Box, HStack, Icon } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SingleProductCard from "../../products/product_lists/SingleProductCard";

const ProductSlides = ({ productData }) => {
  return (
    
      <CarouselProvider
        naturalSlideHeight={10}
        naturalSlideWidth={10}
        orientation="horizontal"
        totalSlides={productData?.length}
        visibleSlides={4}
        step={1}
        isIntrinsicHeight
      >
        <HStack>
          <ButtonBack>
            <Icon as={FaChevronLeft} aria-label="next products"></Icon>
          </ButtonBack>
          <Slider
            style={{
              minHeight: "350px",
              width: "100%",
            }}
          >
            {productData.map((productData, idx) => {
              return (
                <Slide
                  style={{
                    margin: "0px 20px ",
                  }}
                  key={productData.id}
                  index={idx}
                >
                  <SingleProductCard productData={productData} />
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

export default ProductSlides;
