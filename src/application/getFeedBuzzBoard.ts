import type { BuzzBoard } from "../domain/BuzzBoard";
import type { BuzzBoardRepository } from "../domain/BuzzBoardRepository"; 

export const getFeedBuzzBoard = (BuzzBoardRepository: BuzzBoardRepository): BuzzBoard[] => {
  // Вся логика этого сценария - просто получить все посты.
  // В будущем здесь может быть что-то сложнее: сортировка, фильтрация и т.д.
  return BuzzBoardRepository.findAll();
};