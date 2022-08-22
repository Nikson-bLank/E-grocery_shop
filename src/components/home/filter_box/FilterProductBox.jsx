import {
  Center,
  Divider,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import useFetch from "../../../hooks/useFetch";
import SingleProductCard from "../../products/product_lists/SingleProductCard";
import LoadingCard from "../../common/loading/LoadingCard";
import { FaRegFrownOpen } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const FilterProductBox = () => {
  const { isLoading, data } = useFetch("/products");
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProduct, setFilteredProduct] = useState([]);

  useEffect(() => {
    const featuredData = data?.filter(
      (filteredData) => filteredData.isFeatured === true
    );

    if (activeFilter === "all") {
      return setFilteredProduct(featuredData);
    }

    const filteredProduct = featuredData.filter(
      (filteredProduct) => filteredProduct.category === activeFilter
    );
    if (filteredProduct.length < 1) {
      return setFilteredProduct([]);
    }
    setFilteredProduct(filteredProduct);
  }, [data, activeFilter]);

  return (
    <>
      <VStack mb={5} spacing={5}>
        <Text align={"center"} fontSize={"32px"} fontWeight="700">
          Featured Products
        </Text>
        <Divider
          border={"5px"}
          w="80px"
          opacity={100}
          borderColor={"#7fad39"}
        ></Divider>
        <HStack spacing={10}>
          <Text
            as={"button"}
            className={activeFilter === "all" && "active_filter_category"}
            onClick={() => setActiveFilter("all")}
          >
            All
          </Text>
          <Text
            as={"button"}
            className={activeFilter === "black" && "active_filter_category"}
            onClick={() => setActiveFilter("black")}
          >
            Black
          </Text>
          <Text
            as={"button"}
            className={activeFilter === "grey" && "active_filter_category"}
            onClick={() => setActiveFilter("grey")}
          >
            Grey
          </Text>
          <Text
            as={"button"}
            className={activeFilter === "gold" && "active_filter_category"}
            onClick={() => setActiveFilter("gold")}
          >
            Gold
          </Text>
        </HStack>
      </VStack>
      {isLoading ? (
        <LoadingCard />
      ) : !isLoading && filteredProduct?.length < 1 ? (
        <Center color={"#ef3e3e"} p={10}>
          <Text align={"center"} fontSize={"24px"} fontWeight="500">
            Oops! no data found
          </Text>
          <Icon as={FaRegFrownOpen} h={10} w={10} mx={1}></Icon>
        </Center>
      ) : (
        <SimpleGrid
          as={motion.div}
          columns={[1, 2, 3, 4]}
          spacingX="50px"
          spacingY="20px"
        >
          <AnimatePresence>
            {filteredProduct?.slice(0, 8)?.map((productData) => {
              return (
                <SingleProductCard
                  key={productData.id}
                  productData={productData}
                  isResponsive
                />
              );
            })}
          </AnimatePresence>
        </SimpleGrid>
      )}
    </>
  );
};

export default FilterProductBox;
