// 会社デモサイトのデータ型。
// trade-hp-template-v12 のテンプレート構造をそのまま踏襲し、
// 企業別URL（/demo/<slug>）で出し分けできるよう slug 等を追加している。

export type Stat = { label: string; value: string; note: string };
export type Service = { name: string; label: string; text: string; image?: string };
export type Strength = { title: string; text: string; label: string };
export type Work = { title: string; area: string; period: string; description: string; image?: string };

export type Recruit = {
  title: string;
  catch: string;
  jobs: string[];
  points: string[];
  message: string;
  /** Indeed等の求人URL。設定すると応募ボタンの遷移先を差し替え。空文字ならページ内案内へ */
  applyUrl: string;
  /** 採用ページ上部の写真URL。未指定なら写真枠プレースホルダー表示 */
  image?: string;
  /** 採用ページ「職場の雰囲気」枠の写真URL。未指定なら image を流用 */
  subImage?: string;
};

/**
 * 業種別のイメージカラー（メタデータ）。
 * v12テンプレートの販売品質を最優先するため、現状レンダリングはv12パレット（teal×gold×slate）を維持し、
 * この値は「業種の想定カラー」の記録・将来のテーマ化/CSV連携用として保持する。
 */
export type Theme = { primary: string; secondary: string; accent: string };

export type SiteData = {
  /** URL スラッグ（/demo/<slug>）。data/sites/<slug>.ts と一致させる */
  slug: string;
  /** 業種の想定イメージカラー（メタデータ。現状デザインには未適用） */
  theme?: Theme;
  /** ヘッダーロゴの1文字（会社イニシャル等） */
  logoText: string;
  name: string;
  subName: string;
  /** ヒーロー見出し。改行は \n で表現（whitespace-pre-line で反映） */
  tagline: string;
  lead: string;
  description: string;
  area: string;
  /** ヒーロー右カード・stats補足で使う対応エリアの一言 */
  areaNote: string;
  tel: string;
  hours: string;
  address: string;
  mapUrl: string;
  /** TOPページ下部 CONTACT CTA の大見出し。未設定なら汎用文言 */
  contactTitle?: string;
  /** TOPページ下部 CONTACT CTA の説明文。未設定なら汎用文言 */
  contactDescription?: string;
  /** ヒーロー背景画像URL。未設定ならダークグラデーションにフォールバック（崩れない） */
  heroImage?: string;
  /** 事業紹介ページ上部の写真URL。未設定なら heroImage を流用 */
  serviceHeroImage?: string;
  // 各配列は空 [] にするとそのセクションが自動で非表示になる
  stats: Stat[];
  services: Service[];
  strengths: Strength[];
  flow: string[];
  works: Work[];
  recruit: Recruit;
};
