import type { SiteData } from '@/data/types';

export function Footer({ site }: { site: SiteData }) {
  return (
    <footer className="bg-slate-950 text-white">
      <div className="container-x grid gap-8 py-12 md:grid-cols-[1fr_1fr]">
        <div>
          {site.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={site.logo} alt={`${site.name}のロゴ`} className="mb-4 h-12 w-auto object-contain" />
          )}
          <p className="text-2xl font-black">{site.name}</p>
          <p className="mt-2 text-slate-300">{site.subName}</p>
          <p className="mt-6 max-w-xl text-sm leading-8 text-slate-400">{site.description}</p>
          <p className="mt-5 text-sm leading-7 text-slate-400">TEL: {site.tel}</p>
        </div>
        <div className="rounded-3xl bg-white/8 p-6 ring-1 ring-white/10">
          <p className="font-black">会社情報</p>
          {site.representative && <p className="mt-4 text-sm font-bold leading-7 text-slate-300">{site.representative}</p>}
          <p className="mt-2 text-sm font-bold leading-7 text-slate-300">{site.address}</p>
          {site.license && <p className="mt-2 text-sm font-bold leading-7 text-slate-300">建設業許可：{site.license}</p>}
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${site.tel}`} className="inline-flex rounded-2xl bg-white px-6 py-3 font-black text-slate-950 transition hover:-translate-y-0.5">電話で相談する</a>
            <a href={site.mapUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl border border-white/20 px-6 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-white hover:text-slate-950">Googleマップで見る</a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-slate-500">© {site.name}</div>
    </footer>
  );
}
