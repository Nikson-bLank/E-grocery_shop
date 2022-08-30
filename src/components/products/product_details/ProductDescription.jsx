import { Box, Text } from "@chakra-ui/react";
import React from "react";
import PropTypes from "prop-types";

const ProductDescription = ({ description }) => {
    return (
        <Box>
            <Text fontSize="xl" fontWeight={500}>
                Product Description
            </Text>
            <p>{description || "description"}</p>
        </Box>
    );
};

ProductDescription.propTypes = {
    description: PropTypes.string,
};

export default ProductDescription;
