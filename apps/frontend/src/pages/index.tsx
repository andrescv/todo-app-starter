import type { NextPage } from 'next';
import Head from 'next/head';

import { Button, Flex, Input, TodoItem } from '@todo/ui';

import { DashboardLayout } from '~layouts/DashboardLayout';

const HomePage: NextPage = () => {
  return (
    <>
      <Head>
        <title>TODO / Home</title>
      </Head>
      <DashboardLayout>
        <Flex
          width={['20rem', '28rem']}
          flexDirection="column"
          alignItems="center"
          gap="2rem"
        >
          <Flex as="form" width="full" alignItems="center" gap="1rem">
            <Input
              type="text"
              variant="auth"
              width={undefined}
              flexGrow="1"
              placeholder="Add todo"
            />
            <Button type="submit" variant="primary" width="4rem">
              Add
            </Button>
          </Flex>
          <Flex flexDirection="column" alignItems="center" gap="0.5rem">
            <TodoItem todo="FOooo " />
            <TodoItem todo="FOooo " />
            <TodoItem todo="FOooo " />
            <TodoItem todo="FOooo " />
            <TodoItem todo="FOooo " />
          </Flex>
        </Flex>
      </DashboardLayout>
    </>
  );
};

export default HomePage;
