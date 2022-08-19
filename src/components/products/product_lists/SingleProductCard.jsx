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
  useToast,
} from "@chakra-ui/react";

import {
  // FaHeart,
  // FaRegHeart,
  // FaShoppingCart,
  FaStarHalfAlt,
  FaStar,
} from "react-icons/fa";
import {
  AiOutlineShoppingCart,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { useNavigate, Link as ReactRouterLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

function SingleProductCard({ productData }) {
  const navigate = useNavigate();
  const toast = useToast();

  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    toast({
      position: "top",
      isClosable: true,
      render: () => (
        <Flex
          direction={"row"}
          justify="center"
          align="center"
          gap={2}
          color="white"
          opacity={"70%"}
          borderRadius="10px"
          p={3}
          bg={"#7fad39"}
        >
          <Icon as={AiFillHeart}></Icon>Successfully added to wishlist
        </Flex>
      ),
    });
    setIsChecked(!isChecked);
  };

  return (
    <Box
      as={motion.div}
      // animate={{ opacity: 1 }}
      // initial={{ opacity: 0 }}
      // exit={{ opacity: 0 }}
      layout
      bg={"#fff"}
      _hover={{ shadow: "xl" }}
      shadow={{
        base: "xl",
        sm: "md",
      }}
      position="relative"
      transition={"all 0.3s ease"}
      display="flex"
      w={{
        base: "100%",
        // sm: "200px",
      }}
      flexDirection={{
        base: "row",
        sm: "column",
      }}
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
        >
          New
        </Badge>
      )}

      <Image
        src={productData.imageURL}
        alt={`Picture of ${productData.name}`}
        alignSelf="center"
        h={150}
        w={{
          base: "50%",
          sm: "100%",
        }}
        objectFit="fill"
        onClick={() => {
          navigate(`/product/${productData.id}`);
        }}
        cursor="pointer"
      />
      <Flex direction="column" gap={2} p={3}>
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
            {productData.shortDescription}{" "}
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
          {productData?.price}{" "}
        </Box>
        <Stack direction={"row"}>
          <Icon
            onClick={() => {
              alert("Added to cart");
            }}
            variant="ghost"
            mx={1}
            as={AiOutlineShoppingCart}
            w={6}
            h={6}
            aria-label={"Added to cart"}
            cursor="pointer"
          />
          <Icon
            onClick={handleChecked}
            variant="ghost"
            mx={1}
            as={isChecked ? AiFillHeart : AiOutlineHeart}
            w={6}
            h={6}
            fill={isChecked ? "#7fad39" : "inherit"}
            aria-label={"Added to wishlist"}
            cursor="pointer"
          />
        </Stack>
      </Flex>
    </Box>
  );
}

export default SingleProductCard;
