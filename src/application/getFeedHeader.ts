import type { HeaderElem } from '../domain/HeaderElem';
import type { HeaderRepository } from '../domain/HeaderRepositoty';

export const getFeedHeader = (HeaderRepository: HeaderRepository): HeaderElem[] => {
  // Вся логика этого сценария - просто получить все посты.
  // В будущем здесь может быть что-то сложнее: сортировка, фильтрация и т.д.
  return HeaderRepository.findAll();
};