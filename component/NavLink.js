import {
  Flex,
  Heading,
  Avatar,
  AvatarGroup,
  Text,
  Icon,
  IconButton,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Divider,
  Link,
  Box,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  LinkBox,
  LinkOverlay,
} from "@chakra-ui/react";
import Image from "next/image";
// import style from "../styles/SideNav.module.css";
const NavLink = ({ icon,id, header, toggle, active,more, ...rest }) => {
  return (
    <Flex flexDir="column">
      <Flex
        my={4}
        fontSize={!toggle ? "20px" : "15px"}
        color={active === id ? "green" : "lightgray"}
        ml="1%"
        alignItems="center"
        justifycontent="space-between"
        _hover={{ cursor: "pointer" }}
        {...rest}
      >
        {icon}

        <Text ml="2%"> {toggle ? header : ""}</Text>
      </Flex>
      <Flex flexDir="column" align="flex-start"  ml="2%" >
        {active===id && more
          ? more.map((m, i) => {
              return <Link key={i}
                  fontSize="12px"
              my={1}
              _hover={{
                textDecoration:"none"
              }}
              > {"--"} {!toggle ? "" : m}</Link>;
            })
          : ""}
      </Flex>
    </Flex>
  );
};

export default NavLink;
