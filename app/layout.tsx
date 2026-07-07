import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'HPデモ一覧 | Aiwalk 業種別HP制作サービス',
    template: '%s',
  },
  description: 'Aiwalk 業種別HP制作サービスのデモサイトです。',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
