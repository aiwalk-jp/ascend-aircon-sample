import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { PhotoFrame } from '@/components/PhotoFrame';
import { getAllSites, getSite } from '@/data/sites';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllSites().map((site) => ({ slug: site.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) return { title: 'ページが見つかりません' };
  return { title: `事業紹介 | ${site.name}`, description: `${site.name}の対応サービス一覧です。` };
}

function gridClass(count: number) {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2) return 'md:grid-cols-2';
  if (count === 3) return 'md:grid-cols-3';
  if (count === 4) return 'md:grid-cols-2';
  return 'md:grid-cols-2';
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  return (
    <div className={site.brandClass}>
      <Header site={site} active="service" />
      <main>
        <section className="dark-panel flex min-h-[430px] items-center px-5 py-12 text-white md:py-14">
          <div className="container-x grid w-full items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="section-label text-teal-200">SERVICE</p>
              <h1 className="mt-4 text-5xl font-black">事業紹介</h1>
              <p className="mt-5 text-lg leading-9 text-slate-200">{site.serviceLead ?? '住まい・店舗の状況に合わせて、現地確認・提案・施工・アフターまで対応します。'}</p>
              {site.serviceNote && <p className="mt-5 rounded-2xl bg-white/10 px-5 py-4 text-sm leading-7 text-slate-100 ring-1 ring-white/15">{site.serviceNote}</p>}
            </div>
            <PhotoFrame label="施工中・現地確認・スタッフ写真を挿入" tone="dark" src={site.serviceHeroImage ?? site.heroImage} className="h-[260px] rounded-[2rem] md:h-[280px]" />
          </div>
        </section>
        <section className="container-x py-14">
          {site.services.length > 0 ? (
            <div className={`grid gap-7 ${gridClass(site.services.length)}`}>
              {site.services.map((s) => (
                <div key={s.name} className="lux-card-strong h-full overflow-hidden rounded-[2rem] transition hover:-translate-y-1">
                  <div className="grid h-full min-h-[340px] items-stretch gap-0 lg:grid-cols-[.82fr_1fr]">
                    <PhotoFrame label={`${s.name}の施工写真`} src={s.image} className="h-full min-h-[320px] rounded-none border-0 shadow-none" />
                    <div className="p-8">
                      <p className="text-[11px] font-black tracking-[.20em] text-teal-700">{s.label}</p>
                      <h2 className="mt-3 text-3xl font-black">{s.name}</h2>
                      <p className="mt-4 leading-8 text-slate-600">{s.text}</p>
                      <p className="mt-6 rounded-2xl bg-teal-50 p-4 text-sm font-bold leading-7 text-teal-900">現地の状況をもとに、必要な工事内容を分かりやすくご説明します。</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="lux-card-strong rounded-[2rem] p-8 text-center">
              <p className="text-lg font-black">事業内容は準備中です。</p>
              <p className="mt-3 text-slate-600">必要に応じてサービス情報を追加してください。</p>
            </div>
          )}
        </section>
      </main>
      <Footer site={site} />
    </div>
  );
}
