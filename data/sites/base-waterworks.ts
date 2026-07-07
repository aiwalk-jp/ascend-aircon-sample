import type { SiteData } from '../types';

// 業種ベース：水道・給排水工事（仮会社「サンプル水道設備」）
export const baseWaterworks: SiteData = {
  slug: 'base-waterworks',
  logoText: 'W',
  theme: { primary: '#14263d', secondary: '#1f4e79', accent: '#7cc4e6' },
  name: 'サンプル水道設備',
  subName: '暮らしの水まわりを支える水道・給排水工事',
  tagline: '暮らしの水まわりを、\n安心してお任せください。',
  lead: '蛇口・トイレの水漏れから、給排水管の工事、水まわりのリフォームまで。急ぎのトラブルにも迅速に対応します。',
  description: '水道・給排水設備の工事・修理を行います。日常の水まわりトラブルから設備の入替まで、地域のお客様に迅速に対応します。',
  area: '地域密着で対応',
  areaNote: '地域のお客様の水まわりへ迅速対応します',
  tel: '000-0000-0000',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒000-0000 ○○県○○市○○ 1-2-3',
  mapUrl: 'https://www.google.com/maps',
  heroImage: '/images/base-waterworks/hero.jpg',
  stats: [
    { label: '対応エリア', value: '地域密着', note: '地域のお客様へ迅速対応' },
    { label: '対応内容', value: '修理〜工事', note: '水漏れ〜設備入替まで' },
    { label: '相談方法', value: '電話相談OK', note: '急ぎのトラブルもご相談を' },
    { label: '対応スピード', value: '迅速対応', note: '水まわりの困りごとに対応' },
  ],
  services: [
    { name: '水漏れ・つまり修理', label: 'REPAIR', text: '蛇口やトイレの水漏れ・つまりなど、日常のトラブルに迅速に対応します。', image: '/images/base-waterworks/work1.jpg' },
    { name: '給水・給湯工事', label: 'SUPPLY', text: '給水・給湯管の工事や交換に対応し、安定した水まわりを保ちます。', image: '/images/base-waterworks/work2.jpg' },
    { name: '排水管工事', label: 'DRAIN', text: '排水管の詰まり解消や交換工事に対応し、快適な排水環境を整えます。', image: '/images/base-waterworks/work3.jpg' },
    { name: '蛇口・水栓交換', label: 'FAUCET', text: '古くなった蛇口や水栓の交換を、住まいに合わせて行います。', image: '/images/base-waterworks/work1.jpg' },
    { name: 'トイレ・洗面設備', label: 'SANITARY', text: 'トイレ・洗面台などの設備の交換・設置に対応します。', image: '/images/base-waterworks/work2.jpg' },
    { name: '水まわりリフォーム', label: 'REFORM', text: 'キッチン・浴室など、水まわり全体のリフォームもご相談ください。', image: '/images/base-waterworks/work3.jpg' },
  ],
  strengths: [
    { title: '急ぎのトラブルにも迅速対応', text: '水漏れ・つまりなど、お困りのトラブルにできる限り迅速に対応します。', label: 'FAST' },
    { title: '分かりやすい料金とご説明', text: '作業前に内容と料金をご説明し、安心してご依頼いただけます。', label: 'CLEAR' },
    { title: '修理から工事まで幅広く対応', text: '小さな修理から設備の入替工事まで、幅広く対応します。', label: 'WIDE RANGE' },
  ],
  flow: ['お問い合わせ', '状況確認・現地確認', 'お見積り・ご提案', 'ご契約', '施工・修理', '完了確認'],
  works: [
    { title: '水漏れ修理・水栓交換', area: '対応エリア内', period: '作業時間：半日', description: '水漏れの原因を確認し、水栓の交換までその日のうちに対応しました。', image: '/images/base-waterworks/work1.jpg' },
    { title: '給排水管の工事', area: '対応エリア内', period: '施工期間：1〜3日間', description: '劣化した配管を確認し、安定した給排水のための工事を行いました。', image: '/images/base-waterworks/work2.jpg' },
  ],
  recruit: {
    title: '水まわりを支えるスタッフを募集しています',
    catch: '未経験でも、手に職をつけたい方・誠実に向き合える方を歓迎します。',
    jobs: ['水道工事スタッフ', '設備スタッフ', '現場アシスタント'],
    points: ['生活を支えるやりがい', '現場で技術が身につく', '経験者・資格保持者は優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-waterworks/recruit.jpg',
    subImage: '/images/base-waterworks/work3.jpg',
  },
};
