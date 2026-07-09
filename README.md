# HP Demo Site

Aiwalk「業種別HP制作サービス」の営業用デモサイトです。
デザインの正本は社内標準テンプレート **trade-hp-template-v12**。その見た目・余白・構成を維持したまま、
1つの Vercel プロジェクトで複数企業・複数業種を **デモ専用URL** で出し分けます。

営業フロー：テレアポ → サンプル希望 → 会社情報を聞く → 該当業種ベースを複製して社名等を差し替え →
5〜10分で `/demo/<会社slug>` を発行 → 「御社向けサンプルHP」としてメール送付。

## URL構成

- `/` … デモ一覧
- `/demo/<slug>` … TOP（ヒーロー/実績/サービス/流れ/問い合わせ）
- `/demo/<slug>/service` … 事業紹介
- `/demo/<slug>/recruit` … 採用情報
- 存在しない slug は 404

## 業種別ベースHP（雛形）一覧

| 業種 | URL |
|------|-----|
| エアコン工事 | `/demo/base-aircon` |
| カーコーティング | `/demo/base-car-coating` |
| ハウスクリーニング | `/demo/base-house-cleaning` |
| 遺品整理 | `/demo/base-relics` |
| 屋根・建築板金 | `/demo/base-roof-sheet-metal` |
| 解体工事 | `/demo/base-demolition` |
| 外構・エクステリア | `/demo/base-exterior` |
| 外壁塗装 | `/demo/base-painting` |
| 水道・給排水工事 | `/demo/base-waterworks` |
| 造園・庭木管理 | `/demo/base-garden` |
| 電気工事 | `/demo/base-electric` |
| 内装・クロス | `/demo/base-interior-cross` |
| 不用品回収 | `/demo/base-junk-removal` |
| 防水工事 | `/demo/base-waterproof` |
| 便利屋 | `/demo/base-handyman` |

※ 実案件例：`/demo/ascend`（ASCEND向け・base-aircon から作成）

## 技術構成

- Next.js 15（App Router）+ React 19 + TypeScript + Tailwind CSS 3.4
- 会社データは `data/sites/<slug>.ts` に1社1ファイルで分離（CSV等からの量産を想定したシンプル構造）
- 共通コンポーネント（Header / Footer / PhotoFrame）に会社データを prop で渡して描画
- 画像が無くても崩れない（ヒーローはダークグラデーション、写真枠はプレースホルダー）

## ローカル確認

```bash
npm install
npm run dev     # http://localhost:3000/demo/base-aircon
npm run build   # 本番ビルド確認
```

---

## 個社サンプルの作り方（テレアポ後 5〜10分）

### 依頼するときに必要な情報
Claude Code へは、以下をまとめて伝えれば作成できます。

1. **業種**（上表のどのベースか。例：外壁塗装 → base-painting）
2. **会社名**
3. **電話番号**
4. **住所**（〒含む）
5. **GoogleマップURL**
6. **対応エリア**（例：「東京都清瀬市周辺対応」）
7. （任意）**Indeed求人URL** … あれば採用CTAがIndeedへ切替
8. （任意）実写真があれば差し替え（無ければベースの業種写真のまま）

### 依頼文の例
> 「base-painting をベースに、株式会社○○（外壁塗装）の個社サンプルを作って。
>  電話 028-000-0000／住所 〒000-0000 栃木県○○市○○1-2-3／
>  Googleマップ https://...／対応エリア 栃木県○○市周辺対応。slug は maruo-painting で。」

### テレアポ用 入力フォーマット（これを貼るだけ）

サンプル希望が出たら、Claude Code に **このフォーマットで貼る**だけで生成できます。

```
会社名：
業種（base-xxx）：
電話番号：
住所：
GoogleマップURL：
対応エリア：
```

- 業種は上表の `base-xxx` を指定（例：`base-painting`）。
- slug は下記ルールで生成します。
- 画像・文言はその業種ベースを流用（実写真があれば後から差し替え可能）。

#### slug 生成ルール

形式：`<会社ローマ字>-<業種英語>`

- 会社名は**短く簡潔なローマ字**（「株式会社」「有限会社」は除外）
- 業種は**英語**（`base` に対応：`aircon` / `coating` / `cleaning` / `relics` / `roofing` / `demolition` / `exterior` / `painting` / `plumbing` / `garden` / `electric` / `interior` / `junk` / `waterproof` / `handyman`）
- **ハイフンは1回まで**、英小文字のみ、**数字は不可**
- **20文字以内**（不自然に長いものは不可）

| 会社名 | slug |
|---|---|
| 丸尾塗装 | `maruo-painting` |
| 田中電気 | `tanaka-electric` |

NG例：`kabushikigaisha-maruo-tosou`（法人格・ローマ字業種・ハイフン過多）／`maruo-tosou-123`（数字）

