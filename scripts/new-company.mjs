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

const { base, slug, name, tel, address, map, area } = args;
const sub = args.sub || '';
const indeed = args.indeed || '';

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
