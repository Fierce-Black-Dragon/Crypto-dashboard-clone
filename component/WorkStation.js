import { Button, Heading, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { SiRobotframework } from "react-icons/si";

import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
const WorkStation = () => {
  return (
    <Grid
      h={["100%"]}
      minH="100%"
      w={["50%", "50%", "70%", "39vh"]}
      bgColor="gray.800"
      ml={["2%", ""]}
      mx={["", "auto", "auto", "0"]}
      templateColumns={["5fr"]}
      gap={1}
      borderRadius={15}
    >
      <Flex
        flexDir="column"
        w={["90%", "80%"]}
        h={["60", "60", "60", "70%"]}
        mx="auto"
        my={3}
        bgGradient="linear-gradient(180deg,#5d45ee,rgba(34,34,47,0))"
        borderRadius={25}
      >
        <Flex
          justifycontent={"center"}
          alignItems="center"
          mx="auto"
          my={[2, 5]}
          height={[150, 150, 150, 205]}
          width={[150, 150, 150, 205]}
        >
          <Image src="/WorkStation.png" width={205} height={205} alt="" />
        </Flex>

        <Flex
          justifyContent="center"
          alignItems="center"
          color="rgb(126, 104, 255)"
        >
          <Text mx="2%">
            {" "}
            <SiRobotframework />
          </Text>
          <Text mr="1%"> Workstation</Text>
        </Flex>

        <Flex justifyContent="center" alignItems="center">
          <Heading fontSize={"xl"}> Check your workstation</Heading>
        </Flex>
      </Flex>
      <Button
        rightIcon={<AiOutlineArrowRight />}
        w="90%"
        mx="auto"
        color="rgb(126, 104, 255)"
        variant="outline"
        bgColor="rgba(175, 161, 255, 0.1)"
        _hover={{
          background: "rgba(175, 161, 255, 0.1)",
        }}
      >
        COMPLETE TASK
      </Button>
      <Button
        rightIcon={<AiOutlineArrowRight />}
        leftIcon={<AiOutlineCalendar />}
        w={["50%", "80%"]}
        mx="auto"
        my={["4%", "4%", "4%", 0]}
        fontSize="sm"
        color="whiteAlpha.900"
        variant="outline"
        borderColor="purple"
        colorScheme="purple"
        _hover={{}}
        alignItems="center"
      >
        Events{" "}
        <Text
          display={"inline"}
          my="auto"
          color="rgb(126, 104, 255)"
          ml="5%"
          fontSize="smaller"
        >
          28 upcoming events
        </Text>
      </Button>
    </Grid>
  );
};

export default WorkStation;
