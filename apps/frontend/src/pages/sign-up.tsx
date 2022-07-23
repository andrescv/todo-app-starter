import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FormEvent, useCallback } from 'react';

import { Button, Flex, Input, NavLink, Password } from '@todo/ui';

import { AuthLayout } from '~layouts/AuthLayout';

const SignUpPage: NextPage = () => {
  const handleSubmit = useCallback((e: FormEvent<HTMLDivElement>) => {
    e.preventDefault();

    // TODO: handle form submit
  }, []);

  return (
    <>
      <Head>
        <title>TODO / Sign Up</title>
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
            <Input type="text" variant="auth" placeholder="Full Name" />
            <Input type="email" variant="auth" placeholder="Email" />
            <Password placeholder="Password" />
            <Link href="/sign-in" passHref>
              <NavLink fontSize="text.xs" lineHeight="1" color="blueGray">
                Already have an account?
              </NavLink>
            </Link>
          </Flex>
          <Button type="submit" variant="gradient">
            Sign Up
          </Button>
        </Flex>
      </AuthLayout>
    </>
  );
};

export default SignUpPage;
