'use server';

import { signIn } from '@/auth';

export default async function githubLogin() {
  await signIn('github');
}
