import { Box, Divider, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

const ReviewDetails = () => {
  return (
    <Box mt="10">
      <Text fontSize={"2xl"} fontWeight={500}>
        Review & Rating
      </Text>
      <Divider></Divider>
      <Stack direction={{ base: "column", lg: "row" }}>
        <Box p="6" border="1px solid #888">
          <Text>Total Rating</Text>
        </Box>
        <Box flexGrow={1} p="6" border="1px solid #888" overflow={"auto"}>
          <Text>Reviews</Text>
        </Box>
      </Stack>
    </Box>
  );
};

export default ReviewDetails;
