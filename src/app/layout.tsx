import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

import { Footer, Header } from '@/components/molecules';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: 'Bienvenido a LuceEdu',
  description:
    'LuceEdu es una plataforma de educación en línea que ofrece cursos y materiales educativos para estudiantes de todas las edades.'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} font-sans min-h-screen bg-neutral-50`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
