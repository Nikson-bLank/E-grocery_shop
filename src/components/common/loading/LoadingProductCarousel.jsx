import { Box, HStack, Icon, Skeleton, SkeletonText } from "@chakra-ui/react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const noOfBoxes = [1, 2, 3, 4, 5, 6, 7, 8];
const LoadingProductCarousel = ({ isResponsive }) => {
  const [noOfSlides, setNoOfSlides] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      const { innerWidth } = window;
      if (innerWidth < 540) return setNoOfSlides(1);
      if (innerWidth < 900 && innerWidth > 540) return setNoOfSlides(2);
      if (innerWidth < 1300 && innerWidth > 1024) return setNoOfSlides(3);
      if (innerWidth > 1300) return setNoOfSlides(4);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <CarouselProvider
      naturalSlideHeight={100}
      naturalSlideWidth={100}
      orientation="horizontal"
      totalSlides={noOfBoxes?.length}
      visibleSlides={noOfSlides}
      step={4}
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
                flexDirection={{
                  base: isResponsive ? "row" : "column",
                  sm: "column",
                }}
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
        <ButtonNext>
          <Icon as={FaChevronRight} aria-label="next products"></Icon>
        </ButtonNext>
      </HStack>
      <ButtonBack>Back</ButtonBack>
      <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
};

export default LoadingProductCarousel;
