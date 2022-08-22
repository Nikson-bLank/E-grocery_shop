import { Box, Container, Flex, SimpleGrid } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ProductImage from "../../components/products/product_details/product_images/ProductImage";
import PriceDetails from "../../components/products/product_details/PriceDetails";
import CartDetails from "../../components/products/product_details/CartDetails";
import ProductDescription from "../../components/products/product_details/ProductDescription";
import DetailedDescription from "../../components/products/product_details/detailed_description/DetailedDescription";
import ReviewDetails from "../../components/products/product_details/ReviewDetails";
import SimilarProducts from "../../components/products/similar_products/SimilarProducts";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/common/loading/Loading";


//image
import {cat_1, cat_2, cat_3, cat_4, cat_5} from "../../images/IMAGE_IMPORTS"



const ProductDetails = () => {
  const param = useParams();
  const { isLoading, data } = useFetch(`/products/${param.id}`);
  const images = [cat_1, cat_2, cat_3, cat_4, cat_5]  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [param.id]);

  if (isLoading) {
    return (
      <Container
        maxW={{
          base: "9xl",
          xl: "6xl",
        }}
      >
        <Loading />
      </Container>
    );
  }

  return (
    <Container
      maxW={{
        base: "9xl",
        xl: "6xl",
      }}
    >
      <Box>
        <SimpleGrid columns={[1, 1, 2]} w="100%">
          <ProductImage image={data?.imageURL} images={images} />
          <Flex
            direction="column"
            justify="space-between"
            px={5}
            h="auto"
            gap={5}
          >
            <PriceDetails
              name={data?.name}
              price={data?.price}
              discountPercent={data?.discountPercent}
              discountPrice={data?.discountPrice}
            />
            <CartDetails />
            <ProductDescription description={data?.description} />
          </Flex>
        </SimpleGrid>
        <DetailedDescription
          name={data?.name}
          description={data?.description}
        />
        <ReviewDetails />
      </Box>
      <Box>
        <SimilarProducts />
      </Box>
    </Container>
  );
};

export default ProductDetails;
