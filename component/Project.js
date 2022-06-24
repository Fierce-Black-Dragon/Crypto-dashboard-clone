import {
  Avatar,
  Badge,
  Box,
  Center,
  Flex,
  HStack,
  Link,
  Tag,
  TagLabel,
  TagLeftIcon,
  Text,
} from "@chakra-ui/react";
import { TiSocialTwitter, TiSocialYoutube, TiHome } from "react-icons/ti";
import { FiPhoneIncoming } from "react-icons/fi";
import { SiGooglestreetview, GrView } from "react-icons/si";

const Project = ({ text }) => {
  return (
    <Flex
      flexDir="column"
      p={[2, 2, 6]}
      w={["25vh"]}
      minWidth={"35vh"}
 bgColor="#22222F"
      postion="realtive"
      overflowX={["scroll", null]}
      overflowY={"scroll"}
      color="white"
      h={200}
      borderRadius={50}
    >
      <Flex ml="3">
        <Avatar src="/755903383c2a746c7ff170b0c9ad2ff1.png" my={2} />

        <Flex flexDir="column">
          <Text fontWeight="bold" ml={5}>
       Crypto Coffee
          </Text>
          <HStack ml={["50%"]} mx="auto">
            <Center w="20px" h="20px" color="white">
              <TiHome color="black" />
            </Center>
            <Center w="20px" h="20px" color="white">
              <Box as="span" fontWeight="bold" fontSize="lg">
                <TiSocialYoutube color="black" />
              </Box>
            </Center>{" "}
            <Center w="20px" h="20px" color="white">
              <Box as="span" fontWeight="bold" fontSize="lg">
                <TiSocialTwitter color="black" />
              </Box>
            </Center>
          </HStack>
        </Flex>
      </Flex>

      <Link
        textDecoration={"none"}
        href="/dashboard"
        _hover={{ textDecoration: "none" }}
      >
        <Tag
          my={1}
          size={"sm"}
          key={"sm"}
          w={85}
          borderRadius="full"
          variant="solid"
          color="#798DFF"
          bgColor="#7285f32e"
        >
          {" "}
          <TagLeftIcon boxSize="12px" as={GrView} />
          <TagLabel mr="2">Details {"  "}</TagLabel>
        </Tag>
      </Link>
      <Text fontSize={"10px"} textAlign={"left"}>
        {text}
      </Text>
    </Flex>
  );
};

export default Project;
