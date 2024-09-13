'use client';

import Link from 'next/link';

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
import login from '../_actions/login';

export function LoginForm() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login</CardTitle>
        <CardDescription>Entre com email e senha.</CardDescription>
      </CardHeader>

      <form action={login}>
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
          <Button className='w-full'>Entrar</Button>
          <Link href={'/register'}>Não possui uma conta?</Link>
        </CardFooter>
      </form>
    </Card>
  );
}
