import RegisterForm from '@/components/RegisterForm';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function Register() {
  return (
    <section className='w-full h-screen flex items-center justify-center px-4'>
      <Link
        href={'/'}
        className='absolute top-4 left-4 flex items-center gap-2'
      >
        <ArrowLeftIcon size={18} />
        Voltar para a página inicial
      </Link>

      <RegisterForm />
    </section>
  );
}
