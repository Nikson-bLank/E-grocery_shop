import { CarouselProvider, Slide, Slider, Image } from 'pure-react-carousel'


const ProductImageSlide = ({images}) => {
  return (
   <CarouselProvider
   naturalSlideHeight={50}
   naturalSlideWidth={100}
   totalSlides={5}
   visibleSlides={4}
   step={1}
   orientation={'horizontal'}
   >
    <Slider>
        {images.map((image,index)=>{
            return  <Slide index={index} key={index} style={{
              border:"1px solid black",
              height:"50px",
              width:"100px"
            }}>
            <Image src={image} alt="something"></Image>
            </Slide>
        })}
       
    </Slider>
   </CarouselProvider>
  )
}

export default ProductImageSlide