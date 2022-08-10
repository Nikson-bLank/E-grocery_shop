import {
  Flex,
  Text,
  IconButton,
  Stack,
  Icon,
  useDisclosure,
  Container,
  useMediaQuery,
} from "@chakra-ui/react";

import {
  FaBars,
  FaHeart,
  FaShoppingCart,
  FaShoppingBasket,
} from "react-icons/fa";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan480] = useMediaQuery("(min-width: 480px)");

  return (
    <Container maxW={{ base: "9xl", xl: "6xl" }}>
      <Flex
        py={{ base: "24px" }}
        align={"center"}
        justifyContent="space-between"
      >
        <Flex flex={{ base: 1 }} justify="start">
          {isLargerThan480 ? (
            <Text
              textAlign="left"
              fontSize="32px"
              fontWeight={500}
              color="black"
            >
              Grocery
            </Text>
          ) : (
            <Icon as={FaShoppingBasket} h={7} w={7}></Icon>
          )}

          <Flex
            flexGrow={1}
            display={{ base: "none", xl: "flex" }}
            align="center"
            justify="center"
          >
            <DesktopNavbar />
          </Flex>
        </Flex>
        <Stack
          justify={"center"}
          direction={"row"}
          spacing={{ base: 3, sm: 6 }}
          align="center"
        >
          <Icon as={FaHeart} h={5} w={5}></Icon>
          <Icon as={FaShoppingCart} h={5} w={5}></Icon>
          <Stack direction={"row"} spacing={1} align="center">
            <Text fontSize="sm" color={"#6f6f6f"}>
              Item:
            </Text>
            <Text fontSize="sm" fontWeight={700}>
              ₹1550
            </Text>
          </Stack>
        </Stack>
        <Flex ml={2} display={{ base: "flex", xl: "none" }}>
          <IconButton
            onClick={onOpen}
            variant="ghost"
            mx={1}
            icon={<Icon as={FaBars} w={5} h={5} />}
            border="1px solid black"
            borderRadius={0}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
      </Flex>
      <MobileNavbar isOpen={isOpen} onClose={onClose} />
    </Container>
  );
}
