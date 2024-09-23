import { Column, DataType, Model, Table } from "sequelize-typescript";

interface AdminCreationAttr {
  username: string;
  password: string;
  email: string;
  role: string;
  is_active: boolean;
}

@Table({ tableName: "admin", timestamps: false })
export class Admin extends Model<Admin, AdminCreationAttr> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({
    type: DataType.STRING(100),
    unique: true,
  })
  username: string;

  @Column({
    type: DataType.STRING(100),
  })
  password: string;

  @Column({
    type: DataType.STRING(100),
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.STRING(100),
  })
  role: string;

  @Column({
    type: DataType.BOOLEAN,
    defaultValue: false,
  })
  is_active: boolean;
}
