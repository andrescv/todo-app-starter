import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from '@prisma/client';

import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { UserGuard } from '@/common/guards/user.guard';

import { AddTodoInput } from './input/add-todo.input';
import { RemoveTodoInput } from './input/remove-todo.input';
import { ToggleTodoInput } from './input/toggle-todo.input';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Query()
  @UseGuards(UserGuard)
  async getTodos(@CurrentUser() user: User) {
    return this.todoService.getAll(user);
  }

  @Mutation()
  @UseGuards(UserGuard)
  async addTodo(@CurrentUser() user: User, @Args('input') input: AddTodoInput) {
    return this.todoService.add(user, input);
  }

  @Mutation()
  @UseGuards(UserGuard)
  async toggleTodo(
    @CurrentUser() user: User,
    @Args('input') input: ToggleTodoInput
  ) {
    return this.todoService.toggle(user, input);
  }

  @Mutation()
  @UseGuards(UserGuard)
  async removeTodo(
    @CurrentUser() user: User,
    @Args('input') input: RemoveTodoInput
  ) {
    return this.todoService.remove(user, input);
  }

  @Mutation()
  @UseGuards(UserGuard)
  async removeAllTodos(@CurrentUser() user: User) {
    return this.todoService.removeAll(user);
  }
}
