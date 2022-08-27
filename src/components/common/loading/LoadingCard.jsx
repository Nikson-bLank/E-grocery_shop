import { Box, SimpleGrid, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

const noOfBoxes = [1, 2, 3, 4, 6, 7, 8];

const LoadingCard = () => {
	return (
		<SimpleGrid
			columns={[1, 2, 3, 4]}
			placeItems="center"
			spacingX="10px"
			spacingY="20px"
		>
			{noOfBoxes.map((_, idx) => (
				<Box
					bg={"#fff"}
					_hover={{
						shadow: "xl",
					}}
					shadow={{ base: "xl", sm: "md" }}
					position="relative"
					animate={{ opacity: 1, scale: 1 }}
					initial={{ opacity: 0, scale: 0 }}
					exit={{ opacity: 0, scale: 0 }}
					transition={{
						opacity: { ease: "linear" },
						layout: { duration: 0.3 },
					}}
					display="flex"
					w={{ base: "100%", sm: "200px" }}
					flexDirection={{ base: "row", sm: "column" }}
					alignSelf={"baseline"}
					key={idx}
					h={{ base: "100%", sm: "310px" }}
				>
					<Skeleton
						h={150}
						w={{ base: "50%", sm: "100%" }}
						fadeDuration={1}
					></Skeleton>

					<SkeletonText
						w={"100%"}
						mt={4}
						p={3}
						noOfLines={4}
						fadeDuration={1}
					></SkeletonText>
				</Box>
			))}
		</SimpleGrid>
	);
};

export default LoadingCard;
