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
import React from "react";

const TableN = () => {
  return (
    <Table variant="unstyled" mt={4} minW={["100%", "40vh"]} overflow="hidden">
      <Thead>
        <Tr color="gray">
          <Th>#</Th>
          <Th>Name </Th>
          <Th>Price Change</Th>
        </Tr>
      </Thead>
      <Divider />
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
  );
};

export default TableN;
