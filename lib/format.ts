/** 電話番号を tel: リンク用に整形（数字のみ抽出） */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^0-9+]/g, '')}`;
}
