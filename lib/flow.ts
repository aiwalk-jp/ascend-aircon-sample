import type { BusinessCategory, FlowConfig } from '@/data/types';

// FLOW ステップのアイコン（黒単色SVG）。ステップ位置ごとに固定。
const ICONS = [
  '/icons/step1-contact.svg',
  '/icons/step2-hearing.svg',
  '/icons/step3-proposal.svg',
  '/icons/step4-contract.svg',
  '/icons/step5-execution.svg',
  '/icons/step6-complete.svg',
];

const withIcons = (titles: string[]): FlowConfig['steps'] =>
  titles.map((title, i) => ({ title, icon: ICONS[i] }));

/** 業種カテゴリ別 FLOW（矢羽根ステップ） */
export const FLOW_CONFIG: Record<BusinessCategory, FlowConfig> = {
  construction: {
    title: 'ご相談から施工までの流れ',
    steps: withIcons(['お問い合わせ', '現地調査', 'ご提案・お見積', 'ご契約', '施工', '施工完了・アフターフォロー']),
  },
  service: {
    title: 'ご相談からサービス実施までの流れ',
    steps: withIcons(['お問い合わせ', '内容確認', 'ご提案・お見積', 'ご依頼確定', 'サービス実施', '完了・ご確認']),
  },
  collection: {
    title: 'ご相談から作業完了までの流れ',
    steps: withIcons(['お問い合わせ', '内容ヒアリング', 'お見積', '日程確定', '作業実施', '作業完了']),
  },
};

/** 業種カテゴリ別 CTA（FLOW直前） */
export const CTA_CONFIG: Record<BusinessCategory, { catch: string; sub: string }> = {
  construction: {
    catch: 'まずは無料で現地調査・お見積りいたします',
    sub: 'しつこい営業は一切行いませんので、お気軽にご相談ください',
  },
  service: {
    catch: 'まずはお気軽にご相談ください',
    sub: '内容をお伺いし、最適なプランをご提案いたします',
  },
  collection: {
    catch: 'お見積り・ご相談は無料です',
    sub: '迅速・丁寧に対応いたします',
  },
};

/** サイトのカテゴリを取得（未設定は construction） */
export function categoryOf(category?: BusinessCategory): BusinessCategory {
  return category ?? 'construction';
}
