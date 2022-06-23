import {
  Avatar,
  Box,
  Divider,
  Flex,
  Grid,
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
import Project from "./Project";

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
      <Grid
        display={["flex", "flex", "grid"]}
        overflow={["auto", null]}
        my={5}
        templateColumns="repeat(3, 3fr)"
        gap={6}
      >
        <Project
          text="  Matt ⬣ Adoption, UX, and Outreach is all that matters 🚀 non-giver of
        financial advice ⬣ Matt ⬣ Adoption, UX, and Outreach is all that matters
        🚀 non-giver of financial advice ⬣"
        />
        <Project
          text="  Matt ⬣ Adoption, UX, and Outreach is all that matters 🚀 non-giver of
        financial advice ⬣ Matt ⬣ Adoption, UX, and Outreach is all that matters
        🚀 non-giver of financial advice ⬣    Matt ⬣ Adoption, UX, and Outreach is all that matters 🚀 non-giver of
        financial advice ⬣ Matt ⬣ Adoption, UX, and Outreach is all that matters
        🚀 non-giver of financial advice ⬣"
        />
        <Project
          text="  Matt ⬣ Adoption, UX, and Outreach is all that matters 🚀 non-giver of
        financial advice ⬣ Matt ⬣ Adoption, UX, and Outreach is all that matters
        🚀 non-giver of financial advice ⬣"
        />
        <Project
          text="  Matt ⬣ Adoption, UX, and Outreach is all that matters 🚀 non-giver of
        financial advice ⬣ Matt ⬣ Adoption, UX, and Outreach is all that matters
        🚀 non-giver of financial advice ⬣"
        />
        <Project
          text="  Matt ⬣ Adoption, UX, and Outreach is all that matters 🚀 non-giver of
        financial advice ⬣ Matt ⬣ Adoption, UX, and Outreach is all that matters
        🚀 non-giver of financial advice ⬣"
        />
        <Project
          text="  Matt ⬣ Adoption, UX, and Outreach is all that matters 🚀 non-giver of
        financial advice ⬣ Matt ⬣ Adoption, UX, and Outreach is all that matters
        🚀 non-giver of financial advice ⬣"
        />
      </Grid>
    </Flex>
  );
};

export default ProjectSpotlight;
