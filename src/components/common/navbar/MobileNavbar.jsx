import {
  Box,
  Center,
  CloseButton,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaHeart, FaShoppingCart, FaChevronDown, FaUser } from "react-icons/fa";
import { Link as ReactRouterLink } from "react-router-dom";
import { NAV_ITEMS } from "./navitem";

const MobileNavbar = ({ onClose, isOpen }) => {
  return (
    <Drawer placement={"left"} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader mt={10}>
          <HStack spacing={"70px"} alignItems={"center"}>
            <Link
              as={ReactRouterLink}
              to="/"
              _hover={{
                textDecoration: "none",
              }}
            >
              <Text
                textAlign="left"
                fontSize="32px"
                fontWeight={500}
                color="black"
              >
                Grocery
              </Text>
            </Link>
            <CloseButton size={"32px"} onClick={onClose} />
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <Stack justify={"start"} direction={"row"} spacing={4} align="center">
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
          <Flex mt={6}>
            <Box mr={2}>Flag</Box>
            <Menu>
              <MenuButton aria-label="language-selector" fontWeight="normal">
                English <Icon as={FaChevronDown} h={3} w={3}></Icon>
              </MenuButton>
              <MenuList>
                <MenuItem>English</MenuItem>
                <MenuItem>Spanish</MenuItem>
              </MenuList>
            </Menu>
            <Center h="20px" mx={3}>
              <Divider orientation="vertical"></Divider>
            </Center>
            <HStack>
              <Icon offset={1} h={3} w={3} as={FaUser}></Icon>
              <Link href="#" _hover={{ textDecoration: "none" }}>
                Login
              </Link>
            </HStack>
          </Flex>
          <Flex flexDirection="column" gap={2} mt={6}>
            {NAV_ITEMS.map((navItem) => {
              return (
                <Box key={navItem.label}>
                  <Link
                    as={ReactRouterLink}
                    onClick={onClose}
                    to={navItem.href ?? "#"}
                    fontWeight={600}
                    color={"#1c1c1c"}
                    _hover={{
                      textDecoration: "none",
                      color: "#7fad39",
                    }}
                  >
                    {!navItem.children && navItem.label?.toLocaleUpperCase()}
                  </Link>
                  {navItem.children && (
                    <Menu>
                      <MenuButton
                        aria-label="language-selector"
                        fontWeight="normal"
                      >
                        {navItem.label?.toLocaleUpperCase()}
                        <Icon as={FaChevronDown} h={3} w={3} mx={1.5}></Icon>
                      </MenuButton>
                      {/* <MenuList>
                        {navItem.children.map((child) => (
                          <Link
                            key={child.label}
                            onClick={onClose}
                            href={child.href ?? "#"}
                            fontWeight={600}
                            color={"#1c1c1c"}
                            _hover={{
                              textDecoration: "none",
                              color: "#7fad39",
                            }}
                          >
                            <MenuItem>{child.label}</MenuItem>
                          </Link>
                        ))}
                      </MenuList> */}
                    </Menu>
                  )}
                  <Divider my={2}></Divider>
                </Box>
              );
            })}
          </Flex>
        </DrawerBody>
        <DrawerFooter></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileNavbar;
