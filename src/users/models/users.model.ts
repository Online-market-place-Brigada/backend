import {
  Column,
  DataType,
  Model,
  Table,
} from "sequelize-typescript";

interface IUsersCreationAttr {
  name: string;
  email: string;
  phone: string;
}

@Table({ tableName: "users", timestamps: false })
export class Users extends Model<Users, IUsersCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING })
  phone: string;
}
