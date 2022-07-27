import { IsUUID } from 'class-validator';

export class ToggleTodoInput {
  @IsUUID()
  todoId: string;
}
