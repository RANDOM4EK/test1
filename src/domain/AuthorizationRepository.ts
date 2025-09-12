import type { Authorization } from "./Authorization"; 

export interface AuthorizationRepository {
  findAll(): Authorization[];
}