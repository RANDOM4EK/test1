import type { HeaderElem } from "./HeaderElem";

export interface HeaderRepository {
  findAll(): HeaderElem[];
}