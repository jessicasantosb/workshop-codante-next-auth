import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import { compareSync } from 'bcrypt-ts';
import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import GithubProvider from 'next-auth/providers/github';
import EmailProvider from 'next-auth/providers/nodemailer';
import db from './lib/db';

declare module 'next-auth' {
  interface Session {
    user: User & {
      githubProfile?: any;
    };
  }
}

const prisma = new PrismaClient();

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: 'jwt',
  },
  providers: [
    Credentials({
      credentials: {
        email: { label: 'Email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!email || !password) return null;

        const user = await db.user.findUnique({
          where: { email: email },
        });

        if (!user) return null;

        const matches = compareSync(password, user.password ?? '');

        if (matches) {
          return { id: user.id, name: user.name, email: user.email };
        }

        return null;
      },
    }),
    GithubProvider({
      allowDangerousEmailAccountLinking: true,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  callbacks: {
    jwt({ token, profile }) {
      return { githubProfile: profile, ...token };
    },
    session({ session, token }) {
      session.user.githubProfile = token.githubProfile;
      return session;
    },
  },
});
