import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { Users } from "./users/models/users.model";
import { CartModule } from "./cart/cart.module";
import { Cart } from "./cart/models/cart.model";

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: ".env", isGlobal: true }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [Users, Cart],
      autoLoadModels: true,
      sync: { alter: true },
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    CartModule,
  ],
})
export class AppModule {}
