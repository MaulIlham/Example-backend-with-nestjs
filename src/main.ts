import { Logger } from '@nestjs/common';
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { BookstoreModule } from './bookstore/bookstore.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('Book Store CRUD')
    .setDescription('Book Store API description')
    .setVersion('1.0')
    .addTag('bookstore')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port);
  Logger.log(`Server running at http://localhost:${port}`, 'Bootstrap')
}
bootstrap();
