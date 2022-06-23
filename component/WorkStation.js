import { Button, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SiRobotframework } from "react-icons/si";

import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
const WorkStation = () => {
  return (
    <Grid
      h={["60vh", "50vh"]}
      w={["50%", "40vh"]}
      bgColor="gray.800"
      templateColumns={["5fr"]}
      gap={1}
      borderRadius={15}
    ></Grid>
  );
};

export default WorkStation;
