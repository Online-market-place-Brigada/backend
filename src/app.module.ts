import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { SequelizeModule } from "@nestjs/sequelize";
import { UsersModule } from "./users/users.module";
import { Users } from "./users/models/users.model";
import { CartModule } from "./cart/cart.module";
import { Cart } from "./cart/models/cart.model";
import { ProductsModule } from "./products/products.module";
import { Product } from "./products/models/product.model";
import { LikesModule } from "./likes/likes.module";
import { Like } from "./likes/models/like.model";
import { AdminModule } from "./admin/admin.module";
import { Admin } from "./admin/models/admin.model";
import { ImageOfProductModule } from "./image_of_product/image_of_product.module";
import { ImageOfProduct } from "./image_of_product/models/image_of_product.model";

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
      models: [Users, Cart, Product, Like, Admin, ImageOfProduct],
      autoLoadModels: true,
      sync: { alter: true },
      synchronize: true,
      logging: true,
    }),
    UsersModule,
    CartModule,
    ProductsModule,
    LikesModule,
    AdminModule,
    ImageOfProductModule,
  ],
})
export class AppModule {}
