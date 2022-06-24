import { Flex, Heading, Grid, Text, Button, Badge } from "@chakra-ui/react";

import { GiSpeedometer } from "react-icons/gi";
import Image from "next/image";

import TrendingList from "../component/TrendingList";
import { FaRocket } from "react-icons/fa";
import { GoPrimitiveDot } from "react-icons/go";

const EndSECtion = () => {
  return (
    <Grid
      minH={["100%", "100vh"]}
     w={["100%", "100%", "10%", "100%"]}
    
 
      bgColor="#22222f"
      templateColumns={["5fr"]}
      gap={1}
      flexDir="column"
      overflow="auto"
      scrollSnapType={"none"}
    >
      <Flex flexDir={"column"} w="100%" mw={["100%"]}>
        <Flex
          display={["flex", "flex", "flex", "none"]}
  
        >
          <Flex>
            <Text
              display="flex"
              alignItems="center"
        
            >
              <FaRocket color="lightBLue" style={{ marginRight: "2%" }} />
              {"   "}
              Trending
            </Text>
          </Flex>
          <Button marginLeft={["70%","80%"]}>Show all</Button>
        </Flex>
        <Flex
          display={["none", "none", "none", "flex"]}
          mx="auto"
          my={4}
          h={["60vh", "50vh"]}
          w={["50%", "100%"]}
          flexDir="column"
        >
          <Flex  alignItems="center" ml="2%">
            <Button
              w={100}
              borderRadius={50}
              h={5}
              variant="outline"
              fontSize={"12px"}
              alignItems="center"
              rightIcon={<GoPrimitiveDot color="green" />}
            >
              {" "}
              Whats New
            </Button>

            <Button
              w={100}
              borderRadius={50}
              h={5}
              ml={4}
              variant="outline"
              fontSize={"12px"}
              alignItems="center"
              rightIcon={<GiSpeedometer color="green" />}
            >
              {" "}
              24 GWei
            </Button>
            <Text ml={4}>ETH: $1149.6</Text>
          </Flex>

          <Flex
            flexDir="column"
           mr="20%"
            my={8}
            alignSelf="center"
            pos="relative"
            height="50vh"
            w="40vh"
            justifyContent="center"
          >
            <Flex
         
              alignItems="center"
              pos={"absolute"}
              left="45%"
              top="-6%"
              mx="auto"
              height={45}
              width={45}
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
              flexDir="column"
              bgGradient={
                "linear-gradient(180deg,rgba(126,104,255,.4),rgba(126,104,255,0) 70.37%)"
              }
              borderRadius={15}
              w="70vh"
              height="50vh"
              alignItems="center"
              my="auto"
      
              width="100%"
            >
              <Heading fontSize={"lg"} mt={10}>
                {" "}
                #1
              </Heading>
              <Heading
                fontSize="14px"
                fontWeight="600"
                color="rgb(144, 148, 161)"
              >
                {" "}
                BEST PAIR TODAY IS {"  "}
                <Text
                  display="inline"
                  fontSize="12 px"
                  color="#fff"
                  fontWeight={"bold"}
                >
                  {"  "} Luna Inu
                </Text>
              </Heading>
              <Heading color="rgb(126, 104, 255)">$0.0..0096</Heading>
              <Text color="green.200">151.3%</Text>
              <Text fontSize={"smaller"} color="gray.100">
                24 Jun 2022 at 1:23 PM
              </Text>
            </Flex>
          </Flex>
        </Flex>
        <TrendingList />
      </Flex>
    </Grid>
  );
};

export default EndSECtion;
