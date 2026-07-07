// カード枚数に応じて自然に整列させるためのグリッドクラス補助。
// テンプレート trade-hp-template-v12 の挙動をそのまま踏襲。

export function gridClass(count: number, maxCols = 3) {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2) return 'md:grid-cols-2';
  if (count === 3) return maxCols >= 3 ? 'md:grid-cols-3' : 'md:grid-cols-2';
  if (count === 4) return 'md:grid-cols-2';
  return maxCols >= 3 ? 'md:grid-cols-2 lg:grid-cols-3' : 'md:grid-cols-2';
}

export function compactGridClass(count: number) {
  if (count <= 1) return 'grid-cols-1';
  if (count === 2) return 'sm:grid-cols-2';
  if (count === 3) return 'sm:grid-cols-3';
  if (count === 4) return 'sm:grid-cols-2 lg:grid-cols-4';
  if (count === 5) return 'sm:grid-cols-2 lg:grid-cols-5';
  return 'sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6';
}
