import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Icon,
  IconButton,
  SimpleGrid,
  Skeleton,
  SkeletonText,
  Text,
  useMediaQuery,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
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
import LoadingProductCarousel from "../../common/loading/LoadingProductCarousel";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// const breakPoints = [
//   { width: 1, itemsToShow: 1, itemsToScroll: 1 },
//   { width: 550, itemsToShow: 2, itemsToScroll: 2 },
//   { width: 768, itemsToShow: 3, itemsToScroll: 3 },
//   { width: 1200, itemsToShow: 4, itemsToScroll: 4 },
// ];

const SimilarProducts = () => {
  const { isLoading, data: similarProducts } = useFetch("/products");
  // const [isLargerThan480] = useMediaQuery("(min-width: 480px)");
  // const [isLargerThan380] = useMediaQuery("(min-width: 380px)");

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




  if (isLoading) {
    return (
      <Box mt={10}>
        <Text fontSize={"2xl"} fontWeight="500">
          Similar Products
        </Text>
        <Divider />
        <Box my={4}>
          <LoadingProductCarousel />
        </Box>
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
        <Divider />
        py={10}
      >
       {products.map(productData=>(
        <SingleSimilarProduct productData={productData} />
       ))}
      </Flex> */}

      {/* {data.map((productData) => {
          return <SingleSimilarProduct productData={productData} />;
        })} */}
      <Box my={4}>
        <CarouselProvider
          naturalSlideHeight={10}
          naturalSlideWidth={10}
          orientation="horizontal"
          totalSlides={similarProducts?.length}
          visibleSlides={noOfSlides}
          step={1}
          isIntrinsicHeight
        >
          <HStack>
            <ButtonBack>
              <Icon as={FaChevronLeft}></Icon>
            </ButtonBack>
            <Slider
              style={{
                minHeight: "350px",
                width: "100%",
              }}
            >
              {similarProducts.map((productData, idx) => {
                return (
                  <Slide
                    style={{
                      margin: "0px 20px ",
                    }}
                    key={productData.id}
                    index={idx}
                  >
                    <SingleProductCard productData={productData}  />
                  </Slide>
                );
              })}
            </Slider>

            <ButtonNext>
              <Icon as={FaChevronRight} aria-label="next products"></Icon>
            </ButtonNext>
          </HStack>
        </CarouselProvider>
      </Box>

      {/* <ReactElasticCarousel  breakPoints={breakPoints}>
        {data.map((productData, idx) => {
          return <SingleProductCard key={productData.id} productData={productData} />;
        })}
      </ReactElasticCarousel> */}
    </Box>
  );
};

export default SimilarProducts;
