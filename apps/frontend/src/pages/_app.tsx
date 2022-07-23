import type { AppProps } from 'next/app';

function TodoApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default TodoApp;
