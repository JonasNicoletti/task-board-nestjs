import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, } from 'typeorm';
import { State } from 'src/state/state.entity';
import { Category } from 'src/category/category.entity';

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;  

    @Column()
    description: string;

    @Column()
    createdAt: Date;

    @ManyToOne(() => State, {cascade: true, eager: true})
    state: State;    
    
    @ManyToOne(() => Category, {cascade: true, eager: true})
    category: Category;
}