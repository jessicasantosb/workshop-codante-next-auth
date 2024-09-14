import Link from 'next/link';

import { logout } from '@/app/(auth)/_actions/logout';
import { auth } from '@/auth';
import { Button } from '@/components/ui/button';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
  const session = await auth();

  if (!session) redirect('/');

  return (
    <section className='min-h-screen w-full flex flex-col items-center gap-14 p-20'>
      <h1 className='text-center text-7xl font-extrabold bg-gradient-to-r from-zinc-400 via-stone-800 to-zinc-400  inline-block text-transparent bg-clip-text'>
        Dashboard
      </h1>

      <p className='text-xl text-muted-foreground tracking-widest'>
        Olá, {session?.user?.name}!
      </p>

      <hr className='w-full mx-auto my-2' />

      <div className='w-full max-w-96 flex flex-col gap-4'>
        <Button size={'full'} variant={'secondary'}>
          <Link href={'/'}>Página Inicial</Link>
        </Button>

        <form action={logout}>
          <Button size={'full'} variant={'logout'}>
            Logout
          </Button>
        </form>
      </div>
    </section>
  );
}
