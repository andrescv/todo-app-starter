import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { IsStrongPassword } from '@/common/validators/is-strong-password.validator';

export class SignUpInput {
  @IsString()
  @IsNotEmpty()
  fullName: string;

  @IsEmail()
  email: string;

  @IsStrongPassword()
  password: string;
}
