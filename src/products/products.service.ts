import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
import { InjectModel } from "@nestjs/sequelize";
import { Product } from "./models/product.model";

@Injectable()
export class ProductsService {
  constructor(@InjectModel(Product) private productModel: typeof Product) {}
  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto);
  }

  findAll() {
    return this.productModel.findAll({ include: { all: true } });
  }

  findOne(id: number) {
    return this.productModel.findByPk(id, { include: { all: true } });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productModel.update(updateProductDto, { where: { id } });
  }

  remove(id: number) {
    return this.productModel.destroy({ where: { id } });
  }
}
