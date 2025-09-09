import type { PostRepository } from '../domain/PostRepository';
import type { Post } from '../domain/Post';

// Это наш Use Case (сценарий использования)
export const getFeedPosts = (postRepository: PostRepository): Post[] => {
  // Вся логика этого сценария - просто получить все посты.
  // В будущем здесь может быть что-то сложнее: сортировка, фильтрация и т.д.
  return postRepository.findAll();
};