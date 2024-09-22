import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { Users } from "src/users/models/users.model";

interface ICartCreationAttr {
  usersId: number;
  productId?: number;
  amount: number;
}
@Table({ tableName: "cart", timestamps: false })
export class Cart extends Model<Cart, ICartCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.INTEGER })
  amount: number;

  @ForeignKey(() => Users)
  @Column({ type: DataType.INTEGER })
  usersId: number;
  @BelongsTo(() => Users)
  users: Users;
}
