import { PartialType } from '@nestjs/mapped-types';
import { CreateImageOfProductDto } from './create-image_of_product.dto';

export class UpdateImageOfProductDto extends PartialType(CreateImageOfProductDto) {}
