import Link from 'next/link';
import { sites } from '@/data/sites';

export default function Home() {
  return (
    <main className="indexPage">
      <h1>HPデモ一覧</h1>
      <p>営業サンプル用のデモURL一覧です。</p>
      <ul>
        {Object.values(sites).map((site) => (
          <li key={site.slug}>
            <Link href={`/demo/${site.slug}`}>{site.companyName} / {site.businessType}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
