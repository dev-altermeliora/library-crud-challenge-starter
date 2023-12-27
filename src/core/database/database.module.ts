import { Module } from '@nestjs/common';
import { databaseProviders } from './database.providers';
import { BooksModule } from './models/books/books.module';

@Module({
    imports: [BooksModule],
    providers: [...databaseProviders],
    exports: [...databaseProviders],
})
export class DatabaseModule { }
