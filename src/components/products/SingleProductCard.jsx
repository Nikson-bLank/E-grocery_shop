import {
  Flex,
  Box,
  Image,
  Badge,
  Icon,
  Tooltip,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";

import { FaHeart, FaShoppingCart, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { useNavigate,   Link } from "react-router-dom";

function SingleProductCard({ ...productData }) {
  const navigate = useNavigate();

  return (
    <Box
      bg={"#fff"}
      borderWidth="1px"
      rounded="lg"
      _hover={{
        shadow: "lg",
      }}
     
      shadow="xs"
      position="relative"
      w={{ base: "90%", sm: "inherit" }}
    >
      {productData.isNew && (
        <Badge
          rounded="full"
          px="2"
          fontSize="0.8em"
          colorScheme="red"
          size="10px"
          position="absolute"
          top={2}
          right={2}
        >
          New
        </Badge>
      )}

      <Image
        src={productData.imageURL}
        alt={`Picture of ${productData.name}`}
        h={150}
        w="100%"
        objectFit="cover"
        roundedTop="lg"
        onClick={()=>{navigate(`/product/${productData.name}`)}}
        cursor="pointer"
      />

      <Box p="4">
        <Flex
          mt="1"
          justifyContent="space-between"
          alignContent="center"
          gap={3}
        >
          <Box>
            <Link to={`/product/${productData.name}`}><Text  cursor="pointer">{productData.name}</Text></Link>
          </Box>
          <Flex direction="row" gap={2}>
            <Tooltip
              label="Add to whishlist"
              bg="white"
              placement={"top"}
              color={"#1c1c1c"}
              fontSize={"1em"}
            >
              <Link to={"#"} display={"flex"}>
                <Icon as={FaHeart} h={3} w={3} alignSelf={"center"} />
              </Link>
            </Tooltip>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={"top"}
              color={"#1c1c1c"}
              fontSize={"1em"}
            >
              <Link to={"#"} display={"flex"}>
                <Icon as={FaShoppingCart} h={3} w={3} alignSelf={"center"} />
              </Link>
            </Tooltip>
          </Flex>
        </Flex>

        <Flex
          justifyContent="space-between"
          alignContent="center"
          direction={"row"}
        >
          <HStack>
            <Icon as={FaStar} h={4} w={4}></Icon>
            <Icon as={FaStar} h={4} w={4}></Icon>
            <Icon as={FaStar} h={4} w={4}></Icon>
            <Icon as={FaStarHalfAlt} h={4} w={4}></Icon>
          </HStack>
          <Box fontSize="lg" color={"#1c1c1c"}>
            <Box as="span" color={"#1c1c1c"} fontSize="lg">
              ₹
            </Box>
            {productData.price.toFixed(2)}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default SingleProductCard;
