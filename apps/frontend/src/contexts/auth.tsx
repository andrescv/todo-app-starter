import { createContext, ReactNode, useContext } from 'react';
import { useQuery } from 'urql';

import { User } from '@/interfaces/user';

const AuthContext = createContext<User | null>(null);

export type AuthProviderProps = {
  user: User | null;

  children?: ReactNode;
};

const AuthProvider: React.FC<AuthProviderProps> = ({ children, user }) => {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useUser = (force = false): [User | null, boolean] => {
  const user = useContext(AuthContext);

  const [{ data, fetching }] = useQuery({
    query: ``,
    pause: !!user && !force,
  });

  const userData = user || data?.user || null;

  return [userData, fetching];
};

export default AuthProvider;
