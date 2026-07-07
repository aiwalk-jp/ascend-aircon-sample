import type { CSSProperties } from 'react';
import type { CardItem, FlowItem, SiteData, WorkItem } from '@/data/types';
import { telHref } from '@/lib/format';

/**
 * 工事業・職人系企業向けの高品質デモテンプレート。
 * どの会社データ（SiteData）でも、画像やセクションが欠けても崩れないよう設計。
 */
export default function DemoSite({ site }: { site: SiteData }) {
  const tel = telHref(site.phone);
  const hasIndeed = Boolean(site.indeedUrl);
  const recruitHref = hasIndeed ? site.indeedUrl! : tel;
  const recruitLabel = hasIndeed ? '採用情報を見る（Indeed）' : '採用について電話で相談する';

  // 配色を CSS 変数として流し込む
  const themeStyle = {
    '--primary': site.colors.primary,
    '--secondary': site.colors.secondary,
    '--accent': site.colors.accent,
    '--bg': site.colors.bg,
  } as CSSProperties;

  return (
    <main className="demo" style={themeStyle}>
      <header className="siteHeader">
        <div className="brand">{site.companyNameEn || site.companyName}</div>
        <nav className="nav">
          {site.services.length > 0 && <a href="#services">事業紹介</a>}
          {site.strengths.length > 0 && <a href="#strengths">選ばれる理由</a>}
          {site.works.length > 0 && <a href="#works">施工事例</a>}
          {site.recruit.length > 0 && <a href="#recruit">採用情報</a>}
          <a className="navTel" href={tel}>
            <span className="navTelLabel">お電話</span>
            {site.phone}
          </a>
        </nav>
      </header>

      {/* ヒーロー */}
      <section className="hero">
        <div className="heroText">
          <p className="eyebrow">
            {site.businessType} <span className="dot">/</span> {site.area}
          </p>
          <h1>{site.catchcopy}</h1>
          <p className="lead">{site.lead}</p>
          <div className="ctaRow">
            <a className="primaryBtn" href={tel}>
              電話で相談する
            </a>
            <a className="ghostBtn" href={site.googleMapUrl} target="_blank" rel="noopener noreferrer">
              Googleマップで見る
            </a>
          </div>
          <p className="subText">{site.subText}</p>
        </div>
        <div className="heroMedia">
          <HeroVisual site={site} />
        </div>
      </section>

      {/* 事業紹介 */}
      {site.services.length > 0 && (
        <section id="services" className="section">
          <SectionTitle en="SERVICE" title="事業紹介" />
          <CardGrid items={site.services} />
        </section>
      )}

      {/* 選ばれる理由 / 強み */}
      {site.strengths.length > 0 && (
        <section id="strengths" className="section dark">
          <SectionTitle en="STRENGTH" title={`${site.companyName}が選ばれる理由`} />
          <CardGrid items={site.strengths} numbered />
        </section>
      )}

      {/* 施工事例 */}
      {site.works.length > 0 && (
        <section id="works" className="section">
          <SectionTitle en="WORKS" title="施工事例" />
          <div className="grid worksGrid">
            {site.works.map((work) => (
              <WorkCard key={work.title} work={work} />
            ))}
          </div>
        </section>
      )}

      {/* ご依頼の流れ */}
      {site.flow.length > 0 && (
        <section id="flow" className="section dark">
          <SectionTitle en="FLOW" title="ご依頼の流れ" />
          <div className="grid flowGrid">
            {site.flow.map((step, i) => (
              <FlowCard key={step.title} step={step} index={i + 1} />
            ))}
          </div>
        </section>
      )}

      {/* 採用情報 */}
      {site.recruit.length > 0 && (
        <section id="recruit" className="recruit">
          <p className="eyebrow light">RECRUIT</p>
          <h2>採用情報</h2>
          <div className="recruitBody">
            {site.recruit.map((item) => (
              <div key={item.title} className="recruitItem">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <a
            className="primaryBtn"
            href={recruitHref}
            target={hasIndeed ? '_blank' : undefined}
            rel={hasIndeed ? 'noopener noreferrer' : undefined}
          >
            {recruitLabel}
          </a>
        </section>
      )}

      {/* お問い合わせ / 地図 */}
      <section id="contact" className="contact">
        <SectionTitle en="CONTACT" title="お問い合わせ" />
        <div className="contactCard">
          <p className="contactLead">
            ご相談・お見積りは無料です。{site.area}、お気軽にご連絡ください。
          </p>
          <div className="ctaRow center">
            <a className="primaryBtn" href={tel}>
              {site.phone} に電話する
            </a>
            <a className="ghostBtn dark" href={site.googleMapUrl} target="_blank" rel="noopener noreferrer">
              Googleマップで場所を見る
            </a>
          </div>
        </div>
      </section>

      {/* フッター */}
      <footer className="footer">
        <div className="footerInfo">
          <strong>{site.companyName}</strong>
          <p>{site.businessType}</p>
          <p>{site.address}</p>
          <p>
            <a href={tel}>{site.phone}</a>
          </p>
          <p className="footerArea">{site.area}</p>
        </div>
        <a className="ghostBtn" href={site.googleMapUrl} target="_blank" rel="noopener noreferrer">
          Googleマップで確認
        </a>
      </footer>
    </main>
  );
}

/** ヒーロー画像。無ければ会社イニシャル入りのグラデーションプレースホルダー */
function HeroVisual({ site }: { site: SiteData }) {
  if (site.heroImage) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={site.heroImage} alt={`${site.companyName}の施工イメージ`} />;
  }
  const initial = (site.companyNameEn || site.companyName).trim().charAt(0).toUpperCase();
  return (
    <div className="heroPlaceholder" aria-hidden="true">
      <span className="placeholderMark">{initial}</span>
      <span className="placeholderText">{site.businessType}</span>
    </div>
  );
}

function SectionTitle({ en, title }: { en: string; title: string }) {
  return (
    <div className="sectionTitle">
      <p>{en}</p>
      <h2>{title}</h2>
    </div>
  );
}

/** サービス・強み用のカードグリッド（少数でも中央寄せで崩れない） */
function CardGrid({ items, numbered = false }: { items: CardItem[]; numbered?: boolean }) {
  return (
    <div className="grid cardGrid">
      {items.map((item, i) => (
        <article className="card" key={item.title}>
          {numbered && <span className="cardNum">{String(i + 1).padStart(2, '0')}</span>}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </article>
      ))}
    </div>
  );
}

/** 施工事例カード（画像枠 + 説明文枠）。画像が無ければプレースホルダー */
function WorkCard({ work }: { work: WorkItem }) {
  const initial = work.title.trim().charAt(0);
  return (
    <article className="workCard">
      <div className="workThumb">
        {work.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={work.image} alt={work.title} />
        ) : (
          <div className="workPlaceholder" aria-hidden="true">
            <span>{initial}</span>
          </div>
        )}
      </div>
      <div className="workBody">
        <h3>{work.title}</h3>
        <p>{work.text}</p>
      </div>
    </article>
  );
}

function FlowCard({ step, index }: { step: FlowItem; index: number }) {
  return (
    <div className="flowItem">
      <span className="flowNum">{String(index).padStart(2, '0')}</span>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </div>
  );
}
