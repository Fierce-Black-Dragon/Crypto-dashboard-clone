import {
  Avatar,
  Button,
  Divider,
  Flex,
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
    <Flex flexDir={"column"} w="100%" mW={["60vh"]}>
      <Flex>
        <Button>Show all</Button>
      </Flex>
      <Tabs bgColor="black">
        <TabList overflowX="auto">
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

        <TabPanels h="max-content">
          <Flex
            my={4}
            justifyContent="space-between"
            mt={4}
            display={["flex", "none"]}
          >
            <Image
              src="/download.png"
              width={45}
              height={45}
              alt=""
              style={{ zIndex: 10 }}
            />
            <Flex
              width={"70%"}
              minW="max-content"
              alignSelf="flex-start"
              justifyContent={"space-betwwen"}
              textAlign="center"
              alignItems={"center"}
              bg="blue.500"
              borderRadius={15}
              mr={5}
            >
              <Flex
                justifyContent="space-evenly"
                textAlign="center"
                alignItems="center"
                p={2}
              >
                <Text ml={4} fontWeight="extrabold" fontSize="2xl">
                  #1{" "}
                </Text>
                <Text ml={2}>USDT</Text>
              </Flex>
              <Text ml="70%" paddingRight={"14px"}>
                $1.097
              </Text>
            </Flex>
          </Flex>
          <Table>
            <Thead>
              <Tr color="gray">
                <Th>#</Th>
                <Th>Name </Th>
                <Th>Price Change</Th>
              </Tr>
            </Thead>
          </Table>

          <Divider />
          <TabPanel>
            <Table>
              <Tbody>
                <Tr color="gray">
                  <Td>1</Td>
                  <Td>USDC / TUSD</Td>
                  <Td>
                    <></>2.19%
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </Tabs>
    </Flex>
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
