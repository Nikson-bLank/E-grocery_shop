import {
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  IconButton,
  createIcon,
  useColorModeValue,
  Container,
} from "@chakra-ui/react";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

import {
  heroBanner_1,
  heroBanner_2,
  heroBanner_3,
} from "../../../images/IMAGE_IMPORTS";

import HeroBanner from "./HeroBanner";

export default function Hero() {
  return (
    <CarouselProvider
      naturalSlideHeight={10}
      naturalSlideWidth={10}
      orientation="horizontal"
      totalSlides={3}
      visibleSlides={1}
      step={1}
      playDirection="forward"
      isIntrinsicHeight
      isPlaying
    >
      <Slider>
        <Slide index={0}>
          <HeroBanner
            img={heroBanner_1}
            headTitle={"Fresh Vegetable"}
            title={"Vegetable 100% Organic"}
            subTitle={"Free Pickup and Delivery Available"}
            buttonLink={"/products"}
          />
        </Slide>
        <Slide index={1}>
          <HeroBanner
            img={heroBanner_2}
            headTitle={"Fresh Fruits"}
            title={"Fruits 100% Organic"}
            subTitle={"Free Pickup and Delivery Available"}
            buttonLink={"/products"}
          />
        </Slide>
        <Slide index={2}>
          <HeroBanner
            img={heroBanner_3}
            headTitle={"Affordable Grocery"}
            title={"100% Organic "}
            subTitle={"Free Pickup and Delivery Available"}
            buttonLink={"/products"}
          />
        </Slide>
      </Slider>
    </CarouselProvider>
  );
}
