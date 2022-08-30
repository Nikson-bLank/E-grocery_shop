import { Box, Divider, HStack, Icon, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import useFetch from "../../../hooks/useFetch";
// import SingleSimilarProduct from "./SingleSimilarProduct";
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

const SimilarProducts = ({ slug }) => {
    const { isLoading, data: similarProducts } = useFetch(
        `/product/getproduct?page=${0}&size=10`
    );

    const [noOfSlides, setNoOfSlides] = useState(4);
    console.log("slug for similar product->",slug);

    useEffect(() => {
        const handleResize = () => {
            const { innerWidth } = window;
            if (innerWidth < 550) return setNoOfSlides(1);
            if (innerWidth < 768 && innerWidth > 550) return setNoOfSlides(2);
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
                    naturalSlideHeight={100}
                    naturalSlideWidth={100}
                    orientation="horizontal"
                    totalSlides={similarProducts?.result?.length}
                    visibleSlides={noOfSlides}
                    step={1}
                    isIntrinsicHeight
                >
                    <HStack>
                        <ButtonBack>
                            <Icon
                                as={FaChevronLeft}
                                aria-label="next products"
                            ></Icon>
                        </ButtonBack>
                        <Slider
                            style={{
                                minHeight: "360px",
                                // width: "100%""
                            }}
                        >
                            {similarProducts?.result?.map((product, idx) => {
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
                                            imgUrl={similarProducts?.image_url}
                                        />
                                    </Slide>
                                );
                            })}
                        </Slider>

                        <ButtonNext>
                            <Icon
                                as={FaChevronRight}
                                aria-label="next products"
                            ></Icon>
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

SimilarProducts.propTypes = {
    slug: PropTypes.string,
};

export default SimilarProducts;
