'use client';

import { ArrowLeftIcon } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { LoginClientForm } from './_components/LoginClientForm';

export default function LoginClient() {
  const { status } = useSession();
  const router = useRouter();

  if (status === 'authenticated') return router.replace('/dashboard');

  return (
    <>
      <Link
        href={'/'}
        className='absolute top-4 left-4 flex items-center gap-2'
      >
        <ArrowLeftIcon size={18} />
        Voltar para a página inicial
      </Link>

      <LoginClientForm />
    </>
  );
}
