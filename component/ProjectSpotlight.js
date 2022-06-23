import {
  Avatar,
  Box,
  Divider,
  Flex,
  Heading,
  IconButton,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";
import { FiCalendar, FiChevronsDown, FiChevronsUp } from "react-icons/fi";

const ProjectSpotlight = () => {
  const [display, changeDisplay] = useState("hide");
  const [value, changeValue] = useState(1);
  return (
    <Flex flexDir="column" w="100%">
      <Heading justifyContent="space-evenly" fontSize="xl" mt={4}>
        {" "}
        Spotlight{" "}
        <Text display="inline" fontSize="sm" fontWeight="normal">
          9 Projects
        </Text>
      </Heading>
    </Flex>
  );
};

export default ProjectSpotlight;
