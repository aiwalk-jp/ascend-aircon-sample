// 個社サンプル自動生成スクリプト
// 使い方:
//   node scripts/new-company.mjs \
//     --base base-painting --slug maruo-toso \
//     --name "株式会社丸尾塗装" \
//     --tel "028-000-0000" \
//     --address "〒000-0000 栃木県宇都宮市○○1-2-3" \
//     --map "https://www.google.com/maps/place/..." \
//     --area "栃木県宇都宮市周辺対応" \
//     [--sub "外壁塗装・防水工事"] [--indeed "https://jp.indeed.com/..."]
//
// 仕組み: 指定 base-xxx の業種ベースを複製し、会社情報だけ差し替える。
//   画像は /images/<base>/... を参照したままにするので、画像コピーは不要（最速生成）。
//   デザイン・構造・文言（業種文言）は一切変更しない。

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const sitesDir = path.join(root, 'data', 'sites');

// ---- 引数パース ----
function parseArgs(argv) {
  const out = {};
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i].startsWith('--')) {
      const key = argv[i].slice(2);
      const val = argv[i + 1] && !argv[i + 1].startsWith('--') ? argv[i + 1] : '';
      out[key] = val;
      if (val) i += 1;
    }
  }
  return out;
}

const args = parseArgs(process.argv.slice(2));
const required = ['base', 'slug', 'name', 'tel', 'address', 'map', 'area'];
const missing = required.filter((k) => !args[k]);
if (missing.length) {
  console.error('必須項目が不足しています: ' + missing.join(', '));
  process.exit(1);
}

const { base, name, tel, address, map, area } = args;
const sub = args.sub || '';
const indeed = args.indeed || '';

// ---- slug ルール ----
// 形式: <会社ローマ字>-<業種英語>（ハイフンは1回のみ / 英小文字のみ / 数字・法人格表記なし / 20文字以内）
//   例: 丸尾塗装(base-painting) → maruo-painting ／ 田中電気(base-electric) → tanaka-electric
//   会社ローマ字だけ（例: --slug maruo）を渡すと、base から業種英語を自動付与する。
const INDUSTRY_EN = {
  'base-aircon': 'aircon',
  'base-car-coating': 'coating',
  'base-house-cleaning': 'cleaning',
  'base-relics': 'relics',
  'base-roof-sheet-metal': 'roofing',
  'base-demolition': 'demolition',
  'base-exterior': 'exterior',
  'base-painting': 'painting',
  'base-waterworks': 'plumbing',
  'base-garden': 'garden',
  'base-electric': 'electric',
  'base-interior-cross': 'interior',
  'base-junk-removal': 'junk',
  'base-waterproof': 'waterproof',
};
let slug = args.slug.trim().toLowerCase();
// ハイフンが無ければ（＝会社ローマ字のみ）業種英語を付与
if (!slug.includes('-') && INDUSTRY_EN[base]) slug = `${slug}-${INDUSTRY_EN[base]}`;
// バリデーション
if (!/^[a-z]+-[a-z]+$/.test(slug)) {
  console.error('slug ルール違反: <会社ローマ字>-<業種英語> の形式（英小文字のみ・ハイフン1回・数字/法人格表記は不可）。例: maruo-painting');
  process.exit(1);
}
if (slug.length > 20) {
  console.error(`slug が長すぎます（${slug.length}文字）。20文字以内に短くしてください（会社名は簡潔なローマ字に）。`);
  process.exit(1);
}

// ---- slug -> camelCase の const 名 ----
const constName = slug.replace(/-([a-z0-9])/g, (_, c) => c.toUpperCase());
const logoText = slug.charAt(0).toUpperCase();

// ---- base 読み込み ----
const basePath = path.join(sitesDir, `${base}.ts`);
if (!fs.existsSync(basePath)) {
  console.error(`ベースが見つかりません: data/sites/${base}.ts`);
  process.exit(1);
}
const outPath = path.join(sitesDir, `${slug}.ts`);
if (fs.existsSync(outPath)) {
  console.error(`既に存在します: data/sites/${slug}.ts（slug を変えてください）`);
  process.exit(1);
}

let src = fs.readFileSync(basePath, 'utf8');

// ---- シングルクォート用エスケープ ----
const q = (s) => String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'");

// ---- 会社情報だけ差し替え（行頭アンカーで画像パス等は触らない） ----
function setField(text, key, value) {
  const re = new RegExp(`^(\\s*)${key}: '(?:[^'\\\\]|\\\\.)*',`, 'm');
  if (!re.test(text)) return text;
  return text.replace(re, `$1${key}: '${q(value)}',`);
}

