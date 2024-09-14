import { SessionProvider } from 'next-auth/react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <section className='w-full h-screen flex items-center justify-center px-4'>
        {children}
      </section>
    </SessionProvider>
  );
}
