import {
    AccordionButton,
    AccordionItem,
    AccordionPanel,
    Box,
    Icon,
    Text,
} from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

import { FaPlus, FaMinus } from "react-icons/fa";

const DetailAccordion = ({ heading, description }) => {
    return (
        <AccordionItem>
            {({ isExpanded }) => (
                <>
                    <h2>
                        <AccordionButton>
                            <Box flex="1" textAlign="left">
                                <Text fontSize={"lg"} fontWeight={400}>
                                    {heading}
                                </Text>
                            </Box>
                            {isExpanded ? (
                                <Icon as={FaMinus}></Icon>
                            ) : (
                                <Icon as={FaPlus}></Icon>
                            )}
                        </AccordionButton>
                    </h2>
                    <AccordionPanel pb={4}>{description}</AccordionPanel>
                </>
            )}
        </AccordionItem>
    );
};

DetailAccordion.propTypes = {
    heading: PropTypes.string,
    description: PropTypes.string,
};

export default DetailAccordion;
