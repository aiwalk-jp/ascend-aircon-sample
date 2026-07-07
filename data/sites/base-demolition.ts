import type { SiteData } from '../types';

// 業種ベース：解体工事（仮会社「サンプル解体工業」）
export const baseDemolition: SiteData = {
  slug: 'base-demolition',
  logoText: 'D',
  theme: { primary: '#2b2f36', secondary: '#3a3f47', accent: '#c98a3c' },
  name: 'サンプル解体工業',
  subName: '安全・丁寧な解体工事・空き家解体',
  tagline: '次のはじまりのための、\n安全な解体工事。',
  lead: '家屋・空き家の解体から、内装解体、整地まで。近隣への配慮と安全管理を徹底し、丁寧に施工します。',
  description: '木造・軽量鉄骨などの解体工事を行います。近隣への配慮・安全管理・適正な廃材処理を徹底し、安心してお任せいただけます。',
  area: '地域密着で対応',
  areaNote: '地域のお客様へ安全・丁寧に対応します',
  tel: '000-0000-0000',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒000-0000 ○○県○○市○○ 1-2-3',
  mapUrl: 'https://www.google.com/maps',
  heroImage: '/images/base-demolition/hero.jpg',
  stats: [
    { label: '対応エリア', value: '地域密着', note: '地域のお客様へ丁寧対応' },
    { label: '対応範囲', value: '解体〜整地', note: '廃材処理まで一貫対応' },
    { label: '相談方法', value: '見積り無料', note: '現地確認のご相談歓迎' },
    { label: '安全管理', value: '近隣配慮', note: '安全・養生を徹底' },
  ],
  services: [
    { name: '家屋解体', label: 'HOUSE', text: '木造・軽量鉄骨などの家屋解体に対応。近隣に配慮して施工します。', image: '/images/base-demolition/work1.jpg' },
    { name: '空き家解体', label: 'VACANT', text: '老朽化した空き家の解体・撤去を、安全管理を徹底して行います。', image: '/images/base-demolition/work2.jpg' },
    { name: '内装解体', label: 'INTERIOR', text: '店舗・テナントの原状回復に伴う内装解体に対応します。', image: '/images/base-demolition/work3.jpg' },
    { name: '整地・外構撤去', label: 'LEVELING', text: '解体後の整地や、ブロック塀・カーポートなどの撤去も対応します。', image: '/images/base-demolition/work1.jpg' },
    { name: '廃材の分別・処理', label: 'DISPOSAL', text: '廃材を適正に分別・処理し、環境と法令に配慮して対応します。', image: '/images/base-demolition/work2.jpg' },
    { name: '各種お手続きのご相談', label: 'SUPPORT', text: '解体に伴う各種お手続きについても、お気軽にご相談ください。', image: '/images/base-demolition/work3.jpg' },
  ],
  strengths: [
    { title: '近隣配慮と安全管理の徹底', text: '養生・散水・安全対策を徹底し、近隣に配慮して施工します。', label: 'SAFETY' },
    { title: '適正な廃材処理', text: '廃材を適正に分別・処理し、環境と法令に配慮して対応します。', label: 'PROPER' },
    { title: '分かりやすい見積り', text: '作業内容と費用を明確にご説明し、安心してご依頼いただけます。', label: 'CLEAR' },
  ],
  flow: ['お問い合わせ', '現地調査', 'お見積り・ご提案', 'ご契約・各種手続き', '解体・整地', '完了確認'],
  works: [
    { title: '木造家屋の解体工事', area: '対応エリア内', period: '施工期間：7〜14日間', description: '近隣に配慮しながら、安全管理を徹底して解体・整地を行いました。', image: '/images/base-demolition/work1.jpg' },
    { title: '空き家の解体・撤去', area: '対応エリア内', period: '施工期間：7〜10日間', description: '老朽化した建物を安全に解体し、廃材を適正に処理しました。', image: '/images/base-demolition/work2.jpg' },
  ],
  recruit: {
    title: '安全第一で働くスタッフを募集しています',
    catch: '未経験でも、体を動かす仕事に前向きに取り組める方を歓迎します。',
    jobs: ['解体スタッフ', '重機オペレーター', '現場アシスタント'],
    points: ['現場で技術が身につく', 'チームで進める達成感', '経験者・資格保持者は優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-demolition/recruit.jpg',
    subImage: '/images/base-demolition/work3.jpg',
  },
};
