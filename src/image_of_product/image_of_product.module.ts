import { Module } from "@nestjs/common";
import { ImageOfProductService } from "./image_of_product.service";
import { ImageOfProductController } from "./image_of_product.controller";
import { SequelizeModule } from "@nestjs/sequelize";
import { ImageOfProduct } from "./models/image_of_product.model";

@Module({
  imports: [SequelizeModule.forFeature([ImageOfProduct])],
  controllers: [ImageOfProductController],
  providers: [ImageOfProductService],
})
export class ImageOfProductModule {}
