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
import PropTypes from "prop-types";
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

MobileProductFilter.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
};

export default MobileProductFilter;
