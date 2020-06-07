import { Resolver, Query } from '@nestjs/graphql';
import { Category } from './category.entity';
import { CategoryService } from './category.service';

@Resolver('Category')
export class CategoryResolver {

    constructor(private categoryService: CategoryService){}

    @Query()
    categories(): Promise<Category[]> {
        return this.categoryService.findAll();
    }
}
