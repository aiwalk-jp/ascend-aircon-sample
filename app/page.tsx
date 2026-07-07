import Link from 'next/link';
import { getAllSites } from '@/data/sites';

export default function Home() {
  const sites = getAllSites();
  return (
    <main className="container-x py-16">
      <p className="section-label">DEMO</p>
      <h1 className="mt-4 text-4xl font-black tracking-tight">HPデモ一覧</h1>
      <p className="mt-4 max-w-2xl leading-8 text-slate-600">
        Aiwalk 業種別HP制作サービスの営業サンプル用デモURL一覧です。
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {sites.map((site) => (
          <Link
            key={site.slug}
            href={`/demo/${site.slug}`}
            className="lux-card-strong group rounded-[1.7rem] p-7 transition hover:-translate-y-1"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal-800 to-slate-950 text-lg font-black text-white shadow-lg">
                {site.logoText}
              </div>
              <div>
                <p className="text-2xl font-black tracking-tight text-slate-950">{site.name}</p>
                <p className="mt-1 text-sm font-bold text-slate-500">{site.subName}</p>
              </div>
            </div>
            <p className="mt-5 inline-flex rounded-full bg-teal-50 px-4 py-2 font-mono text-sm font-black text-teal-800">
              /demo/{site.slug}
              <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>
            </p>
          </Link>
        ))}
      </div>
    </main>
  );
}
