import { CarouselProvider, Slide, Slider, Image } from "pure-react-carousel";

const ProductImageSlide = ({ images, imgURL }) => {
    console.log("slideImages", images);
    return (
        <CarouselProvider
            naturalSlideHeight={50}
            naturalSlideWidth={100}
            totalSlides={5}
            visibleSlides={4}
            step={1}
            orientation={"horizontal"}
        >
            <Slider>
                {images.map((image, index) => {
                    return (
                        <Slide
                            index={index}
                            key={index}
                            style={{
                                height: "70px",
                                width: "100px",
                            }}
                        >
                            <Image
                                src={imgURL + image.product_image}
                                alt="something"
                            ></Image>
                        </Slide>
                    );
                })}
            </Slider>
        </CarouselProvider>
    );
};

export default ProductImageSlide;
