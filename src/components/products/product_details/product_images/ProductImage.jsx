import { Box, Image } from '@chakra-ui/react'
import ProductImageSlide from "./ProductImageSlide"

const ProductImage = ({image, images}) => {
  return (
    <Box borderWidth={"1px"} >
    <Image
      w="100%"
      h="500px"
      objectFit={"fill"}
      alt="product"
      src={image}
    ></Image>
    <ProductImageSlide images={images} />
  </Box>
  )
}

export default ProductImage