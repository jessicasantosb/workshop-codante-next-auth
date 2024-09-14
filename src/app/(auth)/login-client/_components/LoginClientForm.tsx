'use client';

import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRouter } from 'next/navigation';

export function LoginClientForm() {
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/dashboard',
    })
      .then((res) => {
        if (res && res.error === 'CredentialsSignin') {
          setError('Email e/ou senha inválidos!');
        } else {
          router.replace('/dashboard');
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login - Client Component</CardTitle>
        <CardDescription>Entre com email e senha.</CardDescription>
      </CardHeader>

      <form onSubmit={handleLogin}>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              name='email'
              type='email'
              placeholder='email@exemplo.com'
              required
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Senha</Label>
            <Input
              id='password'
              name='password'
              type='password'
              placeholder='*********'
              required
            />
          </div>
        </CardContent>

        <CardFooter className='flex flex-col gap-4'>
          {error && <p className='text-red-500'>{error}</p>}
          <Button className='w-full'>Entrar</Button>
          <Link href={'/register'}>Não possui uma conta?</Link>
        </CardFooter>
      </form>
    </Card>
  );
}
