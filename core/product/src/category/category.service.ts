import { Injectable } from '@nestjs/common';
import type { Repository } from 'typeorm';
import { Category } from './entity/category.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly repo: Repository<Category>
  ) { }


}
