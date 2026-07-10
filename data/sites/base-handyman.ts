import type { SiteData } from '../types';

// 業種ベース：便利屋（仮会社「サンプル便利屋サービス」）
// 用意済みの便利屋向け画像に合わせて構成・文言を最適化。
export const baseHandyman: SiteData = {
  slug: 'base-handyman',
  category: 'service',
  logoText: 'B',
  theme: { primary: '#1f3a34', secondary: '#14263d', accent: '#d9a441' },
  name: 'サンプル便利屋サービス',
  subName: '地域の暮らしを支える便利屋',
  tagline: '地域の「困った」を、\nまとめて解決する便利屋です',
  lead: '不用品回収・草刈り・清掃・修理・引っ越しまで、暮らしのあらゆるお困りごとに対応します。',
  description:
    '暮らしのお困りごとに幅広く対応する便利屋です。不用品回収から住まいの小修理・清掃・草刈り・引っ越しまで、地域のお客様のお手伝いをまとめて承ります。',
  area: '地域密着で対応',
  areaNote: '地域のお客様へ迅速に対応いたします',
  tel: '000-0000-0000',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒000-0000 ○○県○○市○○ 1-2-3',
  mapUrl: 'https://www.google.com/maps',
  contactTitle: '暮らしのお困りごと、まずはご相談ください。',
  contactDescription: '不用品回収・修理・清掃・草刈り・引っ越しなど、お電話でお気軽にお問い合わせください。',
  heroImage: '/images/base-handyman/hero.jpg',
  serviceHeroImage: '/images/base-handyman/svctop.jpg',
  serviceNote:
    '専門資格が必要な作業や高所作業などは、内容確認のうえ対応可否をご案内します。',
  stats: [
    { label: '対応内容', value: '幅広く対応', note: '不用品〜引っ越しまで' },
    { label: '相談方法', value: '電話相談OK', note: '小さな作業もご相談歓迎' },
    { label: '対応エリア', value: '地域密着', note: '地域のお客様へ迅速対応' },
    { label: '対応姿勢', value: 'まとめて対応', note: '何でもまずはご相談ください' },
  ],
  services: [
    { name: '不用品回収', label: 'DISPOSAL', text: '家具・家電・生活用品など、処分に困る不用品をまとめて回収します。', image: '/images/base-handyman/svc1.jpg' },
    { name: '水回り・住まいの小修理', label: 'REPAIR', text: '蛇口・ドア・網戸など、住まいのちょっとした不具合に対応します。', image: '/images/base-handyman/svc2.jpg' },
    { name: '草刈り・庭作業', label: 'GARDEN', text: '庭の草刈りや簡単な整備など、手間のかかる作業を代行します。', image: '/images/base-handyman/svc3.jpg' },
    { name: 'エアコン取付・取り外し', label: 'AIRCON', text: 'エアコンの設置・取り外しなどの作業も対応可能です。', image: '/images/base-handyman/svc4.jpg' },
    { name: 'ハウスクリーニング', label: 'CLEANING', text: '水回り・室内の清掃など、気になる箇所を丁寧に対応します。', image: '/images/base-handyman/svc5.jpg' },
    { name: '引っ越し・重量物運搬', label: 'MOVING', text: '家具移動や簡易的な引っ越し作業もサポートします。', image: '/images/base-handyman/svc6.jpg' },
  ],
  strengths: [
    { title: '幅広い作業をまとめて依頼できる', text: '不用品回収から修理・清掃・草刈り・運搬まで、まとめてご依頼いただけます。', label: 'ALL-IN-ONE' },
    { title: '小さな作業でも気軽に相談できる', text: '「これだけお願いしたい」という小さな作業でも、お気軽にご相談ください。', label: 'EASY' },
    { title: '地域密着でスピード対応', text: '地域のお客様のお困りごとに、できる限り迅速に対応します。', label: 'LOCAL SPEED' },
  ],
  flow: ['お問い合わせ', '内容確認', '見積り', '作業実施', '完了'],
  works: [
    { title: 'メンテナンス対応', area: '対応エリア内', period: '作業時間：半日〜1日', description: '庭木のお手入れなど、手間のかかるメンテナンス作業を丁寧に対応しました。', image: '/images/base-handyman/work1.jpg' },
    { title: '部分修繕対応', area: '対応エリア内', period: '作業時間：半日', description: '住まいの気になる箇所の部分修繕を、現地を確認しながら対応しました。', image: '/images/base-handyman/work2.jpg' },
  ],
  recruit: {
    title: '地域の暮らしを支える便利屋スタッフ募集',
    catch: '未経験でも、体を動かす仕事が好きな方・人に感謝される仕事がしたい方を歓迎します。',
    jobs: ['便利屋スタッフ', '現場作業スタッフ', '運搬・ドライバー'],
    points: ['未経験OK', '体を動かす仕事', '人に感謝される', '副業OK'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-handyman/recruit.jpg',
    subImage: '/images/base-handyman/recruit2.jpg',
  },
};
