import Header from "../component/Header";
import SocialPanel from "../component/SocialPanel";
import PostPanel from "../component/PostPanel";
import UserPanel from "../component/UserPanel";
import { Flex } from "@chakra-ui/react";

function Str1() {
  return (
    <>
      <Header></Header>
      <Flex>
        <UserPanel></UserPanel>
        <PostPanel></PostPanel>
        <SocialPanel></SocialPanel>
      </Flex>
    </>
  );
}

export default Str1;
