import { Button, Heading, Flex, Grid, Text } from "@chakra-ui/react";
import Image from "next/image";
import { FaEthereum } from "react-icons/fa";
import { IoIosArrowDropdown,IoIosArrowDropup } from "react-icons/io";
import { useState } from 'react';
const SelectBtn = () => {
    const [open, setOpen] = useState(false)
    const [value, setValue] = useState(1)
    const options = [{
        id: 0,
        icon: <FaEthereum />,
        name: "Ethereum",
        boxShadow:""
        
    },
{
        id: 1,
        icon: <FaEthereum />,
        name: "bnb",
        boxShadow:""
        
    }]
    const Selected = options.find(v => v.id === value) 

  return (
    <Flex flexDir="column">
      <Button
        leftIcon={Selected.icon}
        w={["100%","100%"]}
        display={"flex"}
        variant="outline"
        colorScheme="blackAlpha"
        borderColor="blackAlpha"
        justifycontent="space-evenly"
        color="#fff"
        _hover={{ background: "transparent" }}
        onClick={() => setOpen(!open)}
      >
        <Text> Ehtereum</Text>
        <Flex
          colorScheme="whiteAlpha"
          color="#fff"
          justifycontent="center"
          alignItems="center"
          ml={["60%","40%"]}
        >
          <span> see{open ? " less" : " more"}</span>
          <span>
            {""} {!open ? <IoIosArrowDropdown /> : <IoIosArrowDropup />}
          </span>
        </Flex>
      </Button>
       <div style={{ position: "relative" }}>
        {open ? (
                  <Flex flexDir={"column"} pos="absolute"
              style={{ position: "absolute",top:"20% "}}
              bgColor="blackAlpha.300"
              w="100%"
             justifycontent="center"
             
                  >
            {options?.map((op) => {
              return (
                <Button key={op.id} leftIcon={op.icon} w="90%" variant="ghost"  justifycontent="flex-start" onClick={()=>{setValue(op.id)}}>
                  {op.name}
                </Button>
              );
            })}
          </Flex>
        ) : (
          ""
        )}
      </div>
     
    </Flex>
  );
};

export default SelectBtn;
