import { registerDecorator, ValidationOptions } from 'class-validator';
import validator from 'validator';

export function IsStrongPassword(validationOptions?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'isStrongPassword',
      target: object.constructor,
      propertyName: propertyName,
      constraints: [],
      options: validationOptions,
      validator: {
        validate(value: any) {
          return (
            typeof value === 'string' &&
            validator.isStrongPassword(value, {
              minLength: 8,
              minLowercase: 1,
              minNumbers: 1,
              minSymbols: 1,
              minUppercase: 1,
            })
          );
        },
      },
    });
  };
}
