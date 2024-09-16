'use server';

import { signIn } from '@/auth';

export default async function emailLogin(FormData: FormData) {
  const email = FormData.get('email') as string;
  await signIn('nodemailer', { email });
}
