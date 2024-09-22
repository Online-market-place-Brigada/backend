import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT || 3030;
  app.setGlobalPrefix("api");
  await app.listen(3000, () => {
    console.log(`Server running at port http://localhost:${PORT}`);
  });
}
bootstrap();
