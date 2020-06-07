import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from './state.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StateService {


    constructor(
        @InjectRepository(State)
        private stateRepository: Repository<State>
    ) { }

    findAll(): Promise<State[]> {
        return this.stateRepository.find();
    }

    findInitialState(): Promise<State> {
        return this.stateRepository.findOne({
            where: {
                index: 0
            }
        });
    }

    createInitialStates(): Promise<State> {
        const toDoState = new State();
        toDoState.name = "to-do";
        toDoState.index = 0;
        return this.stateRepository.save(toDoState);
    }

    findOneById(id: number): Promise<State> {
        return this.stateRepository.findOne(id);
    }
}
