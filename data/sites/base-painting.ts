import type { SiteData } from '../types';

// 業種ベース：外壁塗装（仮会社「サンプル外壁塗装」）
export const basePainting: SiteData = {
  slug: 'base-painting',
  logoText: 'P',
  theme: { primary: '#143a2e', secondary: '#0f2f35', accent: '#c6a15b' },
  name: 'サンプル外壁塗装',
  subName: '地域密着の外壁塗装・防水工事',
  tagline: '住まいを長く守る、\n誠実な塗装工事。',
  lead: '外壁塗装・屋根塗装・防水工事・雨漏り対応まで、現地調査から施工後のフォローまで一貫して対応します。',
  description: '地域の住まいを守る塗装・リフォーム会社です。写真を使った分かりやすい説明と、誠実な施工を大切にしています。',
  area: '地域密着で対応',
  areaNote: '地域のお客様の住まいを丁寧に守ります',
  tel: '000-0000-0000',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒000-0000 ○○県○○市○○ 1-2-3',
  mapUrl: 'https://www.google.com/maps',
  heroImage: '/images/base-painting/hero.jpg',
  stats: [
    { label: '対応エリア', value: '地域密着', note: '地域のお客様へ迅速対応' },
    { label: '説明方針', value: '写真で共有', note: '劣化状況・施工内容を見える化' },
    { label: '対応範囲', value: '調査〜施工後', note: '住まいの困りごとを一貫対応' },
    { label: '相談方法', value: '電話相談OK', note: '小さな不安からご相談可能' },
  ],
  services: [
    { name: '外壁塗装', label: 'PAINT', text: '外壁の色あせ・ひび割れ・チョーキングなどを確認し、住まいに合った塗装をご提案します。', image: '/images/base-painting/work1.jpg' },
    { name: '屋根塗装', label: 'ROOF', text: '屋根材の劣化状況を確認し、防水性・耐久性を保つための塗装を行います。', image: '/images/base-painting/work2.jpg' },
    { name: '防水工事', label: 'WATERPROOF', text: 'ベランダ・屋上・外部まわりの防水工事に対応し、雨水の侵入を防ぎます。', image: '/images/base-painting/work3.jpg' },
    { name: '雨漏り対応', label: 'LEAK', text: '原因調査から補修まで、写真をもとに分かりやすくご説明します。', image: '/images/base-painting/work1.jpg' },
    { name: '外壁・屋根リフォーム', label: 'REFORM', text: '塗装だけでなく、住まいの状態に応じた改修・補修にも対応します。', image: '/images/base-painting/work2.jpg' },
    { name: '外まわり工事のご相談', label: 'SUPPORT', text: '住まいまわりの小規模な工事や補修もお気軽にご相談ください。', image: '/images/base-painting/work3.jpg' },
  ],
  strengths: [
    { title: '現地調査から施工後まで一貫対応', text: '調査・見積・施工・完了確認まで、責任を持って対応します。', label: 'ONE STOP' },
    { title: '写真を活かした分かりやすい説明', text: '劣化箇所や施工内容を写真で共有し、納得感のある提案を行います。', label: 'PHOTO REPORT' },
    { title: '地域密着のスピード対応', text: '地域を中心に、住まいの困りごとへ迅速に対応します。', label: 'LOCAL SPEED' },
  ],
  flow: ['お問い合わせ', '現地調査', 'お見積り・ご提案', 'ご契約', '施工', '完了確認・アフター'],
  works: [
    { title: '外壁塗装工事', area: '対応エリア内', period: '施工期間：14日間', description: '色あせ・ひび割れを確認し、外壁の状態に合わせた塗装を実施しました。', image: '/images/base-painting/work1.jpg' },
    { title: '屋根塗装工事', area: '対応エリア内', period: '施工期間：7日間', description: '屋根材の劣化状況を写真で共有し、防水性を高める塗装を行いました。', image: '/images/base-painting/work2.jpg' },
  ],
  recruit: {
    title: '一緒に地域の住まいを守る仲間を募集しています',
    catch: '未経験でも、誠実に仕事へ向き合える方を歓迎します。',
    jobs: ['塗装職人', '現場管理', '営業・顧客対応'],
    points: ['現場で技術が身につく', '地域密着でお客様の顔が見える', '経験者は即戦力として優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-painting/recruit.jpg',
    subImage: '/images/base-painting/work3.jpg',
  },
};
