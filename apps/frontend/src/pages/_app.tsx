import type { AppProps } from 'next/app';

import { UIProvider } from '@todo/ui';

import AuthProvider from '@/contexts/auth';

function TodoApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider user={null}>
      <UIProvider>
        <Component {...pageProps} />
      </UIProvider>
    </AuthProvider>
  );
}

export default TodoApp;
