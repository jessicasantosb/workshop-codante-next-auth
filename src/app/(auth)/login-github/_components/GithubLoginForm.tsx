'use client';

import { Github } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import githubLogin from '../_actions/githubLogin';

export function GithubLoginForm() {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle className='text-2xl'>Login - Github Provider</CardTitle>
        <CardDescription>Entre com o Github.</CardDescription>
      </CardHeader>

      <CardContent className='grid gap-4'>
        <form action={githubLogin}>
          <Button size={'full'} className='flex gap-2'>
            <Github />
            Entrar
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
