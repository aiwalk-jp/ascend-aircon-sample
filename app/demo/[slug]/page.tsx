import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DemoSite from '@/components/DemoSite';
import { getAllSites, getSite } from '@/data/sites';

type Props = { params: Promise<{ slug: string }> };

// ビルド時に全 slug を静的生成
export function generateStaticParams() {
  return getAllSites().map((site) => ({ slug: site.slug }));
}

// slug ごとにメタデータを生成
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) return { title: 'ページが見つかりません' };
  return {
    title: `${site.companyName} | ${site.businessType}`,
    description: site.lead,
  };
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  return <DemoSite site={site} />;
}
