import { gql } from 'urql';

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;
