import Navbar from '@/components/Navbar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { ThemeProvider } from '@/providers/theme-provider';
import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SMS',
  description: 'School Management System',
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <ScrollArea className='w-full h-screen'>
            <Navbar />
            {children}
          </ScrollArea>
        </ThemeProvider>
      </body>
    </html>
  );
}
