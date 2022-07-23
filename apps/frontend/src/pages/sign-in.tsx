import type { NextPage } from 'next';
import Head from 'next/head';
import { FormEvent, useCallback } from 'react';

import { Button, Flex, Input, Password } from '@todo/ui';

import { AuthLayout } from '~layouts/AuthLayout';

const SignInPage: NextPage = () => {
  const handleSubmit = useCallback(async (e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    // TODO: handle form submit
  }, []);

  return (
    <>
      <Head>
        <title>TODO / Sign In</title>
      </Head>
      <AuthLayout>
        <Flex
          as="form"
          width="full"
          height="full"
          flexDirection="column"
          marginTop="4rem"
          gap="2rem"
          onSubmit={handleSubmit}
        >
          <Flex flexDirection="column" width="full" gap="1.25rem">
            <Input type="email" variant="auth" placeholder="Email" />
            <Password placeholder="Password" />
          </Flex>
          <Button type="submit" variant="gradient">
            Sign In
          </Button>
        </Flex>
      </AuthLayout>
    </>
  );
};

export default SignInPage;
