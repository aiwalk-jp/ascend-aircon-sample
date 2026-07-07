# HP Demo Site

Aiwalk「業種別HP制作サービス」の営業サンプル用デモサイトです。
1つの Vercel プロジェクトで、複数企業のHPサンプルを **デモ専用URL** で表示します。

- `/` … デモ一覧
- `/demo/ascend` … ASCEND向けサンプル
- `/demo/<slug>` … 会社ごとに追加可能（存在しない slug は 404）

## 技術構成

- Next.js 15（App Router）+ TypeScript
- 会社データは `data/sites/<slug>.ts` に1社1ファイルで分離
- 共通テンプレート `components/DemoSite.tsx` が全社のデザインを担当
- 画像・セクションが無くても崩れない設計（プレースホルダー／空配列は自動で非表示）

## ディレクトリ

```
app/
  layout.tsx            … 全体レイアウト
  page.tsx              … デモ一覧（トップ）
  not-found.tsx         … 404
  demo/[slug]/page.tsx  … slug からデータを読み込み描画
components/
  DemoSite.tsx          … 工事業向け高品質テンプレート本体
data/
  types.ts              … SiteData 型定義
  sites/
    index.ts            … 会社データのレジストリ（getSite / getAllSites）
    ascend.ts           … ASCEND のデータ
lib/
  format.ts             … 電話番号を tel: リンク用に整形
```

## ローカル確認

```bash
npm install
npm run dev     # http://localhost:3000/demo/ascend
npm run build   # 本番ビルド確認
```

## 新しい会社デモを追加する手順

1. **データファイルを作成**
   `data/sites/<slug>.ts` を作り、`SiteData` を満たすデータを書く。
   `data/sites/ascend.ts` をコピーして中身を差し替えるのが早い。

   ```ts
   import type { SiteData } from '../types';

   export const flumen: SiteData = {
     slug: 'flumen',              // URL の /demo/<slug> と一致させる
     companyName: '株式会社フルメン',
     businessType: '外構・エクステリア工事',
     catchcopy: '...',
     lead: '...',
     subText: '...',
     area: '...',
     phone: '000-0000-0000',
     address: '...',
     googleMapUrl: 'https://www.google.com/maps/...',
     // indeedUrl: 'https://jp.indeed.com/...',   // あれば採用CTAがIndeedへ、無ければ電話へ
     colors: { primary: '#0f2f35', secondary: '#14263d', accent: '#c6a15b', bg: '#f6f2ea' },
     // heroImage: 'https://...',   // 無ければグラデーションのプレースホルダー
     services:  [{ title: '...', text: '...' }],
     strengths: [{ title: '...', text: '...' }],
     works:     [{ title: '...', text: '...' /*, image: 'https://...' */ }],
     flow:      [{ title: '...', text: '...' }],
     recruit:   [{ title: '...', text: '...' }],
   };
   ```

2. **レジストリに登録**
   `data/sites/index.ts` に import と配列追加を1行ずつ足す。

   ```ts
   import { flumen } from './flumen';
   const siteList: SiteData[] = [ascend, flumen];
   ```

3. **確認**
   `npm run dev` で `http://localhost:3000/demo/flumen` を開いて表示確認。

4. **デプロイ**
   ```bash
   git add .
   git commit -m "add flumen demo"
   git push
   ```
   Vercel の自動デプロイ後、`https://<vercel-domain>/demo/flumen` を営業先に送付。

## データ仕様のポイント（崩れない設計）

- **空配列のセクションは自動で非表示**（例: `works: []` なら施工事例セクションが消える）。
- サービス・強み・施工事例・流れは **件数が1つでも複数でも中央寄せで崩れない**。
- `heroImage` / `works[].image` は **任意**。未指定ならグラデーション＋会社イニシャルのプレースホルダー。
- `indeedUrl` があれば採用CTAは Indeed へ、無ければ電話（tel:）へ自動で切り替わる。
- `colors` で会社ごとに配色変更（基本は 深緑 `primary` / 濃紺 `secondary` / ゴールド `accent`）。
- `googleMapUrl` はヒーロー・お問い合わせ・フッターの各導線に反映される。

## セキュリティ補足

`next@15.3.9`（15.3系の最新パッチ）を使用。`npm audit` には画像最適化・ミドルウェア関連の
advisory が残るが、本デモは `next/image`・middleware・画像最適化を使わないため実影響は低い。
より厳密に解消する場合は Next.js 16 系へのアップグレードを検討する。
