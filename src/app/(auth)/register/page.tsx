import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

import RegisterForm from './_components/RegisterForm';

export default function Register() {
  return (
    <>
      <Link
        href={'/'}
        className='absolute top-4 left-4 flex items-center gap-2'
      >
        <ArrowLeftIcon size={18} />
        Voltar para a página inicial
      </Link>

      <RegisterForm />
    </>
  );
}
