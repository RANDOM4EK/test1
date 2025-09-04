import {
  Flex,
  Box,
  Text,
  Image,
  Input,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import img from "../../image/Rectangle 5.jpg";
import img2 from "../../image/Rectangle 7.png";
import img3 from "../../image/Rectangle 7 (1).png";
import group3 from "../../image/Group 3.png";
import group4 from "../../image/Group 4.png";
import group5 from "../../image/Group 5.png";
import group8 from "../../image/Group 8.png";
import group8v1 from "../../image/Group 8 (1).png";
import group8v2 from "../../image/Group 8 (2).png";
import group8v3 from "../../image/Group 8 (3).png";
import group8v4 from "../../image/Group 8 (4).png";
import group8v5 from "../../image/Group 8 (5).png";
import img4 from "../../image/Rectangle 10.png";
import img5 from "../../image/Rectangle 16.png";
import img6 from "../../image/Rectangle 12.png";
import img7 from "../../image/Rectangle 11.png";
import img8 from '../../image/Ellipse 1.png'
import img9 from '../../image/Ellipse 2.png'

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
            <Image src={group3}></Image>
            <Image src={group4}></Image>
            <Image src={group5}></Image>
          </Flex>
        </Flex>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex width="250px" flexDirection="column" paddingTop="40px">
          <Flex flexDirection="column" marginLeft="auto" marginRight="auto">
            <Image src={img3} width="100px" height="100px"></Image>
            <Text>Steve Rogers</Text>
          </Flex>
          <Flex
            flexDirection="column"
            marginLeft="24px"
            marginTop="80px"
            gap="10px"
          >
            <Text>Explore panel</Text>
            <Flex gap="10px">
              <Image src={group8}></Image>
              <Text>Profile</Text>
            </Flex>
            <Flex gap="10px">
              <Image src={group8v1}></Image>
              <Text>Find friends</Text>
            </Flex>
            <Flex gap="10px">
              <Image src={group8v2}></Image>
              <Text>User analytics</Text>
            </Flex>
          </Flex>
          <Flex
            flexDirection="column"
            marginLeft="24px"
            marginTop="80px"
            gap="10px"
          >
            <Text>Settings</Text>
            <Flex gap="10px">
              <Image src={group8v3}></Image>
              <Text>Settings</Text>
            </Flex>
            <Flex gap="10px">
              <Image src={group8v4}></Image>
              <Text>Security data</Text>
            </Flex>
            <Flex gap="10px">
              <Image src={group8v5}></Image>
              <Text>Log out</Text>
            </Flex>
          </Flex>
        </Flex>
        <Flex bg="#F1FAFF" width="100%" padding="56px" paddingRight="0px">
          <Flex
            flexDirection="column"
            gap="40px"
            marginLeft="auto"
            marginRight="auto"
          >
            <Flex
              height="215px"
              width="795px"
              padding="24px"
              flexDir="column"
              bg="white"
            >
              <Flex
                borderBottom="solid black 1px"
                gap="64px"
                justifyContent="space-around"
                marginBottom="24px"
              >
                <Text>Write a post</Text>
                <Text>Upload photo</Text>
                <Text>Upload video</Text>
              </Flex>
              <Textarea placeholder="Write something here..." />
            </Flex>
            <Flex
              height="215px"
              width="795px"
              bg="white"
              padding="24px"
              flexDirection="column"
            >
              <Flex gap="20px">
                <Image src={img4} width="70px" height="70px"></Image>
                <Flex flexDirection="column">
                  <Flex gap="30px">
                    <Text>Tony Stark</Text>
                    <Text color="#0F191A80">@tony_stark_3000</Text>
                  </Flex>
                  <Text>
                    Cognitive Person | Enthusiastic scientist | Worked on
                    300.....
                  </Text>
                </Flex>
              </Flex>
              <Flex flexDirection="column" width="498px" margin="auto">
                <Text color="#d12121ff">*Immediate HIRING*</Text>
                <Text>
                  Looking for an amazing scientist who knows how to build a suit
                  that can fly high in the sky without any problem.
                </Text>
              </Flex>
            </Flex>
            <Flex
              width="795px"
              bg="white"
              padding="24px"
              flexDirection="column"
            >
              <Flex gap="20px">
                <Image src={img6} width="70px" height="70px"></Image>
                <Flex flexDirection="column">
                  <Flex gap="30px">
                    <Text>Paul Rudd</Text>
                    <Text color="#0F191A80">@antman_wasp</Text>
                  </Flex>
                  <Text>
                    Smallest creature in this beautiful universe | Flying in
                    colo....
                  </Text>
                </Flex>
              </Flex>
              <Flex flexDirection="column" width="498px" margin="auto">
                <Text>
                  Exploring the amazing nature with my loved daughter and wife.
                  These kind of visuals can soothen your mind, no matter what is
                  your problem and it makes you to forget all your pains.
                </Text>
                <Image src={img5}></Image>
              </Flex>
            </Flex>
          </Flex>
          <Flex
            width="318px"
            height="410px"
            flexDirection="column"
            padding="24px"
            bg="white"
          >
            <Flex width="288px" flexDirection="column">
              <Text>People you may know</Text>
              <Flex
                height="70px"
                justifyContent="space-between"
                fontSize="14px"
              >
                <Image src={img4} width="70px"></Image>
                <Flex flexDirection="column">
                  <Text>Tony Stark</Text>
                  <Text color="#0F191A80">
                    I am a metal man, who saves lots..
                  </Text>
                  <Text color="#4361EE">6M+ Followers</Text>
                </Flex>
              </Flex>
              <Flex
                fontSize="14px"
                width="288px"
                height="80px"
                justifyContent="space-between"
                borderBottom="solid 1px #0F191A40"
                marginBottom="10px"
                marginTop="10px"
              >
                <Image src={img7} width="70px" height="70px"></Image>
                <Flex flexDirection="column">
                  <Text>Bruce Banners</Text>
                  <Text color="#0F191A80">
                    Green human with scietific kno....
                  </Text>
                  <Text color="#4361EE">3M+ Followers</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDirection='column' gap='20px'>
              <Flex fontSize='13px'>
                <Image src={img8} width='40px' height='40px'></Image>
                <Flex flexDirection='column'>
                  <Text>Natasha Ramanoff</Text>
                  <Text color="#0F191A80">Tagged you in her 250th post a..</Text>
                </Flex>
              </Flex>
              <Flex fontSize='13px'>
                <Image src={img9} width='40px' height='40px'></Image>
                <Flex flexDirection='column'>
                  <Text>Barton Clint</Text>
                  <Text color="#0F191A80">Liked your comment on their po...</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Header;
