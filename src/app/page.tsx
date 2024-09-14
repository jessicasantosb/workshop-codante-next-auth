import { Button } from '@/components/ui/button';
import { Github, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <section className='min-h-screen w-full flex flex-col items-center gap-14 p-20'>
      <h1 className='text-center text-7xl font-extrabold bg-gradient-to-r from-zinc-400 via-stone-800 to-zinc-400  inline-block text-transparent bg-clip-text'>
        Workshop Auth.js
      </h1>

      <div className='w-full max-w-sm flex items-center flex-col flex-wrap gap-4'>
        <div className='w-full flex gap-4'>
          <Button variant={'secondary'} size={'full'}>
            <Link href={'/dashboard'}>Dashboard</Link>
          </Button>
          <Button size={'full'}>
            <Link href={'/api/auth/signin'}>Login simples</Link>
          </Button>
        </div>

        <Button size={'full'}>
          <Link href={'/login-server'}>Login - Server Components</Link>
        </Button>
        <Button size={'full'}>
          <Link href={'/login-client'}>Login - Client Components</Link>
        </Button>
        <Button size={'full'} className='flex gap-2'>
          <Github />
          <Link href={'/login-github'}>Login com Github</Link>
        </Button>
        <Button size={'full'} className='flex gap-2'>
          <Mail />
          <Link href={'/'}>Login com Email</Link>
        </Button>
      </div>
    </section>
  );
}
