import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { BookEntity } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class BookstoreService extends TypeOrmCrudService<BookEntity>{
    constructor(@InjectRepository(BookEntity) repo) {
        super(repo)
    }
}