src = src.replace(/^export const \w+: SiteData = \{/m, `export const ${constName}: SiteData = {`);
src = setField(src, 'slug', slug);
src = setField(src, 'logoText', logoText);
src = setField(src, 'name', name);
if (sub) src = setField(src, 'subName', sub);
src = setField(src, 'tel', tel);
src = setField(src, 'address', address);
src = setField(src, 'mapUrl', map);
src = setField(src, 'area', area);
if (indeed) {
  // recruit.applyUrl を Indeed に差し替え
  src = src.replace(/(\n\s*)applyUrl: '(?:[^'\\]|\\.)*',/, `$1applyUrl: '${q(indeed)}',`);
}

// ==== 営業用の軽い個社最適化（「その会社用に作った感」を出す） ====
// 対応エリアから地名部分を抽出（都道府県プレフィクスと「対応」等を除去）
function deriveRegion(a) {
  return String(a)
    .replace(/^(東京都|北海道|大阪府|京都府|.{2,3}県)/, '')
    .replace(/(に対応|対応|エリア対応|エリア)$/, '')
    .replace(/'/g, '')
    .trim();
}
const region = deriveRegion(area);
const regionValid = /[市区町村]|周辺/.test(region);

// ① キャッチコピー（ヒーロー見出し）に「対応エリア」だけ反映（業種の言い回しは維持）
//    \n は2行見出し。region が地名として妥当なときのみ差し替え、それ以外は base のまま。
const TAGLINE = {
  'base-aircon': (r) => `${r}のエアコン工事を、\\n迅速・丁寧に。`,
  'base-car-coating': (r) => `${r}で愛車の輝きを、\\n長く美しく守る。`,
  'base-house-cleaning': (r) => `${r}の暮らしの汚れを、\\nすっきり解決。`,
  'base-relics': (r) => `${r}で大切な想いに寄り添う、\\n遺品整理を。`,
  'base-roof-sheet-metal': (r) => `${r}の住まいを雨風から守る、\\n確かな屋根工事。`,
  'base-demolition': (r) => `${r}の解体工事を、\\n安全・丁寧に。`,
  'base-exterior': (r) => `${r}の住まいの外まわりを、\\n美しくデザイン。`,
  'base-painting': (r) => `${r}の外壁塗装・防水を、\\n誠実な施工で。`,
  'base-waterworks': (r) => `${r}の水まわりを、\\n安心しておまかせ。`,
  'base-garden': (r) => `${r}の心地よい庭を、\\n美しく保つ。`,
  'base-electric': (r) => `${r}の電気工事を、\\n安全・確実に。`,
  'base-interior-cross': (r) => `${r}の空間の印象を変える、\\n内装リフォーム。`,
  'base-junk-removal': (r) => `${r}の不用品の片付けを、\\nまるごとおまかせ。`,
  'base-waterproof': (r) => `${r}の建物を雨水から守る、\\n確かな防水工事。`,
};
if (regionValid && TAGLINE[base]) {
  src = src.replace(/^  tagline: '(?:[^'\\]|\\.)*',/m, `  tagline: '${TAGLINE[base](region)}',`);
}

// ② 対応エリア表記の統一：エリアカードの一言（areaNote）にも地名を反映
if (regionValid) {
  src = setField(src, 'areaNote', `${region}のお客様へ迅速に対応いたします`);
}

// ③ 会社名を自然に1箇所だけ差し込み（説明文の主語に。ヘッダー/フッターには元々表示される）
const dm = src.match(/^  description: '((?:[^'\\]|\\.)*)',/m);
if (dm && !dm[1].startsWith(name)) {
  src = src.replace(/^  description: '(?:[^'\\]|\\.)*',/m, `  description: '${q(name)}は、${dm[1]}',`);
}

// 先頭コメントを個社向けに
src = src.replace(/^\/\/[^\n]*\n(\/\/[^\n]*\n)?/, `// 個社サンプル：${name}（base: ${base}）\n`);

fs.writeFileSync(outPath, src, { encoding: 'utf8' });

// ---- index.ts へ登録 ----
const indexPath = path.join(sitesDir, 'index.ts');
let idx = fs.readFileSync(indexPath, 'utf8');
if (!idx.includes(`from './${slug}'`)) {
  // 最後の import 行の直後に import を追加
  const importLine = `import { ${constName} } from './${slug}';\n`;
  const lastImport = [...idx.matchAll(/^import .*;\n/gm)].pop();
  idx = idx.slice(0, lastImport.index + lastImport[0].length) + importLine + idx.slice(lastImport.index + lastImport[0].length);
  // siteList 配列の閉じ括弧直前に追加
  const marker = 'const siteList: SiteData[] = [';
  const start = idx.indexOf(marker);
  const end = idx.indexOf('];', start);
  idx = idx.slice(0, end) + `  ${constName},\n` + idx.slice(end);
  fs.writeFileSync(indexPath, idx, { encoding: 'utf8' });
}

console.log(`生成しました: data/sites/${slug}.ts`);
console.log(`URL(デプロイ後): https://ascend-aircon-sample.vercel.app/demo/${slug}`);
