import type { SiteData } from '../types';
import { ascend } from './ascend';

// ここに会社データを1行追加するだけで /demo/<slug> が増える。
// 例: import { flumen } from './flumen'; を上に追加し、下の配列に flumen を足す。
const siteList: SiteData[] = [ascend];

/** slug をキーにした会社データの辞書 */
export const sites: Record<string, SiteData> = Object.fromEntries(
  siteList.map((site) => [site.slug, site])
);

/** slug から会社データを取得。存在しなければ undefined */
export function getSite(slug: string): SiteData | undefined {
  return sites[slug];
}

/** 全会社データ（トップページの一覧などで使用） */
export function getAllSites(): SiteData[] {
  return siteList;
}

export type { SiteData } from '../types';
