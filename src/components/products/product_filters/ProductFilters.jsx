import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Checkbox,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

const ProductFilters = () => {
  return (
    <Box w="100%">
      <Text mb={5} fontSize={"xl"} fontWeight="500">
        Filter
      </Text>
      <Accordion allowMultiple>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Brand
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={[1, 5]} direction={"column"}>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Price
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={[1, 5]} direction={"column"}>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Discount
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            <Stack spacing={[1, 5]} direction={"column"}>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
              <Checkbox size="md" colorScheme="green">
                Checkbox
              </Checkbox>
            </Stack>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <HStack justifyContent={"center"} mt={5} spacing={3}>
        <Button
          bg={"#7fad39"}
          color={"#fff"}
          fontWeight={600}
          _hover={{
            shadow: "lg",
            color: "#fff",
            bg: "#7fad39",
          }}
          size="sm"
        >
          Apply
        </Button>
        <Button
          bg={"#7fad39"}
          color={"#fff"}
          fontWeight={600}
          _hover={{
            shadow: "lg",
            color: "#fff",
            bg: "#7fad39",
          }}
          size="sm"
        >
          Clear All
        </Button>
      </HStack>
    </Box>
  );
};

export default ProductFilters;
