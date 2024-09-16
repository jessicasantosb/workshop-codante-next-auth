'use client';

import { MailIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import emailLogin from '../_actions/emailLogin';

export function EmailLoginForm() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login - Email</CardTitle>
        <CardDescription>
          Receba um link de acesso no seu email.
        </CardDescription>
      </CardHeader>

      <CardContent className='grid gap-4'>
        <form action={emailLogin}>
          <Button size={'full'} className='flex gap-2'>
            <MailIcon />
            Enviar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
