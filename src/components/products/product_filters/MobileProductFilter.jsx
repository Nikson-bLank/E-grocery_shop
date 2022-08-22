import {
  Accordion,
  Button,
  CloseButton,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import FilterOptions from "./FilterOptions";

const MobileProductFilter = ({ isOpen, onClose }) => {
  return (
    <Drawer onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader>
          <HStack>
            <Text>Filters</Text>
            <CloseButton onClick={onClose}></CloseButton>
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <Accordion allowMultiple>
            <FilterOptions></FilterOptions>
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileProductFilter;
