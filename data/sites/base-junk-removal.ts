import type { SiteData } from '../types';

// 業種ベース：不用品回収（仮会社「サンプル回収サービス」）
export const baseJunkRemoval: SiteData = {
  slug: 'base-junk-removal',
  logoText: 'J',
  theme: { primary: '#14263d', secondary: '#1f6f4e', accent: '#4caf7d' },
  name: 'サンプル回収サービス',
  subName: '暮らしを軽くする不用品回収・片付け',
  tagline: '不用品の片付けを、\nまるごとおまかせ。',
  lead: '家具・家電の回収から、お部屋の片付け、引っ越し時のまとめて処分まで。分別から搬出まで丁寧に対応します。',
  description: '家庭・事業所の不用品回収や片付けを行います。1点からまとめての処分まで、地域のお客様に迅速・丁寧に対応します。',
  area: '地域密着で対応',
  areaNote: '地域のお客様へ迅速に対応いたします',
  tel: '000-0000-0000',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒000-0000 ○○県○○市○○ 1-2-3',
  mapUrl: 'https://www.google.com/maps',
  heroImage: '/images/base-junk-removal/hero.jpg',
  stats: [
    { label: '対応エリア', value: '地域密着', note: '地域のお客様へ迅速対応' },
    { label: '対応範囲', value: '1点〜まとめて', note: '回収から片付けまで' },
    { label: '相談方法', value: '見積り無料', note: '量や品目をご相談ください' },
    { label: '対応スピード', value: '迅速対応', note: 'お急ぎの回収もご相談を' },
  ],
  services: [
    { name: '家具・家電の回収', label: 'FURNITURE', text: 'ソファ・タンス・冷蔵庫など、大きな家具・家電の回収に対応します。', image: '/images/base-junk-removal/work1.jpg' },
    { name: 'お部屋の片付け', label: 'CLEAN OUT', text: '散らかったお部屋の片付けから搬出まで、まとめて対応します。', image: '/images/base-junk-removal/work2.jpg' },
    { name: '引っ越し時の処分', label: 'MOVING', text: '引っ越しに伴う不用品を、まとめて分別・処分します。', image: '/images/base-junk-removal/work3.jpg' },
    { name: '事業所・店舗の回収', label: 'BUSINESS', text: '事務所・店舗の什器や備品の回収・処分にも対応します。', image: '/images/base-junk-removal/work1.jpg' },
    { name: '分別・搬出', label: 'SORTING', text: '分別や重い物の搬出も、スタッフが丁寧に対応します。', image: '/images/base-junk-removal/work2.jpg' },
    { name: '買取・リユースのご相談', label: 'REUSE', text: '再利用できる品は買取・リユースで、ご負担軽減につなげます。', image: '/images/base-junk-removal/work3.jpg' },
  ],
  strengths: [
    { title: '1点からまとめてまで対応', text: '小さな1点の回収から、お部屋まるごとの片付けまで対応します。', label: 'FLEXIBLE' },
    { title: '分かりやすい料金とご説明', text: '量や品目に応じた料金を明確にご説明し、安心してご依頼いただけます。', label: 'CLEAR' },
    { title: '地域密着のスピード対応', text: 'お急ぎの回収にも、できる限り迅速に対応します。', label: 'LOCAL SPEED' },
  ],
  flow: ['お問い合わせ', '量・品目の確認', 'お見積り・ご提案', 'ご予約', '回収・搬出', '完了確認'],
  works: [
    { title: '家具・家電の回収', area: '対応エリア内', period: '作業時間：半日', description: '大型の家具・家電を分別し、搬出まで丁寧に対応しました。', image: '/images/base-junk-removal/work1.jpg' },
    { title: 'お部屋まるごと片付け', area: '対応エリア内', period: '作業時間：半日〜1日', description: 'お部屋の不用品を分別・搬出し、すっきりと片付けました。', image: '/images/base-junk-removal/work2.jpg' },
  ],
  recruit: {
    title: '片付けを支えるスタッフを募集しています',
    catch: '体を動かす仕事が好きな方、丁寧な対応ができる方を歓迎します。',
    jobs: ['回収スタッフ', '搬出・積込スタッフ', '受付・見積り対応'],
    points: ['お客様に感謝される仕事', 'チームで進める達成感', '経験者は優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-junk-removal/recruit.jpg',
    subImage: '/images/base-junk-removal/work3.jpg',
  },
};
