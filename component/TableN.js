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
import React from "react";

const TableN = () => {
  const data = [
    { no: 2, name: "Muse", cur: "WETH", price: 98.39 },
    { no: 3, name: "Muse", cur: "WETH", price: 98.39 },

    { no: 4, name: "Muse", cur: "WETH", price: 98.39 },

    { no: 5, name: "Muse", cur: "WETH", price: 98.39 },
    { no: 6, name: "Muse", cur: "WETH", price: 98.39 },
    { no: 7, name: "Muse", cur: "WETH", price: 98.39 },

    { no: 8, name: "Muse", cur: "WETH", price: 98.39 },

    { no: 9, name: "Muse", cur: "WETH", price: 98.39 },
    { no: 10, name: "Muse", cur: "WETH", price: 98.39 },
    { no: 11, name: "Muse", cur: "WETH", price: 98.39 },

    { no: 12, name: "Muse", cur: "WETH", price: 98.39 },

    { no: 13, name: "Muse", cur: "WETH", price: 98.39 },
  ];

  return (
    <Flex flexDir="column">
      <div>
        {data?.map((ele) => {
          return (
            <div key={ele.no}>
              <Flex flexDir="column" h={10} py={2} bgColor={"#2d3136"}>
                <Grid
                  templateColumns=" 1fr 2fr 2fr"
                  textAlign="flex-start"
                  px={2}
                >
                  {" "}
                  <Text>{ele.no}</Text>
                  <Heading fontSize={"lg"}>
                    {ele.name} /
                    <Text display="inline" fontSize="small" color="gray.200">
                      {ele.cur}{" "}
                    </Text>
                  </Heading>
                  <Text>{ele.price}</Text>
                </Grid>{" "}
              </Flex>
              <hr
                style={{
                  background: "white",
                  height: "2px",

                  width: "100%",
                }}
              />
            </div>
          );
        })}
      </div>
    </Flex>
  );
};

export default TableN;
