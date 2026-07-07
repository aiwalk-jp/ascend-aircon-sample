# HP Demo Site

Aiwalk「業種別HP制作サービス」の営業サンプル用デモサイトです。
デザインの正本は社内標準テンプレート **trade-hp-template-v12** で、その見た目・余白・構成を
そのまま維持したまま、1つの Vercel プロジェクトで複数企業を **デモ専用URL** で出し分けます。

- `/` … デモ一覧
- `/demo/ascend` … ASCEND向けサンプル（TOP）
- `/demo/ascend/service` … 事業紹介
- `/demo/ascend/recruit` … 採用情報
- `/demo/<slug>` … 会社ごとに追加可能（存在しない slug は 404）

## 技術構成

- Next.js 15（App Router）+ React 19 + TypeScript
- Tailwind CSS 3.4（テンプレートと同一のスタイル基盤）
- 会社データは `data/sites/<slug>.ts` に1社1ファイルで分離
- 共通コンポーネント（Header / Footer / PhotoFrame）に会社データを prop で渡して描画
- 画像が無くても崩れない（ヒーローはダークグラデーション、写真枠はプレースホルダー表示）

## ディレクトリ

```
app/
  layout.tsx                     … 全体レイアウト
  page.tsx                       … デモ一覧（トップ）
  not-found.tsx                  … 404
  globals.css                    … Tailwind + テンプレート共通スタイル
  demo/[slug]/page.tsx           … TOP（ヒーロー/実績/サービス/流れ/問い合わせ）
  demo/[slug]/service/page.tsx   … 事業紹介
  demo/[slug]/recruit/page.tsx   … 採用情報
components/
  Header.tsx / Footer.tsx        … 会社データを prop で受け取る
  PhotoFrame.tsx                 … 写真枠（src 未指定ならプレースホルダー）
data/
  types.ts                       … SiteData 型定義
  sites/index.ts                 … 会社データのレジストリ（getSite / getAllSites）
  sites/ascend.ts                … ASCEND のデータ
lib/grid.ts                      … カード枚数に応じた整列クラス補助
tailwind.config.ts / postcss.config.js
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
     slug: 'flumen',            // URL の /demo/<slug> と一致させる
     logoText: 'F',             // ヘッダーロゴの1文字
     name: '株式会社フルメン',
     subName: '栃木県全域対応の外壁塗装・防水工事',
     tagline: '地域の住まいを、\n誠実な施工で支える。',  // \n で改行
     lead: '...',
     description: '...',
     area: '栃木県全域対応',
     areaNote: '宇都宮市を中心に迅速対応いたします',
     tel: '028-000-0000',
     hours: '受付時間 9:00〜18:00',
     address: '...',
     mapUrl: 'https://www.google.com/maps/...',
     // heroImage: '/images/flumen-hero.jpg',  // 無ければダークグラデーション
     stats:     [{ label: '...', value: '...', note: '...' }],
     services:  [{ name: '...', label: 'PAINT', text: '...' }],
     strengths: [{ title: '...', text: '...', label: 'LOCAL SPEED' }],
     flow:      ['お問い合わせ', '現地調査', 'お見積り', 'ご契約', '施工', '完了確認'],
     works:     [{ title: '...', area: '...', period: '施工期間：14日間', description: '...' }],
     recruit: {
       title: '...', catch: '...',
       jobs:   ['...'], points: ['...'],
       message: '...',
       applyUrl: '',            // Indeed等のURLを入れると応募ボタンがそこへ遷移
     },
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
- サービス・強み・流れ・実績は **件数が変わっても自然に整列**（1〜6件程度を想定）。
- `heroImage` は任意。未指定ならヒーロー背景はダークグラデーション。
- 施工事例・サービス詳細などの写真枠は、画像未挿入なら「ここに写真を挿入」プレースホルダー表示。
- `recruit.applyUrl` があれば応募ボタンは Indeed等へ、無ければページ内の応募案内へ遷移。
- `mapUrl` はヒーロー・お問い合わせ・フッターの各Googleマップ導線に反映される。

## セキュリティ補足

`next@15.3.9`（15.3系の最新パッチ）を使用。`npm audit` に画像最適化・middleware関連の
advisory が残るが、本デモは `next/image`・middleware・画像最適化を使わないため実影響は低い。
より厳密に解消する場合は Next.js 16 系へのアップグレードを検討する。
