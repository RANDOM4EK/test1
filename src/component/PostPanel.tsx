
import { useState } from "react";
import {
  Flex,
  Text,
  Image,
  Textarea,
  Button,
} from "@chakra-ui/react";
import type { Post } from "../domain/Post";
import { inMemoryPostRepository } from "../infrastructure/InMemoryPostRepository"; 

type PostPanelProps = {
  posts: Post[];
};

function PostPanel({ posts }: PostPanelProps) {
  const [postList, setPostList] = useState(posts);

  const handleDelete = (id: string) => {
    inMemoryPostRepository.deleteById(id);
    setPostList(inMemoryPostRepository.findAll());
  };

  return (
    <Flex bg="#F1FAFF" width="100%" padding="56px" paddingRight="0px">
      <Flex flexDirection="column" gap="40px" marginLeft="auto" marginRight="auto">
        {/* Форма создания поста */}
        <Flex height="215px" width="795px" padding="24px" flexDir="column" bg="white">
          <Flex borderBottom="solid black 1px" gap="64px" justifyContent="space-around" marginBottom="24px">
            <Text>Write a post</Text>
            <Text>Upload photo</Text>
            <Text>Upload video</Text>
          </Flex>
          <Textarea placeholder="Write something here..." />
        </Flex>

        {/* Список постов */}
        {postList.map((post) => (
          <Flex
            key={post.id}
            width="795px"
            bg="white"
            padding="24px"
            flexDirection="column"
            position="relative"
          >
            <Flex gap="20px" alignItems="center">
              <Image src={post.author.avatarUrl} width="70px" height="70px" borderRadius="md" />
              <Flex flexDirection="column">
                <Flex gap="30px">
                  <Text fontWeight="bold">{post.author.name}</Text>
                  <Text color="#0F191A80">{post.author.handle}</Text>
                </Flex>
                <Text fontSize="sm">{post.author.bio}</Text>
              </Flex>
            </Flex>

            <Flex flexDirection="column" width="498px" margin="auto" marginTop="20px" gap="16px">
              <Text>{post.text}</Text>
              {post.imageUrl && <Image src={post.imageUrl} borderRadius="md" />}
            </Flex>

            <Button
              colorScheme="red"
              size="sm"
              position="absolute"
              top="16px"
              right="16px"
              onClick={() => handleDelete(post.id)}
            >
              Delete
            </Button>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}

export default PostPanel;
