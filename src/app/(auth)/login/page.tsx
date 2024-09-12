import { ArrowLeftIcon } from 'lucide-react';
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

export default function Login() {
  return (
    <section className='relative w-full h-screen flex items-center justify-center px-4'>
      <Link href={'/'} className='absolute top-4 left-4 flex items-center gap-2'>
        <ArrowLeftIcon size={18}/>
        Voltar para a página inicial
      </Link>

      <Card className='w-full max-w-sm'>
        <CardHeader>
          <CardTitle className='text-2xl'>Login</CardTitle>
          <CardDescription>Entre com email e senha.</CardDescription>
        </CardHeader>
        <CardContent className='grid gap-4'>
          <div className='grid gap-2'>
            <Label htmlFor='email'>Email</Label>
            <Input
              id='email'
              type='email'
              placeholder='email@exemplo.com'
              required
            />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='password'>Senha</Label>
            <Input
              id='password'
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
      </Card>
    </section>
  );
}
