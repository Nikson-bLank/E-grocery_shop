import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import useFetch from "../../../hooks/useFetch";
import SingleSimilarProduct from "./SingleSimilarProduct";
import SingleProductCard from "../product_lists/SingleProductCard";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import ReactElasticCarousel from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
];

const SimilarProducts = () => {
  const { isLoading, data } = useFetch("/products");
  // const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  // const [isLargerThan380] = useMediaQuery("(min-width: 380px)");

  const noOfBoxes = [1, 2, 3, 4, 5, 6, 7, 8];

  if (isLoading) {
    return (
      <Box mt={10}>
        <Text fontSize={"2xl"} fontWeight="500">
          Similar Products
        </Text>
        <Divider />
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
                key={idx}
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
            ))}
          </Slider>
          <ButtonBack>Back</ButtonBack>
          <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
      </Box>
    );
  }

  // const products = data?.slice(0,5)
  return (
    <Box mt={10}>
      <Text fontSize={"2xl"} fontWeight="500">
        Similar Products
      </Text>
      <Divider />
      {/* <Flex
        direction={"row"}
        overflowX={"auto"}
        gap={4}
        py={10}
      >
       {products.map(productData=>(
        <SingleSimilarProduct productData={productData} />
       ))}
      </Flex> */}

      {/* {data.map((productData) => {
          return <SingleSimilarProduct productData={productData} />;
        })} */}
      <CarouselProvider
        naturalSlideHeight={100}
        naturalSlideWidth={100}
        orientation="horizontal"
        totalSlides={data?.length}
        visibleSlides={4}
        step={4}
        isIntrinsicHeight
      >
        <Slider
          style={{
            minHeight: "350px",
            width: "100%",
            padding: "0",
          }}
        >
          {data.map((productData, idx) => {
            return (
              <Slide
                style={{
                  marginRight: "10px",
                }}
                key={productData.id}
                index={idx}
              >
                <SingleProductCard productData={productData} />
              </Slide>
            );
          })}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>

      {/* <ReactElasticCarousel  breakPoints={breakPoints}>
        {data.map((productData, idx) => {
          return <SingleProductCard key={productData.id} productData={productData} />;
        })}
      </ReactElasticCarousel> */}
    </Box>
  );
};

export default SimilarProducts;
