import {
  Catch,
  ExceptionFilter,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApolloError,
  AuthenticationError,
  ForbiddenError,
} from 'apollo-server-express';

@Catch()
export class GlobalExceptionFilter implements ExceptionFilter {
  catch(exception: any) {
    if (exception instanceof ApolloError) {
      return exception;
    }

    if (exception instanceof UnauthorizedException) {
      return new AuthenticationError('Unauthenticated.');
    }

    if (exception instanceof ForbiddenException) {
      return new ForbiddenError('Forbidden.');
    }

    return new ApolloError(
      'Internal server error, try again.',
      'INTERNAL_SERVER_ERROR'
    );
  }
}
