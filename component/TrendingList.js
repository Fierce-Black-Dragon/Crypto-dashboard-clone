import {
  Avatar,
  Button,
  Divider,
  Flex,
  Grid,
  Heading,
  Tab,
  Table,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import Image from "next/image";
import {
  FaBitcoin,
  FaDrawPolygon,
  FaEmpire,
  FaEthereum,
  FaFantasyFlightGames,
  FaGg,
  FaPhoenixSquadron,
  FaStrava,
} from "react-icons/fa";
import TableN from "./TableN";

const TrendingList = () => {
  return (
    <Tabs bgColor="#22222f" maxH={["50vh"]} minW="90%" overflowX="none">
      <TabList overflowX="scroll" w={["100%", "100%", "70vh"]}>
        <Tab fontSize="small" w={"fit-content"}>
          {" "}
          <FaEthereum />
          Ethereum
        </Tab>
        <Tab fontSize="small" w={"fit-content"}>
          <FaBitcoin />
          <p> BNB Chain</p>
        </Tab>
        <Tab fontSize="small" w={"fit-content"}>
          {" "}
          <FaGg />
          Polygon
        </Tab>
        <Tab fontSize="small" w={"fit-content"}>
          {" "}
          <FaStrava />
          Avalanche
        </Tab>
        <Tab fontSize="small" w={"fit-content"}>
          {" "}
          <FaFantasyFlightGames />
          Fantom
        </Tab>
        <Tab fontSize="small" w={"fit-content"}>
          {" "}
          <FaEmpire />
          Cronos
        </Tab>
        <Tab fontSize="small" w={"fit-content"}>
          {" "}
          <FaPhoenixSquadron />
          Syscoin
        </Tab>
      </TabList>
      <Flex
        my={4}
       
        display={["flex", "none"]}
        position={"relative"}
        alignItems="center"
       
      >
        <Flex
          // justifyContent={"center"}
          alignItems="center"
          pos={"absolute"}
          left="5%"
          height={35}
          width={35}
          ml="1%"
        >
          <Image
            src="/download.png"
            width={205}
            height={205}
            alt=""
            style={{ zIndex: 10 }}
          />
        </Flex>
        <Flex
          width={"55%"}
          h="29%"
          minW={"max-content"}
          alignSelf="flex-start"
 
          textAlign="center"
          alignItems={"center"}
          bg="rgba(126,104,255,.4)"
          ml="10%"
          borderRadius={15}
        >
          <Flex
            // justifyContent="space-evenly"
            textAlign="center"
            alignItems="center"
            p={2}
          >
            <Text ml={4} fontWeight="extrabold" fontSize="2xl">
              #1{" "}
            </Text>
            <Text ml={2}>USDT</Text>
          </Flex>
       
          <Text   ml="50%" color="rgb(126, 104, 255)" fontSize="20px" >$0.0..0096</Text>
        </Flex>
      </Flex>
      <Grid templateColumns=" 1fr 2fr 2fr" height={3} p={2}>

        <Text>#</Text>
        <Text>Name</Text>
        <Text>Price</Text>
      </Grid>
      <Divider mt={4} style={{ height: "2px" }} bgColor="whiteAlpha.100" />
      <TabPanels h="max-content" minH={["50vh"]} minW="100%" overflowY="auto">
        <TabPanel overflow={"auto"}>
          <TableN />
        </TabPanel>
        <TabPanel>
          <TableN />
        </TabPanel>
        <TabPanel>
          <TableN />
        </TabPanel>
        <TabPanel>
          <TableN />
        </TabPanel>
        <TabPanel>
          <TableN />
        </TabPanel>
        <TabPanel>
          <TableN />
        </TabPanel>
        <TabPanel>
          <TableN />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TrendingList;
{
  /** Name

Price Change (24h)

2

MUSE

/ WETH

up icon
45.49%

dex
3

JUP

/ WETH

up icon
37.18%

dex
4

MONA

/ WETH

up icon
36.01%

dex
5

Ban...dex

/ WETH

up icon
35.38%

dex
6

RND

/ WETH

up icon
31.94%

dex
7

WETH

/ RLY

up icon
31.77%

dex
8

RARE

/ WETH

up icon
30.67%

dex
9

BOBA

/ WETH

up icon
27.22%

dex
10

EFI

/ USDT

up icon
26.15%

dex
 */
}
