import { gql } from 'urql';

export const SIGN_IN = gql`
  mutation SignIn($input: SignInInput!) {
    user: signIn(input: $input) {
      id
      fullName
      email
      createdAt
      updatedAt
    }
  }
`;
