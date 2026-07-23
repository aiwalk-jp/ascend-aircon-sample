import type { SiteData } from '../types';
import { ascend } from './ascend';
import { baseAircon } from './base-aircon';
import { baseCarCoating } from './base-car-coating';
import { baseHouseCleaning } from './base-house-cleaning';
import { baseRelics } from './base-relics';
import { baseRoofSheetMetal } from './base-roof-sheet-metal';
import { baseDemolition } from './base-demolition';
import { baseExterior } from './base-exterior';
import { basePainting } from './base-painting';
import { baseWaterworks } from './base-waterworks';
import { baseGarden } from './base-garden';
import { baseElectric } from './base-electric';
import { baseInteriorCross } from './base-interior-cross';
import { baseJunkRemoval } from './base-junk-removal';
import { baseWaterproof } from './base-waterproof';
import { baseHandyman } from './base-handyman';
import { sentakukiUracaan } from './sentakuki-uracaan';
import { ichiroAircleaning } from './ichiro-aircleaning';
import { selectedAircleaning } from './selected-aircleaning';
import { flumen } from './flumen';
import { oitaAircon } from './oita-aircon';
import { sssWaterproof } from './sss-waterproof';

// 個社サンプルはここに1行 import + 配列追加するだけで /demo/<slug> が増える。
// base-* は業種ベース（雛形）。個社対応時は base-* を複製して社名等を差し替える。
const siteList: SiteData[] = [
  ascend,
  baseAircon,
  baseCarCoating,
  baseHouseCleaning,
  baseRelics,
  baseRoofSheetMetal,
  baseDemolition,
  baseExterior,
  basePainting,
  baseWaterworks,
  baseGarden,
  baseElectric,
  baseInteriorCross,
  baseJunkRemoval,
  baseWaterproof,
  baseHandyman,
  sentakukiUracaan,
  ichiroAircleaning,
  selectedAircleaning,
  flumen,
  oitaAircon,
  sssWaterproof,
];

/** slug をキーにした会社データの辞書 */
export const sites: Record<string, SiteData> = Object.fromEntries(
  siteList.map((site) => [site.slug, site])
);

/** slug から会社データを取得。存在しなければ undefined */
export function getSite(slug: string): SiteData | undefined {
  return sites[slug];
}

/** 全会社データ（トップのデモ一覧などで使用） */
export function getAllSites(): SiteData[] {
  return siteList;
}

export type { SiteData } from '../types';
