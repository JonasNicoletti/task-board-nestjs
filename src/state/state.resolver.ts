import { Resolver, Query } from '@nestjs/graphql';
import { StateService } from './state.service';
import { State } from './state.entity';

@Resolver('State')
export class StateResolver {

    constructor(private stateService: StateService){}

    @Query()
    states(): Promise<State[]> {
        return this.stateService.findAll();
    }
}
