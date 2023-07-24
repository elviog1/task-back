import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())
  app.enableCors()
  app.setGlobalPrefix('api') // esto es para que todas las rutas tengan el string API, ej: http://localhost:3000/api/task
  await app.listen(3000);
}
bootstrap();
