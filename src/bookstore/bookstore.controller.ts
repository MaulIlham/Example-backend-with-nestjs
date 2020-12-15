import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { BookEntity } from './book.entity';
import { BookstoreService } from './bookstore.service';
import { CreateBookDto } from './book.dto';

@Crud({
    model: {
        type: BookEntity
    },
    dto: {
        create: CreateBookDto,
    }
})

@Controller('bookstore')
export class BookstoreController implements CrudController<BookEntity>{
    constructor(public service: BookstoreService) { }
}
