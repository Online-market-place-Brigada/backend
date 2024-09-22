import { Column, DataType, Model, Table } from "sequelize-typescript";

interface IUsersCreationAttr {
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  address: string;
  password: string;
}

@Table({ tableName: "users", timestamps: false })
export class Users extends Model<Users, IUsersCreationAttr> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING })
  first_name: string;

  @Column({ type: DataType.STRING })
  last_name: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email: string;

  @Column({ type: DataType.STRING })
  phone: string;

  @Column({ type: DataType.STRING })
  address: string;

  @Column({ type: DataType.STRING })
  password: string;
}
