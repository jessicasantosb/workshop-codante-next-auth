import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { LoginForm } from './_components/LoginForm';

export default function Login() {
  return (
    <section className='relative w-full h-screen flex items-center justify-center px-4'>
      <Link
        href={'/'}
        className='absolute top-4 left-4 flex items-center gap-2'
      >
        <ArrowLeftIcon size={18} />
        Voltar para a página inicial
      </Link>

      <LoginForm />
    </section>
  );
}
