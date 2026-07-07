import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HPデモ一覧 | Aiwalk 業種別HP制作サービス',
  description: 'Aiwalk 業種別HP制作サービスのデモサイトです。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
