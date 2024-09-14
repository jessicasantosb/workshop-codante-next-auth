'use client';

import { Button } from '@/components/ui/button';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Dashboard() {
  const { data, status } = useSession();

  const isLogged = status === 'authenticated';
  const isLoading = status === 'loading';
  const userName = data?.user?.name;

  return (
    <section className='min-h-screen w-full flex flex-col items-center gap-14 p-20'>
      <h1 className='text-center text-7xl font-extrabold bg-gradient-to-r from-zinc-400 via-stone-800 to-zinc-400  inline-block text-transparent bg-clip-text'>
        Dashboard
      </h1>

      {isLoading ? (
        <p>Carregando...</p>
      ) : (
        <>
          {isLogged && (
            <p className='text-xl tracking-widest'>Olá, {userName}!</p>
          )}

          <div className='w-full max-w-96 flex items-center gap-4'>
            <Button size={'full'} variant={'secondary'}>
              <Link href={'/'}>Página Inicial</Link>
            </Button>

            {isLogged && (
              <Button size={'full'} variant={'logout'}>
                Logout
              </Button>
            )}
          </div>
        </>
      )}
    </section>
  );
}
