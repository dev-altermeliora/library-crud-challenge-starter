import { Injectable, Inject, Body, Param } from '@nestjs/common';
import { Book } from './books.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BooksService {
  constructor(
    @Inject('BOOKS_REPOSITORY')
    private booksRepository: typeof Book,
  ) {}

  async findAll() {
    return this.booksRepository.findAll();
  }

  async create(createBookDto: CreateBookDto) {
    return this.booksRepository.create({ ...createBookDto });
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    return this.booksRepository
      .findByPk(Number(id))
      .then((book) => book.update(updateBookDto))
      .then((book) => book.save());
  }


  async delete(id: string) {
    return this.booksRepository
      .findByPk(Number(id))
      .then((book) => book.destroy());
  }
}
