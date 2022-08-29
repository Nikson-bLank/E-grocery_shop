import { Flex, Spinner } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
    return (
        <Flex justifyContent={"center"} align="center" h={"100vh"}>
            <Spinner
                thickness="6px"
                speed="0.65s"
                emptyColor="gray.200"
                color={"##7fad39"}
                size="xl"
            />
        </Flex>
    );
};

export default Loading;
