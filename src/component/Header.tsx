import {
  Flex,
  Box,
  Text,
  Image,
  Input,
  Stack,
} from "@chakra-ui/react";

import type { HeaderElem } from "../domain/HeaderElem";

type HeaderProps = {
  headerElem: HeaderElem[];
};

function Header({ headerElem }: HeaderProps) {
  return (
    <>
      {headerElem.map((elem, index) => (
        <Flex
          key={index}
          bg="#A9DEF9"
          padding="20px"
          flexDir="row"
          height="135px"
          alignItems="center"
          justifyContent="space-between"
        >
          <Box>
            <Image src={elem.logo} borderRadius="10px" />
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

          <Flex flexDirection="row" alignItems="center">
            <Box borderRadius="10px">
              <Image src={elem.logoUser} marginLeft="15px" />
            </Box>

            <Flex flexDirection="column" marginLeft="10px">
              <Text>{elem.name}</Text>
              <Text>{elem.handle}</Text>
            </Flex>

            <Flex gap="20px" marginLeft="60px">
              <Image src={elem.noticeIcon} />
              <Image src={elem.activityIcon} />
              <Image src={elem.settingIcon} />
            </Flex>
          </Flex>
        </Flex>
      ))}
    </>
  );
}

export default Header;