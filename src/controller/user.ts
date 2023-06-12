import { Controller, Get, Post } from "@nestjs/common";

@Controller("user")
export class UserController {

  @Get("user-list")
  getUserList() {}

  @Post("login")
  login() {}
}
