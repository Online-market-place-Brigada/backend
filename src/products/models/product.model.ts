import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ImageOfProduct } from "src/image_of_product/models/image_of_product.model";
import { Like } from "src/likes/models/like.model";

interface IProductCreationAttr {
  name: string;
  price: number;
  description: string;
  categoryId?: number;
}

@Table({ tableName: "product", timestamps: false })
export class Product extends Model<Product, IProductCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.DECIMAL })
  price: number;

  @Column({ type: DataType.STRING })
  description: string;

  @HasMany(() => Like)
  like: Like[];

  @HasMany(() => ImageOfProduct)
  Image_of_product: ImageOfProduct[];
}
