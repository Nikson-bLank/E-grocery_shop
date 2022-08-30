import { Accordion, Box, Button, HStack, Text } from "@chakra-ui/react";
import React from "react";
import FilterOptions from "./FilterOptions";

const DesktopProductFilter = () => {
    return (
        <Box w="100%">
            <Text mb={5} fontSize={"xl"} fontWeight="500">
                Filter
            </Text>
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
        </Box>
    );
};

export default DesktopProductFilter;
