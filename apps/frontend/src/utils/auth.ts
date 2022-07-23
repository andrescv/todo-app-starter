import { JwtPayload, verify } from 'jsonwebtoken';
import type { GetServerSideProps } from 'next';

export type WithAuthOptions = {
  getServerSideProps?: GetServerSideProps;
  returnTo?: string;
  redirect?: boolean;
  goTo?: string;
};

export const withAuth = (opts?: WithAuthOptions): GetServerSideProps => {
  const { getServerSideProps, returnTo, redirect = true, goTo } = opts || {};

  return async (ctx) => {
    const secret = process.env.JWT_SECRET || '';
    const cookie = process.env.SESSION_COOKIE || '';
    const token = ctx.req.cookies[cookie] || '';

    let data: any = null;
    let shouldRedirect = !cookie || !token;
    let serverSideProps: any = { props: {} };

    // verify token if exists
    if (!shouldRedirect) {
      try {
        data = verify(token, secret) as JwtPayload;
      } catch (error) {
        shouldRedirect = true;
      }
    }

    // redirect user if is not authenticated
    if (shouldRedirect && redirect) {
      return {
        redirect: {
          destination: `/sign-in?${new URLSearchParams({
            next: returnTo || ctx.resolvedUrl,
          })}`,
          permanent: false,
        },
      };
    }

    // redirect user if authenticated
    if (!shouldRedirect && goTo) {
      return {
        redirect: {
          destination: goTo,
          permanent: false,
        },
      };
    }

    // run custom get server props
    if (getServerSideProps) {
      serverSideProps = await getServerSideProps(ctx);
    }

    return {
      ...serverSideProps,
      props: {
        ...(serverSideProps?.props || {}),
        user: data ?? null,
      },
    };
  };
};
