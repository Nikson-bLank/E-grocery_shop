import {
  Box,
  chakra,
  Link,
  Stack,
  Text,
  VisuallyHidden,
  Input,
  useColorModeValue,
  Divider,
  List,
  ListItem,
  Flex,
  Button,
  Image,
} from "@chakra-ui/react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { BiMailSend } from "react-icons/bi";
import { payment_methods } from "../../images/IMAGE_IMPORTS";

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"700"} fontSize={"16px"}>
      {children}
    </Text>
  );
};

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={"#fff"}
      rounded={"full"}
      w={12}
      h={12}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"all 0.3s ease"}
      _hover={{
        bg: "#7fad39",
        color: "#fff",
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

const FOOT_LINKS_1 = [
  { id: 1, label: "About Us", link: "#" },
  { id: 2, label: "About Our Shop", link: "#" },
  { id: 3, label: "Secure Shopping", link: "#" },
  { id: 4, label: "Delivery infomation", link: "#" },
  { id: 5, label: "Privacy Policy", link: "#" },
  { id: 6, label: "Our Sitemap", link: "#" },
];
const FOOT_LINKS_2 = [
  { id: 1, label: "Who We Are", link: "#" },
  { id: 2, label: "Our Services", link: "#" },
  { id: 3, label: "Projects", link: "#" },
  { id: 4, label: "Contact", link: "#" },
  { id: 5, label: "Innovation", link: "#" },
  { id: 6, label: "Testimonials", link: "#" },
];

export default function Footer() {
  return (
    <Box
      bg={"#F3F6FA"}
      w="100%"
      color={"#1c1c1c"}
      display="flex"
      margin="auto"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      paddingTop={"70px"}
    >
      <Box
        w={{ base: "95%", xl: "80%" }}
        display="flex"
        my={10}
        gap={10}
        // flexDirection={{ base: "column", md: "row" }}
        flexWrap="wrap"
        justifyContent="space-between"
      >
        <Box>
          <Box>
            <Text
              textAlign="left"
              fontSize="32px"
              fontWeight={500}
              color="black"
            >
              Grocery
            </Text>
          </Box>
          <Box></Box>
        </Box>
        <Box>
          <Box mb={3}>
            <ListHeader children={"Useful Links"} />
          </Box>
          <Flex gap={20}>
            <List>
              {FOOT_LINKS_1.map((footLink) => (
                <ListItem mb={2} key={footLink.id}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href={footLink.link}
                  >
                    {footLink.label}
                  </Link>
                </ListItem>
              ))}
            </List>
            <List>
              {FOOT_LINKS_2.map((footLink) => (
                <ListItem mb={2} key={footLink.id}>
                  <Link
                    _hover={{
                      textDecoration: "none",
                    }}
                    href={footLink.link}
                  >
                    {footLink.label}
                  </Link>
                </ListItem>
              ))}
            </List>
          </Flex>
        </Box>
        <Box>
          <Box mb={3}>
            <ListHeader children={"Join Our Newsletter Now"} />
          </Box>
          <Box>
            <Text fontSize="sm">
              Get E-mail updates about our latest shop and special offers.
            </Text>
            <Stack direction={"row"} my={10}>
              <Input
                placeholder={"Your email address"}
                bg={"#fff"}
                border={0}
                borderRadius={0}
                p={4}
                _focus={{
                  bg: "#fff",
                }}
              />
              <Button
                bg={"#7fad39"}
                color={useColorModeValue("white", "gray.800")}
                aria-label="Subscribe"
                borderRadius={0}
                fontWeight={800}
                px={"26px"}
              >
                SUBSCRIBE
              </Button>
            </Stack>
            <Stack direction={"row"} spacing={6}>
              <SocialButton label={"Twitter"} href={"#"}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={"YouTube"} href={"#"}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={"Instagram"} href={"#"}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Box>
        </Box>
      </Box>
      <Box w={{ base: "95%", xl: "80%" }}>
        <Divider margin="auto" />
        <Flex
          padding={"15px 0px"}
          flexDirection={{ base: "column", xl: "row" }}
          justify="space-between"
        >
          <Box>
            Copyright ©2021 All rights reserved | This template is inspired by Jassa 
          </Box>
          <Box>
            <Image src={payment_methods} alt="Payment methods" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
