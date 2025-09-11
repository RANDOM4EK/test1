import type { BuzzBoard } from "./BuzzBoard";

export interface BuzzBoardRepository {
  findAll(): BuzzBoard[];
}