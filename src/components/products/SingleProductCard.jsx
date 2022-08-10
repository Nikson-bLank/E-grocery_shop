import {
  Flex,
  Box,
  Image,
  Badge,
  Icon,
  Tooltip,
  HStack,
  Text,
  Center,
  Divider,
} from "@chakra-ui/react";

import { FaHeart, FaShoppingCart, FaStarHalfAlt, FaStar } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";

function SingleProductCard({ ...productData }) {
  const navigate = useNavigate();

  return (
    <Box
      bg={"#fff"}
      _hover={{
        shadow: "xl",
      }}
      shadow="xs"
      position="relative"
    >
      {productData.isNew && (
        <Badge
          rounded="full"
          px="2"
          fontSize="0.8em"
          colorScheme="green"
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
        maxH={200}
        w="100%"
        onClick={() => {
          navigate(`/product/${productData.name}`);
        }}
        cursor="pointer"
      />

      <Flex direction="row" gap={2} p={3} justify="space-between">
        <Flex direction="column" gap={1}>
          <Link to={`/product/${productData.name}`}>
            <Text fontSize="lg" fontWeight="500" cursor="pointer">
              {productData.name}
            </Text>
          </Link>
          <HStack>
            <Icon as={FaStar} h={3} w={3}></Icon>
            <Icon as={FaStar} h={3} w={3}></Icon>
            <Icon as={FaStar} h={3} w={3}></Icon>
            <Icon as={FaStarHalfAlt} h={3} w={3}></Icon>
          </HStack>
        </Flex>
        <Center h={"auto"}>
          <Divider orientation="vertical"></Divider>
        </Center>
        <Flex direction="column" gap={1}>
          <Box fontSize="xl" color={"#1c1c1c"} fontWeight={600}>
            <Box as="span" color={"#1c1c1c"} fontSize="md">
              ₹
            </Box>
            {productData.price.toFixed(2)}
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
                <Icon as={FaHeart} h={4} w={4} alignSelf={"center"} />
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
                <Icon as={FaShoppingCart} h={4} w={4} alignSelf={"center"} />
              </Link>
            </Tooltip>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SingleProductCard;
