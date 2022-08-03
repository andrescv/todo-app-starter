import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'urql';

import { UIProvider } from '@todo/ui';

import AuthProvider from '@/contexts/auth';
import { gqlClient } from '@/utils/graphql';

function TodoApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider value={gqlClient}>
        <AuthProvider user={null}>
          <UIProvider>
            <Component {...pageProps} />
          </UIProvider>
        </AuthProvider>
      </Provider>
      <ToastContainer position="bottom-right" theme="dark" />
    </>
  );
}

export default TodoApp;
