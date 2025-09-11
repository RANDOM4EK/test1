import { Flex, Image, Text } from "@chakra-ui/react";

import type { BuzzBoard } from "../domain/BuzzBoard";

type BuzzBoardProps = {
  buzzElem: BuzzBoard[];
};

function SocialPanel({ buzzElem }: BuzzBoardProps) {
  return (
    <>
      {Object.values(buzzElem).map((elem) => (<Flex bg="#F1FAFF">
        <Flex flexDirection="column" gap="32px">
          <Flex
            width="318px"
            height="410px"
            flexDirection="column"
            padding="24px"
            bg="white"
          >
            <Flex width="288px" flexDirection="column">
              <Text color="#FF5A60">People you may know</Text>
              <Flex height="70px" justifyContent="space-between" fontSize="14px">
                <Image src={elem.peopleYmayKnow.imagePpofileUrl} width="70px"></Image>
                <Flex flexDirection="column">
                  <Text>{elem.peopleYmayKnow.name}</Text>
                  <Text color="#0F191A80">
                    {elem.peopleYmayKnow.commit}
                  </Text>
                  <Text color="#4361EE">{elem.peopleYmayKnow.counterFollowers}</Text>
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
                <Image src={elem.peopleYmayKnow.counterFollowers1} width="70px" height="70px"></Image>
                <Flex flexDirection="column">
                  <Text>{elem.peopleYmayKnow.name1}</Text>
                  <Text color="#0F191A80">
                   {elem.peopleYmayKnow.commit1}
                  </Text>
                  <Text color="#4361EE">{elem.peopleYmayKnow.counterFollowers1}</Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex flexDirection="column" gap="20px">
              <Flex fontSize="13px">
                <Image src={elem.peopleYmayKnow.imagePpofileUrl2} width="40px" height="40px"></Image>
                <Flex flexDirection="column">
                  <Text>{elem.peopleYmayKnow.commit2}</Text>
                  <Text color="#0F191A80">{elem.peopleYmayKnow.commit2}</Text>
                </Flex>
              </Flex>
              <Flex fontSize="13px">
                <Image src={elem.peopleYmayKnow.imagePpofileUrl3} width="40px" height="40px"></Image>
                <Flex flexDirection="column">
                  <Text>{elem.peopleYmayKnow.name3}</Text>
                  <Text color="#0F191A80">{elem.peopleYmayKnow.commit3}</Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <Flex padding="24px" flexDirection="column" bg="white" gap="16px">
            <Text color="#FF5A60" fontSize="19.4px">
              Boost your post
            </Text>
            <Image src={elem.boostYpost.imageMyPost}></Image>
            <Flex flexDirection="column">
              <Flex>
                <Text>{elem.boostYpost.name}</Text>
                <Text color="#0F191A80">{elem.boostYpost.handle}</Text>
              </Flex>
              <Text color="#0F191A80">{elem.boostYpost.commit}</Text>
              <Flex>
                <Image src={elem.boostYpost.imagesProfile} width="63px" height="24px"></Image>
                <Text color="#4361EE">{elem.boostYpost.counterLikes}</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>))}

    </>
  );

}

export default SocialPanel;
