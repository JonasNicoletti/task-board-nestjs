import { Module } from '@nestjs/common';
import { StateService } from './state.service';
import { StateResolver } from './state.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State } from './state.entity';

@Module({
  imports: [TypeOrmModule.forFeature([State])],
  providers: [StateService, StateResolver],
  exports: [StateService]
})
export class StateModule {}
