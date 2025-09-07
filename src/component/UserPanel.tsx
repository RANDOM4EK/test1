import { Flex, Image, Text } from "@chakra-ui/react";

import img from '../../image/Rectangle 7 (1).png'
import img1 from '../../image/Group 8.png'
import img2 from '../../image/Group 8 (1).png'
import img3 from '../../image/Group 8 (2).png'
import img4 from '../../image/Group 8 (3).png'
import img5 from '../../image/Group 8 (4).png'
import img6 from '../../image/Group 8 (5).png'

function UserPanel() {
  return (
    <Flex flexDirection="row" justifyContent="space-between">
      <Flex width="250px" flexDirection="column" paddingTop="40px">
        <Flex flexDirection="column" marginLeft="auto" marginRight="auto">
          <Image src={img} width="100px" height="100px"></Image>
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
            <Image src={img1}></Image>
            <Text>Profile</Text>
          </Flex>
          <Flex gap="10px">
            <Image src={img2}></Image>
            <Text>Find friends</Text>
          </Flex>
          <Flex gap="10px">
            <Image src={img3}></Image>
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
            <Image src={img4}></Image>
            <Text>Settings</Text>
          </Flex>
          <Flex gap="10px">
            <Image src={img5}></Image>
            <Text>Security data</Text>
          </Flex>
          <Flex gap="10px">
            <Image src={img6}></Image>
            <Text>Log out</Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}

export default UserPanel;
