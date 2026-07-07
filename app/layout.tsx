import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HP Demo Site',
  description: 'Aiwalk industry website demo'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
