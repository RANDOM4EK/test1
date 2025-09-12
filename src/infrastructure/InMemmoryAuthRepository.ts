import type { Authorization } from "../domain/Authorization";
import type { AuthorizationRepository } from "../domain/AuthorizationRepository";

const auth:Authorization[] = [
    {
        id: '',
        name: '',
        email:'',
    }
]


export const InMemoryAuthRepository: AuthorizationRepository = {
  findAll(): Authorization[] {
      return auth;
    },
};