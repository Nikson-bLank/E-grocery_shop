import { Box, Skeleton, SkeletonText } from "@chakra-ui/react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import React from "react";
const noOfBoxes = [1, 2, 3, 4, 5, 6, 7, 8];
const LoadingProductCarousel = () => {
  return (
    <CarouselProvider
      naturalSlideHeight={100}
      naturalSlideWidth={100}
      orientation="horizontal"
      totalSlides={noOfBoxes?.length}
      visibleSlides={4}
      step={4}
      isIntrinsicHeight
    >
      <Slider
        style={{
          minHeight: "350px",
          width: "100%",
        }}
      >
        {noOfBoxes.map((_, idx) => (
          <Slide
            style={{
              margin: "0px 20px ",
            }}
            key={idx}
            index={idx}
          >
            <Box
              bg={"#fff"}
              _hover={{
                shadow: "xl",
              }}
              shadow={{ base: "xl", sm: "md" }}
              position="relative"
              transition={"all 0.3s ease"}
              display="flex"
              w={"100%"}
              flexDirection={{ base: "row", sm: "column" }}
              alignSelf={"baseline"}
              h="310px"
            >
              <Skeleton h={150} w={"100%"} fadeDuration={1}></Skeleton>

              <SkeletonText
                w={"100%"}
                h={"160px"}
                mt={4}
                p={3}
                noOfLines={4}
                fadeDuration={1}
              ></SkeletonText>
            </Box>
          </Slide>
        ))}
      </Slider>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default LoadingProductCarousel;
