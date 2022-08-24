import { useState } from "react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HStack, Icon } from "@chakra-ui/react";

const HeroSlider = ({
  images,
  naturalSlideHeight,
  naturalSlideWidth,
  orientation,
  totalSlides,
  visibleSlides,
  step,
  isIntrinsicHeight,
  children
}) => {
  const [noOfSlides, setNoOfSlides] = useState(4);
  return (
    <CarouselProvider
      naturalSlideHeight={naturalSlideHeight}
      naturalSlideWidth={naturalSlideWidth}
      orientation={orientation}
      totalSlides={images?.length}
      visibleSlides={visibleSlides}
      step={step}
      isIntrinsicHeight
      playDirection="forward"
      infinite
      isPlaying
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
          {images.map((productData, idx) => {
            return (
              <Slide
                style={{
                  margin: "0px 20px ",
                }}
                key={idx}
                index={idx}
              >

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

export default HeroSlider;
