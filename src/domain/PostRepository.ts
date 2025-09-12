import type { Post } from './Post';

export interface PostRepository {
  findAll(): Post[];
  deleteById(id: string): void;
}
