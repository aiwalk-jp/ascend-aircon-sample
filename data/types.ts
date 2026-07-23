// 会社デモサイトのデータ型。
// trade-hp-template-v12 のテンプレート構造をそのまま踏襲し、
// 企業別URL（/demo/<slug>）で出し分けできるよう slug 等を追加している。

export type Stat = { label: string; value: string; note: string };
export type Service = { name: string; label: string; text: string; image?: string; note?: string };
export type Strength = { title: string; text: string; label: string };
export type Work = { title: string; area: string; period: string; description: string; image?: string };

/** 業種カテゴリ（CTA文言・FLOW文言の出し分けに使用。未設定は construction 扱い） */
export type BusinessCategory = 'construction' | 'service' | 'collection';

/** FLOW（矢羽根ステップ）の1ステップ */
export type FlowStep = { title: string; icon: string };

/** FLOWセクション設定 */
export type FlowConfig = { title: string; steps: FlowStep[] };

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
  /** 業種カテゴリ。CTA/FLOW の文言出し分けに使用。未設定は 'construction' */
  category?: BusinessCategory;
  /** ヘッダーロゴの1文字（会社イニシャル等）。logo 画像がある場合はそちらを優先 */
  logoText: string;
  /** ロゴ画像URL（任意）。設定時はヘッダー左・フッター左にロゴ画像を表示 */
  logo?: string;
  /** 代表者名（任意）。フッター会社情報に表示 */
  representative?: string;
  /** 建設業許可番号など（任意）。フッター会社情報に表示 */
  license?: string;
  /** ページ全体に付与するブランドテーマ用クラス（任意。例: 'theme-flumen'）。色のみ差し替え */
  brandClass?: string;
  /** 事業紹介ページ上部のリード文（任意）。未設定なら既定文 */
  serviceLead?: string;
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
  /** 事業紹介ページの注意書き（任意）。設定時のみ見出し下に控えめに表示 */
  serviceNote?: string;
  // 各配列は空 [] にするとそのセクションが自動で非表示になる
  stats: Stat[];
  services: Service[];
  strengths: Strength[];
  flow: string[];
  works: Work[];
  recruit: Recruit;
};
