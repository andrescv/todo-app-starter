import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { ApolloError } from 'apollo-server-express';

import { DBService } from '@/modules/db/db.service';

import { AddTodoInput } from './input/add-todo.input';
import { RemoveTodoInput } from './input/remove-todo.input';
import { ToggleTodoInput } from './input/toggle-todo.input';

@Injectable()
export class TodoService {
  constructor(private readonly dbService: DBService) {}

  async getAll(user: User) {
    return await this.dbService.todo.findMany({
      where: {
        userId: user.id,
      },
    });
  }

  async add(user: User, input: AddTodoInput) {
    return await this.dbService.todo.create({
      data: {
        value: input.value,
        userId: user.id,
      },
    });
  }

  async toggle(user: User, input: ToggleTodoInput) {
    const todo = await this.dbService.todo.findFirst({
      where: {
        id: input.todoId,
        userId: user.id,
      },
    });

    if (!todo) {
      throw new ApolloError('Todo not found.', 'TODO_NOT_FOUND');
    }

    return await this.dbService.todo.update({
      where: {
        id: todo.id,
      },
      data: {
        isComplete: !todo.isComplete,
      },
    });
  }

  async remove(user: User, input: RemoveTodoInput) {
    const result = await this.dbService.todo.deleteMany({
      where: {
        id: input.todoId,
        userId: user.id,
      },
    });

    if (!Boolean(result.count)) {
      throw new ApolloError('Todo not found', 'TODO_NOT_FOUND');
    }

    return true;
  }

  async removeAll(user: User) {
    await this.dbService.todo.deleteMany({
      where: {
        userId: user.id,
      },
    });

    return true;
  }
}
