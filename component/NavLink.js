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
} from "@chakra-ui/react";
import Image from "next/image";
// import style from "../styles/SideNav.module.css";
const NavLink = ({ icon, header, toggle, active, onClick }) => {
  return (
    <Flex
      className="sidebar-items"
      outline="none"
      mt={3}
      color={active ? "green" : "#fff"}
      onClick={onClick}
    >
      <Link
        href=""
        // mt={3}
        _hover={{ textDecor: "none" }}
        justifyContent="flex-start"
      >
        <Flex justifyContent="center">
          {icon}
          {toggle ? (
            <Text
              fontSize={["md"]}
              alignSelf="center"
              letterSpacing="tight"
              mx={2}
            >
              {header}
            </Text>
          ) : (
            <></>
          )}
        </Flex>
      </Link>
    </Flex>
  );
};

export default NavLink;
