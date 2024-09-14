'use client';

import { ErrorCard } from './_components/ErrorCard';

export default function LoginClientError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return <ErrorCard errorMessage={error.message} reset={reset} />;
}
