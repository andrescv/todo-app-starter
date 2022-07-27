import { IsNotEmpty, IsString } from 'class-validator';

export class AddTodoInput {
  @IsString()
  @IsNotEmpty()
  value: string;
}
