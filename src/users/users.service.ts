import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { Users } from "./models/users.model";
import { CreateUsersDto } from "./dto/create-users.dto";
import { UpdateUsersDto } from "./dto/update-users.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(Users) private usersModel: typeof Users) {}
  async create(createUsersDto: CreateUsersDto): Promise<Users> {
    return this.usersModel.create(createUsersDto);
  }

  async findAll(): Promise<Users[]> {
    return this.usersModel.findAll({ include: { all: true } });
  }

  async findById(id: number): Promise<Users> {
    return this.usersModel.findByPk(id, { include: { all: true } });
  }

  async delete(id: number): Promise<number> {
    return this.usersModel.destroy({ where: { id } });
  }

  async update(id: number, updateUsersDto: UpdateUsersDto) {
    const users = await this.usersModel.update(updateUsersDto, {
      where: { id },
      returning: true,
    });
    return users[1][0];
  }
}
