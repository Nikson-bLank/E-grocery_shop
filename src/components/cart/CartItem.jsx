import {
    Box,
    Button,
    Flex,
    HStack,
    Icon,
    Image,
    Link,
    Text,
} from "@chakra-ui/react";
import { FaStarHalfAlt, FaStar, FaMinus, FaPlus } from "react-icons/fa";
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link as ReactRouterLink } from "react-router-dom";
import { feat_2 } from "../../images/IMAGE_IMPORTS";

const QuantityButton = ({ label, icon, on_click }) => {
    return (
        <Button
            bg={"#fff"}
            color={"#7fad39"}
            aria-label={label}
            borderRadius={0}
            border="1px solid #7fad39"
            size={"xs"}
            // letterSpacing="2px"
            // fontWeight={600}

            _hover={{
                shadow: "lg",
                color: "#fff",
                bg: "#729c33",
            }}
            onClick={on_click}
        >
            <Icon as={icon}></Icon>
        </Button>
    );
};

const CartItem = () => {
    const [itemCount, setItemCount] = useState(1);

    const increaseItemQuantity = () => {
        setItemCount((prevState) => prevState + 1);
    };

    const decreaseItemQuantity = () => {
        setItemCount((prevState) => {
            if (prevState === 1) return 1;
            return prevState - 1;
        });
    };

    return (
        <Box
            display="flex"
            w="100%"
            flexDirection={"row"}
            mb={2}
            justifyContent="space-between"
        >
            <HStack>
                <Image
                    src={feat_2}
                    alt={"Picture of vegetable"}
                    h={"100%"}
                    w={75}
                    objectFit="fill"
                    // onClick={() => {
                    //   navigate(`/product/${productData.id}`);
                    // }}
                    cursor="pointer"
                />

                <Flex direction="column" px={3}>
                    <Link
                        as={ReactRouterLink}
                        to={"/product/1"}
                        fontSize="16px"
                        fontWeight={500}
                        color={"#252525"}
                        _hover={{
                            textDecoration: "none",
                            color: "#7fad39",
                        }}
                    >
                        Banana
                        <Text fontSize={"sm"} color={"#888"}>
                            A dozen of banana
                        </Text>
                    </Link>
                    <HStack align={"start"} justify={"start"}>
                        <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
                        <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
                        <Icon as={FaStar} color={"#7fad39"} h={3} w={3}></Icon>
                        <Icon
                            as={FaStarHalfAlt}
                            color={"#7fad39"}
                            h={3}
                            w={3}
                        ></Icon>
                    </HStack>
                    <Box>
                        <Text>₹1550</Text>
                    </Box>
                </Flex>
            </HStack>

            <HStack>
                <QuantityButton
                    label={"decrease quantity"}
                    icon={FaMinus}
                    on_click={decreaseItemQuantity}
                />
                <Text fontSize="xl">{itemCount}</Text>
                <QuantityButton
                    label={"increase quantity"}
                    icon={FaPlus}
                    on_click={increaseItemQuantity}
                />
            </HStack>
        </Box>
    );
};

QuantityButton.propTypes = {
    label: PropTypes.string,
    icon: PropTypes.func,
    on_click: PropTypes.func,
};

export default CartItem;
