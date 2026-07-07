import Link from 'next/link';
import { getAllSites } from '@/data/sites';

export default function Home() {
  const sites = getAllSites();
  return (
    <main className="indexPage">
      <h1>HPデモ一覧</h1>
      <p className="indexLead">業種別HP制作サービスの営業サンプル用デモURL一覧です。</p>
      <ul className="indexList">
        {sites.map((site) => (
          <li key={site.slug}>
            <Link href={`/demo/${site.slug}`}>
              <span className="indexCompany">{site.companyName}</span>
              <span className="indexType">{site.businessType}</span>
              <span className="indexPath">/demo/{site.slug}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
