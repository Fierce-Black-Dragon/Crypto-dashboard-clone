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
  styled,
} from "@chakra-ui/react";

import Image from "next/image";
import { useState } from "react";
// import style from "../styles/SideNav.module.css";
import { FiArrowRight, FiArrowLeft, FiHome } from "react-icons/fi";
import {} from "react-icons/";
import NavLink from "./NavLink";
const SideNavbar = () => {
  const [toggle, setToggle] = useState(false);
  const [active, setactive] = useState(false);

  return (
    <Flex
      w={toggle ? "15%" : "5%"}
      flexDir="column"
      alignItems="center"
      backgroundColor="#1A202C"
      color="#fff"
      display={["none", "none", "none", "flex"]}
    >
      <Flex flexDir="column" as="nav">
        <Link
          href="/"
          mt={3}
          mx="auto"
          outline="none"
          _hover={{ textDecor: "none" }}
        >
          <Flex justifyContent="space-between">
            {/* <Image src="/logo.png" alt="" height={40} width={40} /> */}

            {toggle ? (
              <Heading
                fontSize={["2xl"]}
                alignSelf="center"
                letterSpacing="tight"
                mx={2}
                outline="none"
              >
                InvestDex
              </Heading>
            ) : (
              <></>
            )}
          </Flex>
        </Link>
        <Flex pos="relative">
          <IconButton
            aria-label="show"
            icon={toggle ? <FiArrowLeft /> : <FiArrowRight />}
            backgroundColor="#1A202C"
            onClick={() => {
              setToggle(!toggle);
            }}
            className="toggle_button"
            pos="absolute"
            h="2rem"
            w="2rem"
            left={toggle ? "80%" : "80%"}
          />
        </Flex>

        <Flex
          flexDir="column"
          align={toggle ? "left" : "center"}
          justifyContent={toggle ? "flex-start" : "center"}
        >
          {/* <NavLink
            icon={
              <Image
                src="/icons8-home-24.png"
                alt="icon"
                height={30}
                width={30}
              />
            }
            header="home"
            toggle={toggle}
          />

          <NavLink
            icon={<Image src="/IconC.png" alt="icon" height={25} width={25} />}
            header="New Settings"
            toggle={toggle}
          />
          <NavLink
            icon={
              <Image src="/explore.png" alt="icon" height={25} width={25} />
            }
            header="Pair Explorer"
            toggle={toggle}
          />
          <NavLink
            icon={<Image src="/charts.png" alt="icon" height={25} width={25} />}
            header="Multi Charts"
            toggle={toggle}
            active={active}
            onClick={() => setactive(!active)}
          /> */}
          {/* {} */}
          <Flex
            justifyContent=""
            mt={3}
            alignSelf={toggle ? "flex-start" : "center"}
            textAlign="center"
            _hover={{ cursor: "pointer" }}
            color={active ? "green" : "#ff"}
            onClick={() => setactive(!active)}
          >
            {/* <Image src="/workS.png" alt="icon" height={25} width={25} /> */}
            {toggle ? (
              <Text
                fontSize={["md"]}
                alignSelf="center"
                letterSpacing="tight"
                mx={2}
              >
                Work Station
              </Text>
            ) : (
              <></>
            )}
          </Flex>
          {/* <NavLink
            icon={<Image src="/whale.png" alt="icon" height={25} width={25} />}
            header="Whale Watcher"
            toggle={toggle}
          />
          <NavLink
            icon={<Image src="/bot.png" alt="icon" height={25} width={25} />}
            header="Price Bot"
            toggle={toggle}
          />
          <NavLink
            icon={
              <Image src="/pair_bots.png" alt="icon" height={25} width={25} />
            }
            header="New Pair Bots"
            toggle={toggle}
          /> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideNavbar;
