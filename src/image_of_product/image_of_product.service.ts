import { Injectable } from "@nestjs/common";
import { CreateImageOfProductDto } from "./dto/create-image_of_product.dto";
import { UpdateImageOfProductDto } from "./dto/update-image_of_product.dto";
import { InjectModel } from "@nestjs/sequelize";
import { ImageOfProduct } from "./models/image_of_product.model";
import { Model } from "sequelize";
import { Product } from "src/products/models/product.model";

@Injectable()
export class ImageOfProductService {
  constructor(
    @InjectModel(ImageOfProduct)
    private image_of_productModel: typeof ImageOfProduct
  ) {}

  create(createImageOfProductDto: CreateImageOfProductDto) {
    return this.image_of_productModel.create(createImageOfProductDto);
  }

  findAll() {
    return this.image_of_productModel.findAll({
      include: [
        {
          model: Product,
        },
      ],
    });
  }

  findOne(id: number) {
    return this.image_of_productModel.findByPk(+id, {
      include: [
        {
          model: Product,
        },
      ],
    });
  }

  update(id: number, updateImageOfProductDto: UpdateImageOfProductDto) {
    return this.image_of_productModel.update(updateImageOfProductDto, {
      where: { id },
    });
  }

  remove(id: number) {
    return this.image_of_productModel.destroy({ where: { id } });
  }
}
