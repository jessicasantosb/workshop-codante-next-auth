import Link from 'next/link';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

export function ErrorCard({
  errorMessage,
  reset,
}: {
  errorMessage: string;
  reset: () => void;
}) {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Erro ao fazer o login</CardTitle>
      </CardHeader>

      <CardContent className='grid gap-4'>
        <p className='text-red-500'>{errorMessage}</p>
      </CardContent>

      <CardFooter className='flex flex-col gap-4'>
        <Button className='w-full' onClick={reset}>
          Tentar Novamente
        </Button>
        <Link href={'/'}>Voltar para a página inicial</Link>
      </CardFooter>
    </Card>
  );
}
