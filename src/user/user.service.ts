import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  createUserByEmail(email: string) {
    return {
      id: 1,
      name: 'Alex',
      email,
      age: 23,
    };
  }
}
