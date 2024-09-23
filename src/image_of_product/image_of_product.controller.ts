import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { ImageOfProductService } from "./image_of_product.service";
import { CreateImageOfProductDto } from "./dto/create-image_of_product.dto";
import { UpdateImageOfProductDto } from "./dto/update-image_of_product.dto";

@Controller("image-of-product")
export class ImageOfProductController {
  constructor(private readonly imageOfProductService: ImageOfProductService) {}

  @Post()
  create(@Body() createImageOfProductDto: CreateImageOfProductDto) {
    return this.imageOfProductService.create(createImageOfProductDto);
  }

  @Get()
  findAll() {
    return this.imageOfProductService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.imageOfProductService.findOne(+id);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateImageOfProductDto: UpdateImageOfProductDto
  ) {
    return this.imageOfProductService.update(+id, updateImageOfProductDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.imageOfProductService.remove(+id);
  }
}
