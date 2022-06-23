import React, { useState } from "react";
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
  Stack,
  InputLeftAddon,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { SiRobotframework } from "react-icons/si";

import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";
import SideNavbar from "../component/SideNavbar";
import WorkStation from "../component/WorkStation";
import ProjectSpotlight from "../component/ProjectSpotlight";

export default function Dashboard() {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState(1);
  return (
    <Flex
      h={[null, null, "100vh"]}
      minW="100%"
      flexDir={["column", "column", "column", "row"]}
      overflow="hidden"
      bgColor="rgba(0, 0, 0, 0.92)"
    >
      {/* Column 1 */}
      <SideNavbar />
      {/* main body */}
      <Flex
        w={["100%", , "100%", "200vh"]}
        p="3%"
        flexDir="column"
        mx={["auto", "1px"]}
        overflow="auto"
        minH="100vh"
      >
        {/* search  */}
        <Flex
          justifyContent="space-between"
          alignItems="center"
          alignContent="center"
        >
          <Heading fontWeight="bold" letterSpacing="tight" mr={["none", 4]}>
            InvestSuite
          </Heading>
          <Flex
            bgColor="gray.800"
            h={14}
            p={1}
            borderRadius={14}
            display={["none", "flex"]}
          >
            <Stack
              spacing={4}
              borderRadius={50}
              border="1px solid  "
              borderColor="gold"
              borderTopLeftColor="gold"
              borderTopEndColor="black"
              borderRightColor="black"
              borderBlockEndColor="black"
              // borderBlockStartColor="black"
              minW={["90vh", "60vh", "60vh"]}
            >
              <InputGroup justifyContent="flex-start" alignItems="center">
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
          templateColumns={[
            "5fr",
            "repeat(2,3fr)",
            "repeat(3, 3fr)",
            "repeat(3, 4fr)",
          ]}
          gap={4}
          mt={4}
          // w="100%"
        >
          <WorkStation />
          <WorkStation />
          <WorkStation />
        </Grid>

        {/* projects */}

        <ProjectSpotlight />
      </Flex>
      <Grid
        minH="100vh"
        w={["100%", "40vh"]}
        bgColor="gray.800"
        templateColumns={["5fr"]}
        gap={1}
        overflow="auto"
      >
        {" "}
        dsd
      </Grid>
    </Flex>
  );
}
