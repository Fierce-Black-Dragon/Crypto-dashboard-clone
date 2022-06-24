import { Button, Heading, Flex, Grid, Text ,Divider} from "@chakra-ui/react";
import Image from "next/image";
import { SiRobotframework } from "react-icons/si";
import { IoIosAppstore } from "react-icons/io";
import SelectBtn from "./SelectBtn";
import { IconButton } from '@chakra-ui/react'

import { BsShopWindow, BsWallet, BsWindowDock } from "react-icons/bs";
import { GiSpermWhale,GiCrownedExplosion,BiRightArrowAlt } from "react-icons/gi";

const Options = () => {
   let optionList = [
     {
       id: 0,
       name: "Plain Explorer",
       subText: "Search and research Token",
       icon: <GiCrownedExplosion />,
       color: "blue",
     },
     {
       id: 1,
       name: "Markets",
       subText: "DEXMarkets",
       icon: <BsShopWindow />,
       color: "purple",
     },
     {
       id: 2,
       name: "New Listing",
       subText: "New Listed Pairs on Etg",
       icon: <BsWindowDock />,
       color: "blue",
     },
     {
       id: 3,
       name: "Whale Watcher",
       subText: "Whales",
       icon: <GiSpermWhale />,
       color: "purple",
     },
     {
       id: 4,
       name: "Wallet Tacker",
       subText: "Track Your Wallet",
       icon: <BsWallet />,
       color: "cryan",
     },
   ];
  return (
    <Grid
      h={["60vh"]}
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
        w="90%"
        h="95%"
        mx="auto"
        my="auto"
      
        borderRadius={25}
      >
        <SelectBtn />
              {optionList?.map(op => {
                  
                  return (
                    <div key={op.id}>
                        <Flex justifycontent="space-between"  my={3}>
                      <IconButton
                        aria-label={op.name}
                        colorScheme={op.color}
                        color="white"
                        icon={op.icon}
                      />

                      <Flex flexDir="column" width="100%" ml="2%">
                        <Text color="white">{op.name}</Text>
                        <Text fontSize="10px" color="lightgary">
                         {op.subText}
                        </Text>
                      </Flex>
                <Text>  {">"} </Text>
                    </Flex>
                    <Divider/>
                        </div>
                  );
              })
}
      </Flex>
    </Grid>
  );
};

export default Options;
