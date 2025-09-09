import { Flex, Image, Text } from "@chakra-ui/react";


import type { User } from "../domain/User";

type Userpops = {
  user: User[];
};

function UserPanel({ user }: Userpops) {
  return (
    <Flex flexDirection="row" justifyContent="space-between">
      {user.map((users) => (
        <Flex key={users.id} width="250px" flexDirection="column" paddingTop="40px">
          <Flex
            
            flexDirection="column"
            marginLeft="auto"
            marginRight="auto"
          >
            <Image src={users.avatarUrl} width="100px" height="100px"></Image>
            <Text>{users.name}</Text>
          </Flex>
          <Flex
            flexDirection="column"
            marginLeft="24px"
            marginTop="80px"
            gap="10px"
          >
            <Text>Explore panel</Text>
            <Flex gap="10px">
              <Image src={}></Image>
              <Text>Profile</Text>
            </Flex>
            <Flex gap="10px">
              <Image src={}></Image>
              <Text>Find friends</Text>
            </Flex>
            <Flex gap="10px">
              <Image src={}></Image>
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
              <Image src={}></Image>
              <Text>Settings</Text>
            </Flex>
            <Flex gap="10px">
              <Image src={}></Image>
              <Text>Security data</Text>
            </Flex>
            <Flex gap="10px">
              <Image src={}></Image>
              <Text>Log out</Text>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
}

export default UserPanel;
