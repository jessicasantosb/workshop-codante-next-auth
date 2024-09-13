'use client';

import Link from 'next/link';

import register from '@/app/(auth)/register/_actions/register';
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

export default function RegisterForm() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Cadastre-se</CardTitle>
        <CardDescription>Crie uma conta gratuitamente.</CardDescription>
      </CardHeader>

      <form action={register}>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Nome</Label>
            <Input
              id='nome'
              name='name'
              type='nome'
              placeholder='Fulano de Tal'
              required
            />
          </div>
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
          <Button className='w-full'>Registrar</Button>
          <Link href={'/login'}>Já possui conta?</Link>
        </CardFooter>
      </form>
    </Card>
  );
}
