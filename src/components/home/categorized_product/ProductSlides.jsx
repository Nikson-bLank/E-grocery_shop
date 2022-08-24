import { useEffect, useState } from "react";
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
      totalSlides={productData?.length}
      visibleSlides={noOfSlides}
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
          }}
        >
          {productData?.results?.map((productData, idx) => {
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
