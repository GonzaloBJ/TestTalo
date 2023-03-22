import { Injectable } from '@nestjs/common';
import { IUser } from './interfaces/user.interface';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }

  createUser(newUser: any): boolean {
    return true;
  }

  readUser(userId: number): IUser {

    return {} as IUser;
  }

  updateUser(user: any): boolean {
    return true;
  }

  deleteUser(userId: number): boolean {
    return true;
  }

  listUsers(limit: number, pageNumber: number|undefined, pageCount: number|undefined): IUser[] {
    return [] as IUser[];
  }


}
