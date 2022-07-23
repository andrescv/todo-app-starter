import type { AppProps } from 'next/app';

import { UIProvider } from '@todo/ui';

function TodoApp({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <Component {...pageProps} />
    </UIProvider>
  );
}

export default TodoApp;
