import {
  Flex,
  Box,
  Image,
  Badge,
  Icon,
  HStack,
  Text,
  Link,
  Stack,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

import {
  // FaHeart,
  // FaRegHeart,
  // FaShoppingCart,
  FaStarHalfAlt,
  FaStar,
} from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineHeart } from "react-icons/ai";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";

function SingleProductCard({ productData }) {
  const navigate = useNavigate();

  return (
    <Box
      bg={"#fff"}
      _hover={{
        shadow: "xl",
      }}
      shadow={{ base: "xl", sm: "md" }}
      position="relative"
      transition={"all 0.3s ease"}
      display="flex"
      w={{ base: "100%", sm: "200px" }}
      flexDirection={{ base: "row", sm: "column" }}
      alignSelf={"baseline"}
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
          left={2}
          minw="300px"
        >
          New
        </Badge>
      )}

      <Image
        src={productData.imageURL}
        alt={`Picture of ${productData.name}`}
        alignSelf="center"
        h={145}
        w={{ base: "50%", sm: "100%" }}
        objectFit="fill"
        onClick={() => {
          navigate(`/product/${productData.id}`);
        }}
        cursor="pointer"
      />

      <Flex direction="row" gap={2} p={3} justify="space-between">
        <Flex direction="column" gap={1}>
          <Link
            as={ReactRouterLink}
            to={`/product/${productData.id}`}
            fontSize="16px"
            fontWeight={500}
            color={"#252525"}
            _hover={{
              textDecoration: "none",
              color: "#7fad39",
            }}
          >
            {productData.name}
            <Text fontSize={"sm"} color={"#888"}>
              {productData.shortDescription}
            </Text>
          </Link>
          <HStack>
            <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
            <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
            <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
            <Icon as={FaStarHalfAlt} color={"#7fad39"} h={3} w={3}></Icon>
          </HStack>
          <Box fontSize="xl" color={"#1c1c1c"} fontWeight={600}>
            <Box as="span" color={"#1c1c1c"} fontSize="md">
              ₹
            </Box>
            {productData?.price}
          </Box>
          <Stack direction={"row"}>
            <Icon
              onClick={() => {
                alert("Added to wishlist");
              }}
              variant="ghost"
              mx={1}
              as={AiOutlineShoppingCart}
              w={6}
              h={6}
              bg="inherit"
              aria-label={"Added to wishlist"}
              cursor="pointer"
            />

            <Icon
              onClick={() => {
                alert("Added to wishlist");
              }}
              variant="ghost"
              mx={1}
              as={AiOutlineHeart}
              w={6}
              h={6}
              bg="inherit"
              aria-label={"Added to wishlist"}
              cursor="pointer"
            />
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
}

export default SingleProductCard;
