import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { LayoutProps } from '../.next/types/app/layout';

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
