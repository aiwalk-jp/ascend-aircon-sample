import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PhotoFrame } from '@/components/PhotoFrame';
import { getAllSites, getSite } from '@/data/sites';
import { compactGridClass, gridClass } from '@/lib/grid';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSites().map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) return { title: 'ページが見つかりません' };
  return { title: `${site.name} | ${site.subName}`, description: site.description };
}

function SmallArrow() { return <span className="ml-2 inline-block transition group-hover:translate-x-1">→</span>; }

export default async function Home({ params }: Props) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  const base = `/demo/${site.slug}`;
  const heroServices = site.services.slice(0, Math.min(site.services.length, 3));
  const visibleServices = site.services.slice(0, Math.min(site.services.length, 6));
  // TOPページの施工事例は2件まで表示（「選ばれる理由」との高さバランスを揃えるため）
  const visibleWorks = site.works.slice(0, 2);
  const hasStats = site.stats.length > 0;
  const hasStrengths = site.strengths.length > 0;
  const hasWorks = site.works.length > 0;
  const hasServices = visibleServices.length > 0;
  const hasFlow = site.flow.length > 0;

  return (
    <>
      <Header site={site} active="home" />
      <main>
        <section className="relative overflow-hidden bg-slate-950 text-white">
          <div className="absolute inset-0">
            {site.heroImage ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={site.heroImage} alt={`${site.name}の施工風景`} className="h-full w-full object-cover" />
              </>
            ) : (
              <div className="dark-panel h-full w-full" />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[#04343a] via-[#04343a]/78 via-[42%] to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/10" />
          </div>
          <div className="relative container-x min-h-[500px] py-10 md:min-h-[520px]">
            <div className="grid h-full min-h-[430px] items-center gap-8 lg:grid-cols-[.92fr_1.08fr]">
              <div className="max-w-2xl">
                <p className="inline-flex rounded-full bg-white/12 px-4 py-2 text-sm font-black text-teal-100 ring-1 ring-white/20">{site.area}</p>
                <h1 className="mt-5 whitespace-pre-line text-[36px] font-black leading-[1.1] tracking-tight md:text-[52px]">{site.tagline}</h1>
                <p className="mt-5 max-w-xl text-[15px] font-medium leading-8 text-slate-100 md:text-[17px]">{site.lead}</p>
                <div className="mt-7 flex flex-wrap gap-4">
                  <a href={`tel:${site.tel}`} className="gold-btn rounded-xl px-7 py-4 text-center font-black text-white transition hover:-translate-y-1">電話で相談する<br /><span className="text-sm font-bold">{site.tel}</span></a>
                  <Link href={`${base}/service`} className="group rounded-xl border border-white/55 bg-white/5 px-7 py-4 font-black text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white hover:text-slate-950">事業を見る<SmallArrow /></Link>
                </div>
                {heroServices.length > 0 && (
                  <div className={`mt-8 grid max-w-[700px] gap-4 ${compactGridClass(heroServices.length)}`}>
                    {heroServices.map((s) => (
                      <div key={s.name} className="rounded-2xl bg-white/12 p-5 shadow-2xl ring-1 ring-white/10 backdrop-blur-md">
                        <p className="text-[11px] font-black tracking-[.18em] text-teal-200">{s.label}</p>
                        <p className="mt-2 text-xl font-black leading-snug">{s.name}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative hidden min-h-[410px] lg:block">
                <div className="absolute bottom-4 right-0 w-full max-w-[340px] rounded-3xl bg-white p-6 text-slate-950 shadow-[0_25px_70px_rgba(0,0,0,.28)] ring-1 ring-slate-200">
                  <p className="text-sm font-black text-slate-500">対応エリア</p>
                  <p className="mt-2 text-3xl font-black text-teal-800">{site.area}</p>
                  <p className="mt-2 text-sm font-bold text-slate-600">{site.areaNote}</p>
                  <a href={site.mapUrl} target="_blank" rel="noreferrer" className="group mt-5 inline-flex w-full items-center justify-center rounded-xl border border-slate-200 px-4 py-3 font-black transition hover:bg-slate-950 hover:text-white">Googleマップで見る<SmallArrow /></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {hasStats && (
          <section className="relative z-10 -mt-6 bg-slate-50 px-5 pb-2">
            <div className={`mx-auto grid max-w-7xl gap-3 rounded-[2rem] bg-white p-4 shadow-[0_22px_70px_rgba(15,23,42,.14)] ring-1 ring-slate-200 ${compactGridClass(site.stats.length)}`}>
              {site.stats.map((item, i) => (
                <div key={item.label} className="flex gap-4 rounded-3xl p-4">
                  <div className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-teal-50 text-sm font-black text-teal-800 shadow-inner ring-1 ring-teal-100">0{i + 1}</div>
                  <div>
                    <p className="text-xs font-black text-slate-500">{item.label}</p>
                    <p className="mt-1 text-lg font-black text-teal-900">{item.value}</p>
                    <p className="mt-1 text-xs font-bold text-slate-500">{item.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(hasStrengths || hasWorks) && (
          <section className="container-x py-14">
            <div className={`grid items-start gap-8 ${hasStrengths && hasWorks ? 'lg:grid-cols-[.96fr_1.04fr]' : 'grid-cols-1'}`}>
              {hasStrengths && (
                <div className="h-full">
                  <p className="section-label">STRENGTH</p>
                  <h2 className="mt-4 text-4xl font-black tracking-tight">選ばれる理由</h2>
                  <div className={`mt-8 grid gap-5 ${hasWorks ? 'md:grid-cols-3 lg:grid-cols-1' : gridClass(site.strengths.length)}`}>
                    {site.strengths.map((s, i) => (
                      <div key={s.title} className="lux-card-strong group overflow-hidden rounded-[1.7rem] p-6 transition hover:-translate-y-1">
                        <div className="flex items-start gap-5">
                          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-teal-800 to-slate-950 text-sm font-black text-white shadow-lg">0{i + 1}</div>
                          <div>
                            <p className="text-[11px] font-black tracking-[.18em] text-teal-700">{s.label}</p>
                            <h3 className="mt-2 text-xl font-black leading-snug">{s.title}</h3>
                            <p className="mt-3 text-sm leading-7 text-slate-600">{s.text}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {hasWorks && (
                <div id="works" className="h-full">
                  <div className="flex items-end justify-between gap-6">
                    <div>
                      <p className="section-label">WORKS</p>
                      <h2 className="mt-4 text-4xl font-black tracking-tight">施工事例</h2>
                    </div>
                    <a href="#services" className="group hidden rounded-full border border-slate-300 bg-white px-6 py-3 font-black shadow-sm md:inline-block">対応サービス<SmallArrow /></a>
                  </div>
                  <div className="mt-8 rounded-[2rem] bg-gradient-to-br from-[#063b42] to-[#071525] p-6 text-white shadow-[0_28px_80px_rgba(15,23,42,.20)]">
                    <div className={`grid gap-5 ${gridClass(visibleWorks.length, 2)}`}>
                      {visibleWorks.map((w) => (
                        <article key={`${w.title}-${w.area}`} className="flex h-full flex-col overflow-hidden rounded-2xl bg-white/8 p-3 ring-1 ring-white/10">
                          <PhotoFrame label={`${w.title}の施工前後写真`} tone="dark" src={w.image} className="min-h-[200px] rounded-xl border-white/10 shadow-none" />
                          <div className="flex flex-1 flex-col p-3">
                            <p className="text-lg font-black">{w.title}（{w.area}）</p>
                            {w.description && <p className="mt-3 flex-1 rounded-2xl bg-white/8 p-4 text-sm font-bold leading-7 text-slate-200 ring-1 ring-white/10">{w.description}</p>}
                            <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold text-teal-50"><span className="rounded-full bg-white/10 px-3 py-1">{w.period}</span><span className="rounded-full bg-white/10 px-3 py-1">写真差し替え</span></div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>
        )}

        {hasServices && (
          <section id="services" className="bg-white/60 py-14">
            <div className="container-x">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="section-label">SERVICE</p>
                  <h2 className="mt-4 text-4xl font-black tracking-tight">対応サービス</h2>
                </div>
                <Link href={`${base}/service`} className="group hidden rounded-full border border-slate-300 bg-white px-6 py-3 font-black shadow-sm md:inline-block">詳しく見る<SmallArrow /></Link>
              </div>
              <div className={`mt-9 grid gap-5 ${gridClass(visibleServices.length)}`}>
                {visibleServices.map((s) => (
                  <div key={s.name} className="lux-card group rounded-[1.5rem] p-7 transition hover:-translate-y-1 hover:shadow-[0_30px_80px_rgba(15,23,42,.16)]">
                    <p className="text-[11px] font-black tracking-[.20em] text-teal-700">{s.label}</p>
                    <h3 className="mt-3 text-2xl font-black">{s.name}</h3>
                    <p className="mt-4 leading-8 text-slate-600">{s.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {hasFlow && (
          <section className="container-x py-14">
            <p className="section-label">FLOW</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">ご相談から施工までの流れ</h2>
            <div className={`mt-9 grid gap-4 ${compactGridClass(site.flow.length)}`}>
              {site.flow.map((f, i) => (
                <div key={f} className="relative rounded-[1.4rem] bg-white p-5 text-center shadow-[0_15px_45px_rgba(15,23,42,.08)] ring-1 ring-slate-200">
                  <div className="mx-auto grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-teal-700 to-slate-950 text-sm font-black text-white shadow-lg">{i + 1}</div>
                  <p className="mt-4 text-sm font-black leading-6">{f}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        <section id="contact" className="container-x pb-14">
          <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-teal-800 to-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,.22)] md:flex md:items-center md:justify-between md:p-10">
            <div>
              <p className="section-label text-teal-200">CONTACT</p>
              <h2 className="mt-3 text-3xl font-black leading-tight md:text-4xl">エアコン・空調の気になること、まずはご相談ください。</h2>
              <p className="mt-4 text-slate-200">現地確認・お見積り・採用相談など、お電話でお気軽にお問い合わせください。</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-3 md:mt-0"><a href={`tel:${site.tel}`} className="inline-flex rounded-2xl bg-white px-8 py-4 text-xl font-black text-teal-900 shadow-xl">{site.tel}</a><a href={site.mapUrl} target="_blank" rel="noreferrer" className="inline-flex rounded-2xl border border-white/25 px-8 py-4 font-black text-white transition hover:bg-white hover:text-teal-900">Googleマップで見る</a></div>
          </div>
        </section>
      </main>
      <Footer site={site} />
    </>
  );
}
