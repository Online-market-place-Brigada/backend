import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUsersDto } from "./dto/update-users.dto";

@Controller("users")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() createUsersDto: CreateUsersDto) {
    return this.usersService.create(createUsersDto);
  }

  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  @Get(":id")
  async findById(@Param("id") id: number) {
    return this.usersService.findById(id);
  }

  @Delete(":id")
  async delete(@Param("id") id: number) {
    return this.usersService.delete(id);
  }

  @Patch(":id")
  async update(
    @Param("id") id: number,
    @Body() updateUsersDto: UpdateUsersDto
  ) {
    return this.usersService.update(id, updateUsersDto);
  }
}
