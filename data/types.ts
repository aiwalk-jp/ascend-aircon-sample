// 会社デモサイトのデータ型定義。
// 新しい会社を追加するときは data/sites/<slug>.ts でこの SiteData を満たすデータを作る。

/** サービス・強みなど「タイトル + 説明文」で表現するカード */
export type CardItem = {
  title: string;
  text: string;
};

/** 施工事例カード。画像は任意（なければプレースホルダー表示） */
export type WorkItem = {
  title: string;
  text: string;
  /** 施工事例画像URL。未指定ならグラデーションのプレースホルダーを表示 */
  image?: string;
};

/** ご依頼の流れの1ステップ */
export type FlowItem = {
  title: string;
  text: string;
};

/** テンプレートの配色。深緑/濃紺/ゴールド系を基本にする */
export type SiteColors = {
  /** メインカラー（ヘッダー/ヒーロー背景など） */
  primary: string;
  /** サブカラー（グラデーションのもう一方など） */
  secondary: string;
  /** アクセント（ゴールド系のボタン・見出し） */
  accent: string;
  /** ページ背景 */
  bg: string;
};

/** 1社分のデモサイトデータ */
export type SiteData = {
  /** URL のスラッグ（/demo/<slug>）。ファイル名と一致させる */
  slug: string;
  /** 会社名（日本語表記） */
  companyName: string;
  /** ロゴ・見出し用の英字表記（任意） */
  companyNameEn?: string;
  /** 業種（例: エアコン工事・空調設備工事） */
  businessType: string;
  /** ヒーローのキャッチコピー */
  catchcopy: string;
  /** ヒーローの説明文 */
  lead: string;
  /** ヒーロー下部のサブテキスト */
  subText: string;
  /** 対応エリア */
  area: string;
  /** 電話番号（ハイフンあり表記でOK。tel: 用に自動整形される） */
  phone: string;
  /** 住所 */
  address: string;
  /** GoogleマップのURL */
  googleMapUrl: string;
  /** Indeed 求人ページURL（あれば採用CTAがIndeedへ、なければ電話へ） */
  indeedUrl?: string;
  /** 配色 */
  colors: SiteColors;
  /** ヒーロー画像URL（未指定ならグラデーションのプレースホルダー） */
  heroImage?: string;
  /** 事業紹介（空配列ならセクション非表示） */
  services: CardItem[];
  /** 強み（空配列ならセクション非表示） */
  strengths: CardItem[];
  /** 施工事例（空配列ならセクション非表示） */
  works: WorkItem[];
  /** ご依頼の流れ（空配列ならセクション非表示） */
  flow: FlowItem[];
  /** 採用情報（空配列ならセクション非表示） */
  recruit: CardItem[];
};