> 会社ローマ字だけ（例：`--slug maruo` × `--base base-painting`）を渡すと、業種英語（`-painting`）を自動付与します。
> ルール違反（数字・ハイフン過多・20文字超）はスクリプトが自動で弾きます。

### 生成コマンド（1コマンド）

上記入力をもとに、ベースを複製して会社情報だけ差し替えるスクリプトを用意しています。
画像は `/images/<base>/` を参照したままなので**画像コピー不要＝最速**です。

```bash
node scripts/new-company.mjs \
  --base base-painting --slug maruo-toso \
  --name "株式会社丸尾塗装" \
  --tel "028-000-0000" \
  --address "〒000-0000 栃木県宇都宮市○○1-2-3" \
  --map "https://www.google.com/maps/place/..." \
  --area "栃木県宇都宮市周辺対応"
# 任意: --sub "外壁塗装・防水工事"  --indeed "https://jp.indeed.com/..."
```

このスクリプトが自動で行うこと：
1. `data/sites/<slug>.ts` を生成（`slug` / `logoText` / `name` / `subName` / `tel` / `address` / `mapUrl` / `area` を差し替え）
2. **「その会社用に作った感」の軽い最適化**（営業用途）
   - ① キャッチコピー（ヒーロー見出し）に**対応エリアだけ反映**（業種の言い回しは維持。例：`宇都宮市周辺の外壁塗装・防水を、／誠実な施工で。`）
   - ② 対応エリア表記を統一（ヒーローpill・エリアカード・カードの一言 areaNote）
   - ③ 会社名を**自然に1箇所だけ**差し込み（説明文の主語。ヘッダー/フッターには元々表示）
   - ※上記以外（構成・デザイン・業種文言）は一切変更しない
3. `data/sites/index.ts` に import + 配列登録を追記

### 生成後の運用

```bash
npm run build                                   # ビルド確認
git add . && git commit -m "add <slug> sample"  # コミット
git push                                        # Vercel が自動デプロイ
```

Vercel デプロイ後、次のURLを送付：`https://aiwalk-hp-demo.vercel.app/demo/<slug>`

> 公開ドメインは中立名 `aiwalk-hp-demo.vercel.app` を正とする（特定企業名・業種名を含めない）。
> Vercelプロジェクト名を変更した場合は、この README と `scripts/new-company.mjs` の `PUBLIC_BASE` を更新する。

> Claude Code への依頼時は、上の「入力フォーマット」を貼るだけでOK。
> 生成・build・push まで実行し、**返答は生成URLのみ**を返します。

---

## データ仕様のポイント（崩れない設計）

- **空配列のセクションは自動で非表示**（例: `works: []` なら施工事例セクションが消える）。
- TOPページの施工事例は**2件表示**（「選ばれる理由」と高さバランスを揃えるため。`app/demo/[slug]/page.tsx` の `visibleWorks` で制御）。
- サービス・強み・流れは件数が変わっても自然に整列。
- `heroImage` は任意。未指定ならヒーロー背景はダークグラデーション。写真枠は未指定ならプレースホルダー表示。
- `recruit.applyUrl` があれば応募ボタンは Indeed等へ、無ければページ内の応募案内へ。
- `mapUrl` はヒーロー・お問い合わせ・フッターの各Googleマップ導線に反映。

## 画像

- 業種別画像は `public/images/<slug>/` に `hero.jpg` / `work1〜3.jpg` / `recruit.jpg` を配置。
- 施工事例・サービスカードは work 画像を割り当て（枚数が少ない業種は重複利用）。
- テンプレートの画像サイズ・object-cover・角丸・オーバーレイ表現は維持。

## 業種テーマカラーについて（重要）

各 `data/sites/<slug>.ts` に業種の想定イメージカラーを `theme: { primary, secondary, accent }` として**メタデータ保持**しています。
ただし**現状のレンダリングはv12テンプレートのパレット（teal × gold × slate）を維持**しています。

理由：v12テンプレートは配色を Tailwind の固定クラス（`teal-*` / `slate-*` 等）で構成しており、
一部だけCSS変数で色替えすると「半分だけ色が変わった安っぽい見た目」になり、販売品質を損なうためです。
「最優先はv12の販売品質維持／崩れるなら無理に色変更しない」方針に沿い、色は data に記録のみ行い未適用としています。
将来、テンプレートの色クラスをCSS変数化して業種テーマを一括適用する拡張は可能です（別途対応）。

## セキュリティ補足

`next@15.3.9`（15.3系の最新パッチ）を使用。`npm audit` に画像最適化・middleware関連の advisory が
残るが、本デモは `next/image`・middleware・画像最適化を使わないため実影響は低い。
