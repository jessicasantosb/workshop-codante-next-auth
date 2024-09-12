import NextAuth from 'next-auth';
import credentials from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [credentials],
});
