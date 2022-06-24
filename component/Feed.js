import {
  Button,
  Heading,
  Flex,
  Grid,
  Box,
  Text,
  Stack,
  Icon,
  Link,
  Tag,
  TagRightIcon,
  TagLeftIcon,
} from "@chakra-ui/react";
import Image from "next/image";
import { IoNewspaperOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { AiOutlineArrowRight, AiOutlineCalendar } from "react-icons/ai";
import { BsCalendarWeek, BsLink45Deg } from "react-icons/bs";
function Feature({ title, desc, active, ...rest }) {
  return (
    <Box
      p={5}
      minW="35vh"
      minh={["4vh","7vh"]}
      shadow="md"
      borderWidth="1px"
      borderRadius={35}
      overflow="auto"
      my={2}
      bgColor="#111118"
      {...rest}
    >
      <Heading
        fontSize="16px"
        display={"flex"}
        justifycotent="flex-start"
        color={"green.300"}
      >
        {" "}
        {active ? (
          <Icon
            as={FaCircle}
            fontSize="6px"
            fontWeight="normarl"
            mr="2%"
            my="auto"
          />
        ) : (
          ""
        )}{" "}
        {title}
      </Heading>
      <Text mt={4} fontSize="12px">
        {desc}
      </Text>
      <Flex justify="space-between" my={3} align="center">
        <Tag
          size={"sm"}
          variant="outline"
          colorScheme="yellow"
          w={[150, 150, 150, 150]}
          borderRadius={15}
        >
          <TagLeftIcon boxSize="12px" as={BsLink45Deg} />
          <Link>NewsBTC</Link>
        </Tag>
        <Tag
          size={"sm"}
          variant="ghost"
          colorScheme="blackAlpha"
          color="white.100"
          w={150}
          ml="20%"
        >
          <Text> an hour ago</Text>
          <TagRightIcon boxSize="12px" as={BsCalendarWeek} />
        </Tag>
      </Flex>
    </Box>
  );
}
const Feed = () => {
  const nos = [1, 2, 3, 4, 5, 9, 4, 7, 5];
  return (
    <Flex

         w={["60%", "50%", "70%", "39vh"]}
      bgColor="gray.800"
    ml={["2%", ""]}
      mx={["", "auto", "auto", "0"]}
      h={["30vh", "40vh", "40vh", "60vh"]}
     
      borderRadius={15}
    >
      <Flex
        w={["80vh", "80vh", "80vh", "40vh"]}
        bgColor="gray.800"
        flexDir={["row", "row", "row", "column"]}
        overflow={"auto"}
        gap={1}
      >
        <Feature
          active
          title="Plan Money"
          desc="The future can be even brighter but a goal without a plan is just a wish"
        />
        {nos?.map(() => {
          return (
            <>
              <Feature
                title="
Price analysis 6/24: BTC, ETH, BNB, XRP, ADA, SOL, DOGE, DOT, SHIB, LEO"
                desc="BEWARE IMPOSTERS! Crypto is awesome and everyone should know about it! I'm making it my job to spread the exciting news about the best cryptocurrencies out there."
              />
            </>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default Feed;
