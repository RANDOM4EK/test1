import type { Post } from "../domain/Post";
import type { PostRepository } from "../domain/PostRepository";


import tonyAvatar from "../../image/Avatar.png";
import paulAvatar from "../../image/Avatar4.png";
import paulImagePost from "../../image/paysage.png";


const posts: Post[] = [
  {
    id: "post-1",
    author: {
      id: "user-1",
      name: "SlavaKPSS",
      handle: "@slavaKPSS",
      avatarUrl: tonyAvatar,
      bio: "dancer",
    },
    imageUrl: "",
    text: "Looking for an amazing scientist who knows how to build a suit that can fly high in the sky without any problem.",
  },
  {
    id: "post-2",
    author: {
      id: "user-2",
      name: "Paul Rudd",
      handle: "@antman_wasp",
      avatarUrl: paulAvatar,
      bio: "Smallest creature in this beautiful universe | Flying in colo....",
    },
    imageUrl: paulImagePost,
    text: ` Exploring the amazing nature with my loved daughter and wife.
            These kind of visuals can soothen your mind, no matter what is
            your problem and it makes you to forget all your pains.`,
  },
];

export const inMemoryPostRepository: PostRepository = {
  findAll(): Post[] {
    return posts;
  },
};
