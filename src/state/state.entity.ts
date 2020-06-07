import { Entity, Column, PrimaryGeneratedColumn, } from 'typeorm';

@Entity()
export class State {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    index: number;
}