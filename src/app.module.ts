import { Module, DynamicModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { TaskModule } from './task/task.module';
import { StateModule } from './state/state.module';
import { CategoryModule } from './category/category.module';
import * as config from './ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  // we could load the configuration from dotEnv here,
  // but typeORM cli would not be able to find the configuration file.
  console.log(config);
  return TypeOrmModule.forRoot(config);
}

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
      playground: true,
      introspection: true
    }),
    DatabaseOrmModule(),
    TaskModule,
    StateModule,
    CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule { }
