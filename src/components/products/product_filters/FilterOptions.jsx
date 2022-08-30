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

// import useFetch from "../../../hooks/useFetch";

const FilterOptions = () => {
    // const { isLoading, data } = useFetch("/product/get_product_filter");

    const brands = ["melon man", "fuji", "orange"];

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
                        {brands?.map((brand, index) => {
                            return (
                                <Checkbox
                                    size="md"
                                    colorScheme="green"
                                    key={index}
                                >
                                    {brand}
                                </Checkbox>
                            );
                        })}
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
                            ₹20 & less
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            ₹20 - ₹100
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            ₹100 - ₹200
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            ₹300 - ₹400
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            ₹400 - ₹500
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            ₹501 & more
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
                    <Stack spacing={[1, 5]} direction={"column-reverse"}>
                        <Checkbox size="md" colorScheme="green">
                            10% or more
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            20% or more
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            30% or more
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            40% or more
                        </Checkbox>
                        <Checkbox size="md" colorScheme="green">
                            50% or more
                        </Checkbox>
                    </Stack>
                </AccordionPanel>
            </AccordionItem>
        </>
    );
};

export default FilterOptions;
