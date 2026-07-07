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
  return { title: `採用情報 | ${site.name}`, description: site.recruit.title };
}

function gridClass(count: number) {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2) return 'sm:grid-cols-2';
  if (count === 3) return 'sm:grid-cols-2 lg:grid-cols-3';
  return 'sm:grid-cols-2';
}

export default async function RecruitPage({ params }: Props) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  const jobs = site.recruit.jobs;
  const points = site.recruit.points;

  return (
    <>
      <Header site={site} active="recruit" />
      <main>
        <section className="dark-panel flex min-h-[430px] items-center px-5 py-12 text-white md:py-14">
          <div className="container-x grid w-full items-center gap-10 md:grid-cols-[.9fr_1.1fr]">
            <div>
              <p className="section-label text-teal-200">RECRUIT</p>
              <h1 className="mt-4 text-5xl font-black leading-tight">採用情報</h1>
              <p className="mt-5 text-2xl font-black">{site.recruit.title}</p>
              <p className="mt-4 text-lg leading-9 text-slate-200">{site.recruit.catch}</p>
              <a href={site.recruit.applyUrl || '#recruit-contact'} target={site.recruit.applyUrl ? '_blank' : undefined} rel={site.recruit.applyUrl ? 'noreferrer' : undefined} className="mt-8 inline-flex rounded-2xl bg-white px-8 py-4 font-black text-teal-900 shadow-xl">応募・相談する</a>
            </div>
            <PhotoFrame label="スタッフ写真・現場作業風景を挿入" tone="dark" src={site.recruit.image} className="h-[260px] rounded-[2rem] md:h-[280px]" />
          </div>
        </section>
        <section className="container-x py-14">
          <div className={`grid gap-8 ${jobs.length && points.length ? 'lg:grid-cols-[.95fr_1.05fr]' : 'grid-cols-1'}`}>
            {jobs.length > 0 && (
              <div className="lux-card-strong rounded-[2rem] p-8">
                <p className="section-label">JOB</p>
                <h2 className="mt-4 text-3xl font-black">募集職種</h2>
                <div className="mt-8 divide-y divide-slate-200">
                  {jobs.map((job) => (
                    <div key={job} className="flex items-center justify-between gap-4 py-5">
                      <p className="text-xl font-black">{job}</p>
                      <span className="rounded-full bg-teal-50 px-4 py-2 text-sm font-black text-teal-800">募集中</span>
                    </div>
                  ))}
                </div>
                <p className="mt-7 leading-8 text-slate-600">{site.recruit.message}</p>
              </div>
            )}
            {points.length > 0 && (
              <div className={`grid gap-5 ${gridClass(points.length)}`}>
                {points.map((point, i) => (
                  <div key={point} className="lux-card rounded-[1.7rem] p-7">
                    <p className="text-sm font-black text-teal-700">0{i + 1}</p>
                    <p className="mt-4 text-xl font-black leading-snug">{point}</p>
                  </div>
                ))}
                <PhotoFrame label="職場の雰囲気・スタッフ写真" src={site.recruit.subImage || site.recruit.image} className={points.length === 1 ? 'min-h-[210px] rounded-[1.7rem]' : 'sm:col-span-2 min-h-[210px] rounded-[1.7rem]'} />
              </div>
            )}
          </div>
        </section>
        <section id="recruit-contact" className="container-x pb-14">
          <div className="rounded-[2rem] bg-gradient-to-br from-teal-800 to-slate-950 p-8 text-white shadow-[0_30px_90px_rgba(15,23,42,.22)] md:flex md:items-center md:justify-between">
            <div>
              <p className="section-label text-teal-200">ENTRY</p>
              <h2 className="mt-3 text-3xl font-black">応募・採用相談はこちら</h2>
              <p className="mt-3 text-slate-200">Indeed求人URLを設定すれば、応募ボタンの遷移先を求人ページへ差し替えできます。</p>
            </div>
            <a href={`tel:${site.tel}`} className="mt-6 inline-flex rounded-2xl bg-white px-8 py-4 text-xl font-black text-teal-900 shadow-xl md:mt-0">{site.tel}</a>
          </div>
        </section>
      </main>
      <Footer site={site} />
    </>
  );
}
