import { Module } from '@nestjs/common';
import { BookstoreService } from './bookstore.service';
import { BookstoreController } from './bookstore.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookEntity } from './book.entity';
import { DatabaseConnectionService } from '../shared/services/database-connection.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConnectionService
    }),
    TypeOrmModule.forFeature([BookEntity])
  ],
  providers: [BookstoreService],
  controllers: [BookstoreController]
})
export class BookstoreModule { }
