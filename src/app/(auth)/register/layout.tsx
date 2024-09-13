export default function RegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className='w-full h-screen flex items-center justify-center px-4'>
      {children}
    </section>
  );
}
