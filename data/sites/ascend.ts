import type { SiteData } from '../types';

// ASCEND（エアコン工事業者 / 空調設備工事業者 / 東京都清瀬市）
export const ascend: SiteData = {
  slug: 'ascend',
  logoText: 'A',
  name: 'ASCEND',
  subName: '東京都清瀬市周辺のエアコン工事・空調設備工事',
  tagline: '清瀬市周辺のエアコン工事を、\n迅速・丁寧に。',
  lead: 'エアコンの取付・交換・移設から、業務用空調の工事・メンテナンスまで。現地確認からアフター対応まで一貫して承ります。',
  description:
    '東京都清瀬市を拠点に、家庭用エアコンから業務用空調設備まで幅広く対応する工事業者です。現場状況をしっかり確認し、丁寧で分かりやすい施工を心がけています。',
  area: '東京都清瀬市周辺対応',
  areaNote: '東京都内を中心に迅速対応いたします',
  tel: '080-5961-0206',
  hours: 'お電話でお気軽にご相談ください',
  address: '〒204-0001 東京都清瀬市下宿３丁目',
  mapUrl:
    'https://www.google.com/maps/place/ASCEND/@35.8031658,139.5419979,17z/data=!3m1!4b1!4m6!3m5!1s0x6018e9e26ad24295:0xecd0e6dba5af6c30!8m2!3d35.8031658!4d139.5419979!16s%2Fg%2F11z56fqrpr?entry=ttu&g_ep=EgoyMDI2MDYyOS4wIKXMDSoASAFQAw%3D%3D',
  contactTitle: 'エアコン・空調の気になること、まずはご相談ください。',
  contactDescription: '現地確認・お見積り・採用相談など、お電話でお気軽にお問い合わせください。',
  // ヒーロー背景画像。未設定にするとダークグラデーションにフォールバックし、見栄えは崩れない。
  heroImage: '/images/ascend/hero.jpg',
  stats: [
    { label: '対応エリア', value: '清瀬市周辺', note: '東京都内を中心に迅速対応' },
    { label: '対応内容', value: '取付〜メンテ', note: '家庭用・業務用エアコンに対応' },
    { label: '相談方法', value: '電話相談OK', note: '見積り・現地確認のご相談歓迎' },
    { label: '対応スピード', value: '迅速対応', note: '急ぎの工事もまずはご相談ください' },
  ],
  services: [
    { name: 'エアコン取付', label: 'INSTALL', text: '新規のエアコン取付に対応します。設置場所や配管ルートを確認し、住まいに合わせて丁寧に施工します。', image: '/images/ascend/work1.jpg' },
    { name: 'エアコン交換・入替', label: 'REPLACE', text: '古いエアコンの撤去から新しい機器の設置まで、入替工事を一括で対応します。', image: '/images/ascend/work2.jpg' },
    { name: 'エアコン移設', label: 'RELOCATE', text: '引っ越しやレイアウト変更に伴うエアコンの取り外し・再設置に対応します。', image: '/images/ascend/work4.jpg' },
    { name: '業務用空調工事', label: 'AC SYSTEM', text: '店舗・事務所などの業務用エアコン・空調設備の工事に対応します。', image: '/images/ascend/work3.jpg' },
    { name: 'クリーニング・メンテナンス', label: 'MAINTENANCE', text: '効きが悪い・異音がするなど、日常のメンテナンスやクリーニングもご相談ください。', image: '/images/ascend/work1.jpg' },
    { name: '修理・不具合対応', label: 'REPAIR', text: 'エアコンの不具合やトラブルについて、現地確認のうえ対応方法をご提案します。', image: '/images/ascend/work2.jpg' },
  ],
  strengths: [
    { title: '地域密着のスピード対応', text: '清瀬市周辺を中心に、急ぎのご相談にもできる限り迅速に対応します。', label: 'LOCAL SPEED' },
    { title: '現場に合わせた丁寧な施工', text: '建物の構造や設置環境を確認し、無理のない施工方法をご提案します。', label: 'CAREFUL WORK' },
    { title: '家庭用から業務用まで対応', text: '住まいのエアコンから店舗・事務所の空調まで、幅広い工事に対応します。', label: 'WIDE RANGE' },
  ],
  flow: ['お問い合わせ', '現地確認・ヒアリング', 'お見積り・ご提案', '施工日の調整', '施工', '完了確認・アフター'],
  works: [
    { title: '家庭用エアコン取付', area: '清瀬市', period: '施工時間：半日〜1日', description: '設置場所と配管ルートを確認し、室内外の見た目にも配慮して取付を行いました。', image: '/images/ascend/work1.jpg' },
    { title: 'エアコン入替工事', area: '東京都内', period: '施工時間：1日', description: '既存機器の撤去から新規設置まで、当日中に入替対応を行いました。', image: '/images/ascend/work2.jpg' },
    { title: '業務用エアコン設置', area: '東京都内', period: '施工時間：1〜2日', description: '店舗・事務所の業務用空調について、現場に合わせて設置工事を行いました。', image: '/images/ascend/work3.jpg' },
    { title: 'エアコン移設・再設置', area: '清瀬市周辺', period: '施工時間：半日', description: 'レイアウト変更に伴う取り外し・再設置に対応し、配管まわりも丁寧に仕上げました。', image: '/images/ascend/work4.jpg' },
  ],
  recruit: {
    title: '一緒に働く空調工事スタッフを募集しています',
    catch: '未経験でも、手に職をつけたい方・誠実に仕事へ向き合える方を歓迎します。',
    jobs: ['エアコン取付スタッフ', '空調設備スタッフ', '現場アシスタント'],
    points: ['現場で技術が身につく', '地域密着でお客様の顔が見える', '経験者は即戦力として優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    // Indeed等の求人URLがあれば設定。未設定の場合はページ内の応募案内へ移動します。
    applyUrl: '',
    image: '/images/ascend/recruit.jpg',
    subImage: '/images/ascend/work3.jpg',
  },
};
