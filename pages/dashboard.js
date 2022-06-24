import React, { useState } from "react";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  Stack,
  InputLeftAddon,
  Grid,
  Button,
  Text,
  IconButton,
} from "@chakra-ui/react";

import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { BsSearch } from "react-icons/bs";

import WorkStation from "../component/WorkStation";
import ProjectSpotlight from "../component/ProjectSpotlight";

import EndSECtion from "../component/EndSEction";
import Options from "../component/Options";
import Feed from "../component/Feed";
import SideBAr from "../component/SideBAr";
export default function Dashboard() {
  const [display, changeDisplay] = useState(false);
  const [search, changeSearch] = useState(false);

  return (
    <Grid
      templateColumns={["100%", "100%", "100%", "10% 65% 35%"]}
      gap={1}
      minW="100%"
      overflow="hidden"
      bgColor="rgba(0, 0, 0, 0.92)"
      z-index={0}
    >
      {/* Column 1 */}
      <SideBAr display={display} changeDisplay={changeDisplay} />
      {/* {mobile nav bar} */}
      <Flex
        display={["flex", "flex", "flex", "none"]}
        mt={5}
        alig="center "
        justify="space-evenly"
      >
        <Flex justifyContent="space-between">
          <Button
            onClick={() => {
              changeDisplay(!display);
            }}
          >
            <GiHamburgerMenu />
          </Button>
          <Image src="/logo.png" alt="" height={15} width={20} px={2} />

          <Text
            fontSize={["lg"]}
            alignSelf="center"
            letterSpacing="tight"
            mx={2}
            outline="none"
          >
            InvestDex
          </Text>
        </Flex>

        <Text mt={2} fontSize="smaller">
          {" "}
          24 GWei ETH: $1149.6
        </Text>
        <Flex
          onClick={() => {
            changeSearch(!search);
          }}
        >
          {" "}
          <IconButton
            aria-label="Search database"
            icon={<BsSearch color="gold" />}
          />
        </Flex>
      </Flex>
      {/* main body */}
      <Flex
        w={["100%", , "100%", "99%"]}
        p="3%"
        flexDir="column"
        mx={["auto", "1px"]}
        minW="70%"
        overflow="auto"
        scrollSnapType={"none"}
        justifycontnet="flex-start"
        minH="100vh"
      >
        {/* search  */}

        <Flex
          // justifyContent="space-between"
          alignItems="center"
          alignContent="center"
          display={["none", "none", "none", "flex"]}
        >
          <Heading fontWeight="bold" letterSpacing="tight" mr={["none", 4]}>
            InvestSuite
          </Heading>
          <Flex
            bgColor="gray.800"
            h={14}
            p={1}
            borderRadius={14}
            display={[
              `${!search ? "none" : ""}`,
              `${!search ? "none" : ""}`,
              `${!search ? "none" : ""}`,
              `${!search ? "none" : ""}`,
              "flex",
            ]}
          >
            <Stack
              spacing={4}
              borderRadius={50}
              border="1px solid  "
              borderColor="gold"
              // borderTopLeftColor="gold"
              // borderTopEndColor="black"
              borderRightColor="black"
              borderBlockEndColor="black"
              // borderBlockStartColor="black"
              minW={["90vh", "60vh", "60vh"]}
            >
              <InputGroup
                //  justifyContent="flex-start"
                alignItems="center"
              >
                <InputLeftAddon pointerEvents="none" background="transparent">
                  <BsSearch color="gold" />
                </InputLeftAddon>
                <Input
                  type="text"
                  placeholder="Search pair by symbol / name / pair contract"
                  variant="unstyled"
                  borderRadius={50}
                  maxW="100%"
                />
              </InputGroup>
            </Stack>
          </Flex>
        </Flex>

        {/* {option} */}

        <Grid
          templateColumns={["5fr", "5fr", "5fr", "repeat(3, 4fr)"]}
          gap={4}
          mt={4}
          // w="100%"
        >
          <WorkStation />
          <Options />

      
            <Feed />
   
        </Grid>

        {/* projects */}

        <ProjectSpotlight />
      </Flex>

      {/* list  */}
      <EndSECtion />
    </Grid>
  );
}
