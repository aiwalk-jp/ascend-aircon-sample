import { notFound } from 'next/navigation';
import { getSite, sites } from '@/data/sites';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(sites).map((slug) => ({ slug }));
}

export default async function DemoPage({ params }: Props) {
  const { slug } = await params;
  const site = getSite(slug);
  if (!site) notFound();

  const recruitHref = site.indeedUrl || `tel:${site.phone.replaceAll('-', '')}`;
  const recruitLabel = site.indeedUrl ? '採用情報を見る' : '採用について電話する';

  return (
    <main style={{ ['--primary' as string]: site.colors.primary, ['--secondary' as string]: site.colors.secondary, ['--accent' as string]: site.colors.accent, ['--bg' as string]: site.colors.bg }}>
      <header className="siteHeader">
        <div className="brand">{site.companyName}</div>
        <nav>
          <a href="#services">事業紹介</a>
          <a href="#works">施工事例</a>
          <a href="#recruit">採用情報</a>
          <a className="navTel" href={`tel:${site.phone.replaceAll('-', '')}`}>{site.phone}</a>
        </nav>
      </header>

      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">{site.businessType} / {site.area}</p>
          <h1>{site.catchcopy}</h1>
          <p>{site.lead}</p>
          <div className="ctaRow">
            <a className="primaryBtn" href={`tel:${site.phone.replaceAll('-', '')}`}>電話で相談する</a>
            <a className="ghostBtn" href={site.googleMapUrl} target="_blank">Googleマップを見る</a>
          </div>
          <p className="subText">{site.subText}</p>
        </div>
        <div className="heroImage"><img src={site.heroImage} alt={`${site.companyName}の施工イメージ`} /></div>
      </section>

      {site.services.length > 0 && <section id="services" className="section"><SectionTitle en="SERVICE" title="事業紹介" /><div className="cards">{site.services.map((x) => <Card key={x.title} {...x} />)}</div></section>}
      {site.strengths.length > 0 && <section className="section dark"><SectionTitle en="STRENGTH" title={`${site.companyName}の強み`} /><div className="cards">{site.strengths.map((x) => <Card key={x.title} {...x} />)}</div></section>}
      {site.works.length > 0 && <section id="works" className="section"><SectionTitle en="WORKS" title="施工事例" /><div className="cards">{site.works.map((x) => <Card key={x.title} {...x} />)}</div></section>}
      {site.flow.length > 0 && <section className="section"><SectionTitle en="FLOW" title="ご依頼の流れ" /><div className="flow">{site.flow.map((x, i) => <div className="flowItem" key={x.title}><span>{String(i + 1).padStart(2, '0')}</span><h3>{x.title}</h3><p>{x.text}</p></div>)}</div></section>}

      {site.recruit.length > 0 && <section id="recruit" className="recruit"><p className="eyebrow">RECRUIT</p><h2>採用情報</h2>{site.recruit.map((x) => <div key={x.title}><h3>{x.title}</h3><p>{x.text}</p></div>)}<a className="primaryBtn" href={recruitHref} target={site.indeedUrl ? '_blank' : undefined}>{recruitLabel}</a></section>}

      <footer className="footer">
        <div><strong>{site.companyName}</strong><p>{site.businessType}</p><p>{site.address}</p><p>{site.phone}</p></div>
        <a className="ghostBtn" href={site.googleMapUrl} target="_blank">Googleマップで確認</a>
      </footer>
    </main>
  );
}

function SectionTitle({ en, title }: { en: string; title: string }) {
  return <div className="sectionTitle"><p>{en}</p><h2>{title}</h2></div>;
}

function Card({ title, text }: { title: string; text: string }) {
  return <article className="card"><h3>{title}</h3><p>{text}</p></article>;
}
