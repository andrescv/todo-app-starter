import { ValidationError, ValidationPipe } from '@nestjs/common';
import { UserInputError } from 'apollo-server-express';

export class GlobalValidationPipe extends ValidationPipe {
  constructor() {
    super({
      whitelist: true,
      exceptionFactory: (validationErrors: ValidationError[]) => {
        return new UserInputError('Invalid input.', {
          validationErrors,
        });
      },
    });
  }
}
