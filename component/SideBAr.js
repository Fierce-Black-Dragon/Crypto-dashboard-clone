import React from 'react'
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
import {
    FiHome,
    FiPieChart,
    FiDollarSign,
    FiBox,
    FiCalendar,
    FiChevronDown,
    FiChevronUp,
    FiPlus,
    FiCreditCard,
    FiSearch,
  FiArrowRight,
  FiArrowLeft,

    FiBell
} from "react-icons/fi"
import { useState } from "react";
import Image from "next/image";
import Dashboard from './../pages/dashboard';;
import { BsShopWindow, BsUmbrella, BsWallet, BsWindowDock } from "react-icons/bs";
import { GiSpermWhale, GiCrownedExplosion,GiHamburgerMenu, BiRightArrowAlt, GiCardboardBoxClosed } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import NavLink from './NavLink';
import { SiAbbrobotstudio, SiRobotframework } from "react-icons/si";
import { AiFillRobot, AiOutlineRadarChart } from "react-icons/ai";

const SideNavbar = ({display, changeDisplay}) => {
  const [toggle, setToggle] = useState(false);
  const [active, setActive] = useState(0);
 ;
  let optionList = [
    {
      id: 0,
      name: "DashBoard",

      icon: <FiHome />,
    },

    {
      id: 1,
      name: "New Listing",

      icon: <BsWindowDock />,
    },
    {
      id: 2,
      name: "Plain Explorer",

      icon: <GiCrownedExplosion />,
    },
    {
      id: 3,
      name: "MultiCharts",

      icon: <AiOutlineRadarChart />,
    },

    {
      id: 4,
      name: "Markets",

      icon: <BsShopWindow />,
      more: ["top Token"],
    },
    {
      id: 5,
      name: "Workstation",

      icon: <SiRobotframework />,
      more: ["portfolio", "favourites", "alerts"],
    },
    {
      id: 6,
      name: "risk Management",

      icon: <BsUmbrella />,
    },
    ,
    {
      id: 7,
      name: "Whale Watcher",

      icon: <GiSpermWhale />,
    },
    {
      id: 8,
      name: "Price Bot",

      icon: <AiFillRobot />,
    },
    {
      id: 9,
      name: "New Pair Bots",

      icon: <SiAbbrobotstudio />,
    },
  ];
  return (
    <Flex
      w={toggle && !display ? "100%" : "50%"}
      minW={toggle ? "15vh" : "50%"}
      flexDir="column"
      alignItems="center"
      backgroundColor={display ? "black" : "#1A202C"}
      color="#fff"
      pos={[`${display ? "fixed" : ""}`, "relative"]}
      h={display ? "100%" : ""}
      z-index={display ? 100 : ""}
      display={[
        ` ${display ? "flex" : "none"}`,
        ` ${display ? "flex" : "none"}`,
        ` ${display ? "flex" : "none"}`,
        "flex",
      ]}
    >
      <Flex flexDir="column" as="nav" mx="auto">
        <Link
          href="/"
          mt={5}
          mx="auto"
          outline="none"
          _hover={{ textDecor: "none" }}
        >
          <Flex justifyContent="space-between">
            <Image src="/logo.png" alt="" height={40} width={40} px={2} />

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
        {!display ? (
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
        ) : (
          <Flex pos="relative">
            <IconButton
              aria-label="show"
              icon={display ? <GrClose /> : <GiHamburgerMenu />}
              backgroundColor="#1A202C"
              onClick={() => {
                changeDisplay(!display);
              }}
              className="toggle_button"
              pos="absolute"
              h="2rem"
              w="2rem"
              left={display ? "90%" : "80%"}
            />
          </Flex>
        )}

        <Flex
          flexDir="column"
          align={toggle ? "left" : "center"}
          justifyContent={toggle ? "flex-start" : "center"}
          px={2}
          mt={2}
        >
          {optionList?.map((op) => {
            return (
              <NavLink
                key={op.id}
                id={op.id}
                icon={op.icon}
                header={op.name}
                active={active}
                toggle={toggle}
                more={op.more}
                onClick={() => {
                  if (active === op.id) {
                    setActive(0);
                  } else {
                    setActive(op.id);
                  }
                }}
              />
            );
          })}

          <Divider mt={"150%"} />
          <Flex alignItems="center" pos={"relative"} >
            <Avatar size="sm" src="avatar-1.jpg" mx="auto" pos={"fixed"} bottom="2%" left={
              toggle?"4%":"1%"
            } />
            
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SideNavbar;
