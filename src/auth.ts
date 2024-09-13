import NextAuth from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

export const {
  handlers: { GET, POST },
  auth,
} = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize(credentials) {
        console.log('credentials: ', credentials);
        
        if (credentials.password === '123') {
          return { id: '1', name: 'Jessica', email: 'email' };
        } else {
          return null;
        }
      },
    }),
  ],
});
