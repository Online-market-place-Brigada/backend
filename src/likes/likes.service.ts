import { Injectable } from "@nestjs/common";
import { CreateLikeDto } from "./dto/create-like.dto";
import { UpdateLikeDto } from "./dto/update-like.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Like } from "./models/like.model";

@Injectable()
export class LikesService {
  constructor(@InjectModel(Like) private likeModel: typeof Like) {}
  create(createLikeDto: CreateLikeDto) {
    return this.likeModel.create(createLikeDto);
  }

  findAll() {
    return this.likeModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.likeModel.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateLikeDto: UpdateLikeDto) {
    return this.likeModel.update(updateLikeDto, { where: { id } });
  }

  remove(id: number) {
    return this.likeModel.destroy({ where: { id } });
  }
}
