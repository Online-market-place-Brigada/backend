import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Product } from "src/products/models/product.model";
import { Users } from "src/users/models/users.model";

interface ILikesCreationAttr {
  usersId: number;
  productId?: number;
}
@Table({ tableName: "likes", timestamps: false })
export class Like extends Model<Like, ILikesCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER })
  usersId: number;

  @BelongsTo(() => Users)
  users: Users;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
