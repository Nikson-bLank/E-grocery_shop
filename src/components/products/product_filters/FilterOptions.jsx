import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Stack,
} from "@chakra-ui/react";
import React from "react";

const FilterOptions = () => {
  return (
    <>
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
    </>
  );
};

export default FilterOptions;
