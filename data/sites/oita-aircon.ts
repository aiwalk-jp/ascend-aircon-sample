import type { SiteData } from '../types';

// 業種ベース：エアコン工事（仮会社「サンプル空調サービス」）
// 個社サンプル作成時は name / tel / address / mapUrl / area を差し替える。
export const oitaAircon: SiteData = {
  slug: 'oita-aircon',
  logoText: 'O',
  theme: { primary: '#0f2f35', secondary: '#14263d', accent: '#c6a15b' },
  name: 'エアコン修理センター大分',
  subName: '地域密着のエアコン工事・空調設備工事',
  tagline: '大分市周辺のエアコン工事を、\n迅速・丁寧に。',
  lead: 'エアコンの取付・交換・移設から、業務用空調の工事・メンテナンスまで。現地確認からアフター対応まで一貫して承ります。',
  description: 'エアコン修理センター大分は、家庭用エアコンから業務用空調設備まで幅広く対応する工事業者です。現場状況をしっかり確認し、丁寧で分かりやすい施工を心がけています。',
  area: '大分市周辺対応',
  areaNote: '大分市周辺のお客様へ迅速に対応いたします',
  tel: '070-9512-5910',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒870-0860 大分県大分市明磧町1丁目5−38',
  mapUrl: 'https://www.google.com/maps/place/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E4%BF%AE%E7%90%86%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC%E5%A4%A7%E5%88%86/data=!4m2!3m1!1s0x0:0x42daef55e59ab620?sa=X&ved=1t:2428&ictx=111',
  contactTitle: 'エアコン・空調の気になること、まずはご相談ください。',
  contactDescription: '現地確認・お見積り・ご相談など、お電話でお気軽にお問い合わせください。',
  heroImage: '/images/base-aircon/hero.jpg',
  serviceHeroImage: '/images/base-aircon/svctop.jpg',
  stats: [
    { label: '対応エリア', value: '地域密着', note: '地域のお客様へ迅速対応' },
    { label: '対応内容', value: '取付〜メンテ', note: '家庭用・業務用に対応' },
    { label: '相談方法', value: '電話相談OK', note: '見積り・現地確認のご相談歓迎' },
    { label: '対応スピード', value: '迅速対応', note: '急ぎの工事もご相談ください' },
  ],
  services: [
    { name: 'エアコン取付', label: 'INSTALL', text: '新規のエアコン取付に対応。設置場所や配管ルートを確認し、住まいに合わせて丁寧に施工します。', image: '/images/base-aircon/svc1.jpg' },
    { name: 'エアコン交換・入替', label: 'REPLACE', text: '古いエアコンの撤去から新しい機器の設置まで、入替工事を一括で対応します。', image: '/images/base-aircon/svc2.jpg' },
    { name: 'エアコン移設', label: 'RELOCATE', text: '引っ越しやレイアウト変更に伴うエアコンの取り外し・再設置に対応します。', image: '/images/base-aircon/svc3.jpg' },
    { name: '業務用空調工事', label: 'AC SYSTEM', text: '店舗・事務所などの業務用エアコン・空調設備の工事に対応します。', image: '/images/base-aircon/svc4.jpg' },
    { name: 'クリーニング・メンテナンス', label: 'MAINTENANCE', text: '効きが悪い・異音がするなど、日常のメンテナンスやクリーニングもご相談ください。', image: '/images/base-aircon/svc5.jpg' },
    { name: '修理・不具合対応', label: 'REPAIR', text: 'エアコンの不具合やトラブルについて、現地確認のうえ対応方法をご提案します。', image: '/images/base-aircon/svc6.jpg' },
  ],
  strengths: [
    { title: '地域密着のスピード対応', text: '地域を中心に、急ぎのご相談にもできる限り迅速に対応します。', label: 'LOCAL SPEED' },
    { title: '現場に合わせた丁寧な施工', text: '建物の構造や設置環境を確認し、無理のない施工方法をご提案します。', label: 'CAREFUL WORK' },
    { title: '家庭用から業務用まで対応', text: '住まいのエアコンから店舗・事務所の空調まで、幅広い工事に対応します。', label: 'WIDE RANGE' },
  ],
  flow: ['お問い合わせ', '現地確認・ヒアリング', 'お見積り・ご提案', '施工日の調整', '施工', '完了確認・アフター'],
  works: [
    { title: '家庭用エアコン取付', area: '対応エリア内', period: '施工時間：半日〜1日', description: '設置場所と配管ルートを確認し、室内外の見た目にも配慮して取付を行いました。', image: '/images/base-aircon/work1.jpg' },
    { title: 'エアコン入替工事', area: '対応エリア内', period: '施工時間：1日', description: '既存機器の撤去から新規設置まで、当日中に入替対応を行いました。', image: '/images/base-aircon/work2.jpg' },
  ],
  recruit: {
    title: '一緒に働く空調工事スタッフを募集しています',
    catch: '未経験でも、手に職をつけたい方・誠実に仕事へ向き合える方を歓迎します。',
    jobs: ['エアコン取付スタッフ', '空調設備スタッフ', '現場アシスタント'],
    points: ['現場で技術が身につく', '地域密着でお客様の顔が見える', '経験者は即戦力として優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-aircon/recruit.jpg',
    subImage: '/images/base-aircon/work3.jpg',
  },
};
