import { auth } from '@/auth';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { GithubLoginForm } from './_components/GithubLoginForm';

export default async function GithubLogin() {
  const session = await auth();

  if (session) redirect('/dashboard');

  return (
    <>
      <Link
        href={'/'}
        className='absolute top-4 left-4 flex items-center gap-2'
      >
        <ArrowLeftIcon size={18} />
        Voltar para a página inicial
      </Link>

      <GithubLoginForm />
    </>
  );
}
