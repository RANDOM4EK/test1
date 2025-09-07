import {
  Flex,
  Box,
  Text,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";
import img from "../../image/Rectangle 5.jpg";
import img2 from "../../image/Rectangle 7.png";
import group1 from "../../image/Group 3.png";
import group2 from "../../image/Group 4.png";
import group3 from "../../image/Group 5.png";


function Header() {
  return (
    <>
      <Flex
        bg="#A9DEF9"
        padding="20px"
        display="flex"
        flexDir="row"
        height="135px"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box>
          <Image src={img} borderRadius="10px" />
        </Box>
        <Stack
          boxShadow="10px 10px 10px black"
          bg="white"
          marginLeft="10%"
          borderRadius="15px"
          width="625px"
          height="58px"
        >
          <Input
            placeholder="Search for friends here"
            width="100%"
            height="100%"
          />
        </Stack>
        <Flex flexDirection="row">
          <Box borderRadius="10px">
            <Image src={img2} marginLeft="15px" />
          </Box>
          <Flex flexDirection="column">
            <Text>Steve Rogers</Text>
            <Text>@steve_rogers</Text>
          </Flex>
          <Flex gap="20px" marginLeft="60px">
            <Image src={group1}></Image>
            <Image src={group2}></Image>
            <Image src={group3}></Image>
          </Flex>
        </Flex>
      </Flex>
      
    </>
  );
}

export default Header;
