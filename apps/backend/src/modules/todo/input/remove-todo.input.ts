import { IsUUID } from 'class-validator';

export class RemoveTodoInput {
  @IsUUID()
  todoId: string;
}
