import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';
import { CategoryDTO } from 'src/graphql';

@Injectable()
export class CategoryService {

    constructor(
        @InjectRepository(Category)
        private categoryRepository: Repository<Category>
    ) { }

    findAll(): Promise<Category[]> {
        return this.categoryRepository.find();
    }

    findById(id: number): Promise<Category> {
        return this.categoryRepository.findOne(id);
    }

    createNewCategory(category: CategoryDTO): Category {
        const cat = new Category();
        cat.name = category.name;
        cat.color = "#fefefe";
        return cat;
    }
}
