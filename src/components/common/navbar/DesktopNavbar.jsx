import {
  Box,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as ReactRouterLink, useLocation } from "react-router-dom";
import NavConfig from "./NavConfig";

const DesktopNavbar = () => {
  const { pathname } = useLocation();
  return (
    <Stack direction={"row"} spacing={5}>
      {NavConfig().map((navItem) => {
        return (
          <Box key={navItem.label}>
            <Popover trigger={"hover"} placement={"bottom-start"}>
              <PopoverTrigger>
                <Link
                  as={ReactRouterLink}
                  p={2}
                  to={navItem.href ?? "#"}
                  fontSize="14px"
                  fontWeight={700}
                  letterSpacing="2px"
                  color={"#252525"}
                  _hover={{
                    textDecoration: "none",
                    color: "#7fad39",
                  }}
                  className={pathname === navItem.href && "active-link"}
                >
                  {navItem.label?.toLocaleUpperCase()}
                </Link>
              </PopoverTrigger>
              {navItem.children && (
                <PopoverContent
                  border={0}
                  boxShadow={"xl"}
                  p={4}
                  rounded={"xl"}
                  minW={"sm"}
                >
                  <Stack>
                    {navItem.children.map((child) => (
                      <DesktopSubNav key={child.label} {...child} />
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        );
      })}
    </Stack>
  );
};
const DesktopSubNav = ({ label, href }) => {
  return (
    <Link
      as={ReactRouterLink}
      to={href}
      role={"group"}
      display={"block"}
      p={2}
      _hover={{
        textDecoration: "none",
        color: "#7fad39",
      }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "green" }}
            fontWeight={500}
          >
            {label}
          </Text>
        </Box>
      </Stack>
    </Link>
  );
};

export default DesktopNavbar;
