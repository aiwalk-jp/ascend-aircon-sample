import type { SiteData } from '../types';

// 業種ベース：造園・庭木管理（仮会社「サンプル造園」）
export const baseGarden: SiteData = {
  slug: 'base-garden',
  logoText: 'G',
  theme: { primary: '#22402f', secondary: '#556b2f', accent: '#9caf6a' },
  name: 'サンプル造園',
  subName: '庭づくりと庭木の管理を支える造園サービス',
  tagline: '心地よい庭を、\n美しく保つ。',
  lead: '庭木の剪定・伐採から、植栽・庭づくり、除草・お手入れまで。季節や樹木の状態に合わせて丁寧に管理します。',
  description: '個人邸から店舗まで、庭づくりと庭木の管理を行う造園サービスです。季節に合わせた手入れで、美しい庭を長く保ちます。',
  area: '地域密着で対応',
  areaNote: '地域のお客様の庭を丁寧に手入れします',
  tel: '000-0000-0000',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒000-0000 ○○県○○市○○ 1-2-3',
  mapUrl: 'https://www.google.com/maps',
  heroImage: '/images/base-garden/hero.jpg',
  stats: [
    { label: '対応エリア', value: '地域密着', note: '地域のお客様へ丁寧対応' },
    { label: '対応範囲', value: '剪定〜庭づくり', note: 'お手入れから施工まで' },
    { label: '相談方法', value: '見積り無料', note: '庭の状態をご相談ください' },
    { label: '対応姿勢', value: '季節対応', note: '樹木の状態に合わせて管理' },
  ],
  services: [
    { name: '庭木の剪定', label: 'PRUNING', text: '樹木の種類や状態に合わせて剪定し、風通しと見た目を整えます。', image: '/images/base-garden/work1.jpg' },
    { name: '伐採・抜根', label: 'FELLING', text: '大きくなりすぎた樹木の伐採や、抜根・処分まで対応します。', image: '/images/base-garden/work2.jpg' },
    { name: '植栽・庭づくり', label: 'PLANTING', text: '植栽や庭のレイアウトを、住まいに合わせてご提案・施工します。', image: '/images/base-garden/work3.jpg' },
    { name: '除草・草刈り', label: 'WEEDING', text: '伸びた雑草の除草・草刈りで、庭まわりをすっきり保ちます。', image: '/images/base-garden/work1.jpg' },
    { name: '消毒・害虫対策', label: 'PROTECT', text: '樹木の消毒や害虫対策で、庭木を健やかに保ちます。', image: '/images/base-garden/work2.jpg' },
    { name: '定期メンテナンス', label: 'MAINTENANCE', text: '定期的な手入れで、美しい庭を長く維持できるようサポートします。', image: '/images/base-garden/work3.jpg' },
  ],
  strengths: [
    { title: '樹木に合わせた丁寧な手入れ', text: '樹種や季節に合わせて、樹木の状態を見ながら丁寧に管理します。', label: 'CAREFUL' },
    { title: '庭づくりからお手入れまで対応', text: '新しい庭づくりから日々のお手入れまで、幅広く対応します。', label: 'ONE STOP' },
    { title: '地域密着で気軽に相談', text: '小さなお手入れのご相談から、地域のお客様に寄り添って対応します。', label: 'LOCAL' },
  ],
  flow: ['お問い合わせ', '現地確認・ヒアリング', 'お見積り・ご提案', 'ご予約', '作業', '仕上がり確認'],
  works: [
    { title: '庭木の剪定・お手入れ', area: '対応エリア内', period: '作業時間：半日〜1日', description: '樹木の状態に合わせて剪定し、風通しと見た目を整えました。', image: '/images/base-garden/work1.jpg' },
    { title: '植栽・庭づくり', area: '対応エリア内', period: '施工期間：3〜7日間', description: '住まいに合わせた植栽で、心地よい庭空間をつくりました。', image: '/images/base-garden/work2.jpg' },
  ],
  recruit: {
    title: '庭を美しく保つスタッフを募集しています',
    catch: '自然や植物が好きな方、丁寧な作業にやりがいを感じる方を歓迎します。',
    jobs: ['造園スタッフ', '剪定・お手入れスタッフ', '現場アシスタント'],
    points: ['季節を感じられる仕事', '現場で技術が身につく', '経験者は優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-garden/recruit.jpg',
    subImage: '/images/base-garden/work3.jpg',
  },
};
