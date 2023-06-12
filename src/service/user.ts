import { Injectable } from "@nestjs/common";
import { User } from "src/interface/user";

@Injectable()
export class UserService {
  private users: User[] = [];

  createUser(user: User) {
    this.users.push(user);
  }

  login(user: User) {
    return user;
  }
}
