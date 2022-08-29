import {
    Box,
    Center,
    Container,
    Divider,
    Flex,
    HStack,
    Icon,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useDisclosure,
} from "@chakra-ui/react";
import {
    FaFacebookF,
    FaTwitter,
    FaLinkedinIn,
    FaPinterestP,
    FaChevronDown,
    FaUser,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

import { Link } from "@chakra-ui/react";

import React from "react";

const Header = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box
            w="100%"
            bg="whitesmoke"
            display={{ base: "none", xl: "flex" }}
            margin="auto"
            flexDirection="row"
            justifyContent="center"
            padding="10px 0px 13px"
        >
            <Container
                maxW="6xl"
                display="flex"
                margin="auto"
                flexDirection="row"
                justifyContent="space-between"
            >
                <HStack spacing={4}>
                    <HStack>
                        <Icon as={HiMail}></Icon>
                        <Text fontSize="sm">mactosys.com</Text>
                    </HStack>
                    <Center h="20px">
                        <Divider orientation="vertical"></Divider>
                    </Center>
                    <Text fontSize="sm">
                        Free Shipping for all Order of ₹149 and above
                    </Text>
                </HStack>

                <Flex gap={5}>
                    <HStack spacing={4}>
                        <Link href="#">
                            <Icon as={FaFacebookF} w={3} h={3}></Icon>
                        </Link>
                        <Link href="#">
                            <Icon as={FaTwitter} w={3} h={3}></Icon>
                        </Link>
                        <Link href="#">
                            <Icon as={FaLinkedinIn} w={3} h={3}></Icon>
                        </Link>
                        <Link href="#">
                            <Icon as={FaPinterestP} w={3} h={3}></Icon>
                        </Link>
                    </HStack>
                    <Center h="20px">
                        <Divider orientation="vertical"></Divider>
                    </Center>
                    <Flex>
                        <Box mr={2}>Flag</Box>
                        <Menu isOpen={isOpen}>
                            <MenuButton
                                aria-label="language-selector"
                                fontWeight="normal"
                                onMouseEnter={onOpen}
                                onMouseLeave={onClose}
                            >
                                English{" "}
                                <Icon as={FaChevronDown} h={3} w={3}></Icon>
                            </MenuButton>
                            <MenuList
                                onMouseEnter={onOpen}
                                onMouseLeave={onClose}
                            >
                                <MenuItem>English</MenuItem>
                                <MenuItem>Spanish</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                    <Center h="20px">
                        <Divider orientation="vertical"></Divider>
                    </Center>
                    <HStack>
                        <Icon offset={1} h={3} w={3} as={FaUser}></Icon>
                        <Link href="#" _hover={{ textDecoration: "none" }}>
                            Login
                        </Link>
                    </HStack>
                </Flex>
            </Container>
        </Box>
    );
};

export default Header;
