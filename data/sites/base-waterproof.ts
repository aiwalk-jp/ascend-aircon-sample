import type { SiteData } from '../types';

// 業種ベース：防水工事（仮会社「サンプル防水工業」）
export const baseWaterproof: SiteData = {
  slug: 'base-waterproof',
  logoText: 'W',
  theme: { primary: '#14263d', secondary: '#445569', accent: '#7f9bb3' },
  name: 'サンプル防水工業',
  subName: '建物を雨水から守る防水工事',
  tagline: '建物を雨水から守る、\n確かな防水工事。',
  lead: '屋上・ベランダの防水から、シート防水・ウレタン防水、雨漏り対応まで。建物の状態に合わせて的確に施工します。',
  description: '住宅・ビル・マンションの防水工事を行います。建物を雨水から守り、長持ちさせるための施工を丁寧に行います。',
  area: '地域密着で対応',
  areaNote: '地域のお客様の建物を丁寧に守ります',
  tel: '000-0000-0000',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒000-0000 ○○県○○市○○ 1-2-3',
  mapUrl: 'https://www.google.com/maps',
  heroImage: '/images/base-waterproof/hero.jpg',
  stats: [
    { label: '対応エリア', value: '地域密着', note: '地域のお客様へ迅速対応' },
    { label: '対応範囲', value: '調査〜施工後', note: '雨漏り対応まで一貫' },
    { label: '相談方法', value: '見積り無料', note: '建物の状態をご相談ください' },
    { label: '説明方針', value: '写真で共有', note: '劣化状況を見える化' },
  ],
  services: [
    { name: 'ウレタン防水', label: 'URETHANE', text: '複雑な形状にも対応しやすいウレタン防水で、屋上やベランダを守ります。', image: '/images/base-waterproof/work1.jpg' },
    { name: 'シート防水', label: 'SHEET', text: '塩ビ・ゴムシートによる防水で、広い面を効率よく施工します。', image: '/images/base-waterproof/work2.jpg' },
    { name: 'FRP防水', label: 'FRP', text: '軽量で丈夫なFRP防水で、ベランダや小面積の防水に対応します。', image: '/images/base-waterproof/work3.jpg' },
    { name: 'ベランダ・屋上防水', label: 'ROOFTOP', text: 'ベランダ・屋上の防水改修で、雨水の侵入を防ぎます。', image: '/images/base-waterproof/work1.jpg' },
    { name: '雨漏り対応', label: 'LEAK', text: '原因を調査し、写真をもとに分かりやすくご説明して補修します。', image: '/images/base-waterproof/work2.jpg' },
    { name: 'シーリング工事', label: 'SEALING', text: '外壁の目地やサッシまわりのシーリングで、防水性を高めます。', image: '/images/base-waterproof/work3.jpg' },
  ],
  strengths: [
    { title: '建物に合わせた工法選定', text: '建物の形状や状態に合わせて、最適な防水工法をご提案します。', label: 'BEST METHOD' },
    { title: '写真を活かした分かりやすい説明', text: '見えにくい劣化状況を写真で共有し、納得感のある提案を行います。', label: 'PHOTO REPORT' },
    { title: '調査から施工後まで一貫対応', text: '調査・見積・施工・完了確認まで、責任を持って対応します。', label: 'ONE STOP' },
  ],
  flow: ['お問い合わせ', '現地調査', 'お見積り・ご提案', 'ご契約', '施工', '完了確認・アフター'],
  works: [
    { title: '屋上ウレタン防水工事', area: '対応エリア内', period: '施工期間：5〜10日間', description: '劣化した屋上の防水層を確認し、ウレタン防水で雨水の侵入を防ぎました。', image: '/images/base-waterproof/work1.jpg' },
    { title: 'ベランダ防水改修', area: '対応エリア内', period: '施工期間：3〜5日間', description: 'ベランダの防水を改修し、建物を雨水から守る施工を行いました。', image: '/images/base-waterproof/work2.jpg' },
  ],
  recruit: {
    title: '建物を守る防水スタッフを募集しています',
    catch: '未経験でも、手に職をつけたい方・誠実に向き合える方を歓迎します。',
    jobs: ['防水工事スタッフ', '現場アシスタント', '施工管理'],
    points: ['現場で技術が身につく', '建物を守るやりがい', '経験者は即戦力として優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-waterproof/recruit.jpg',
    subImage: '/images/base-waterproof/work3.jpg',
  },
};
