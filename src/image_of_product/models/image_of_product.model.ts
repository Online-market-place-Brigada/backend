import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "src/products/models/product.model";

interface ImageOfProductCreationAttr {
  image: string;
  productId: number;
}

@Table({ tableName: "image_of_product", timestamps: false })
export class ImageOfProduct extends Model<
  ImageOfProduct,
  ImageOfProductCreationAttr
> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING,
  })
  image: string;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
