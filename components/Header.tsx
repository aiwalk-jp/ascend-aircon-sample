import Link from 'next/link';
import type { SiteData } from '@/data/types';

type Active = 'home' | 'service' | 'recruit';

export function Header({ site, active = 'home' }: { site: SiteData; active?: Active }) {
  const base = `/demo/${site.slug}`;
  const navClass = (key: Active) =>
    active === key
      ? 'border-b-2 border-teal-700 py-2 text-teal-800'
      : 'py-2 hover:text-teal-700';

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-[0_10px_28px_rgba(15,23,42,.08)] backdrop-blur-xl">
      <div className="container-x flex h-[74px] items-center justify-between">
        <Link href={base} className="flex items-center gap-3">
          {site.logo ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={site.logo} alt={`${site.name}のロゴ`} className="h-11 w-auto object-contain" />
          ) : (
            <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-teal-700 to-slate-950 text-lg font-black text-white shadow-lg">{site.logoText}</div>
          )}
          <div>
            <p className="text-xl font-black tracking-tight text-slate-950">{site.name}</p>
            <p className="hidden text-xs font-bold text-slate-500 sm:block">{site.subName}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-bold text-slate-700 lg:flex">
          <Link href={base} className={navClass('home')}>ホーム</Link>
          <Link href={`${base}/service`} className={navClass('service')}>事業紹介</Link>
          <a href={`${base}#works`} className="py-2 hover:text-teal-700">施工事例</a>
          <a href={`${base}#services`} className="py-2 hover:text-teal-700">対応サービス</a>
          <Link href={`${base}/recruit`} className={navClass('recruit')}>採用情報</Link>
        </nav>
        <div className="flex items-center gap-4">
          <a href={`tel:${site.tel}`} className="hidden text-right md:block">
            <p className="text-lg font-black text-slate-950">{site.tel}</p>
            <p className="text-xs font-bold text-slate-500">{site.hours}</p>
          </a>
          <a href={`${base}#contact`} className="rounded-xl bg-teal-700 px-5 py-3 text-sm font-black text-white shadow-lg shadow-teal-900/20 transition hover:-translate-y-0.5 hover:bg-teal-800">お問い合わせ</a>
        </div>
      </div>
    </header>
  );
}
