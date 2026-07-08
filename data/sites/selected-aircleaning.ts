import type { SiteData } from '../types';

// 個社サンプル：Selected（エアコンクリーニング・トラブル対応）
// エアコンクリーニングイチローと同一業務のため、文言はそのまま流用し企業情報・所在地表記のみ変更。
export const selectedAircleaning: SiteData = {
  slug: 'selected-aircleaning',
  logoText: 'S',
  theme: { primary: '#14263d', secondary: '#1f4e79', accent: '#c6a15b' },
  name: 'Selected',
  subName: 'エアコンクリーニング・トラブル対応の専門サービス',
  tagline: 'エアコンの汚れ・ニオイを、\n徹底洗浄します',
  lead: '分解洗浄からトラブル対応まで、エアコンのことならお任せください。',
  description:
    'エアコンの分解洗浄から、室外機クリーニング・防カビコート、各種トラブル対応まで行う専門サービスです。エアコンのお困りごとをまるごとご相談いただけます。',
  area: '郡山市を中心に福島県内対応',
  areaNote: '郡山市を中心に福島県内へ対応します',
  tel: '090-7567-3019',
  hours: 'お気軽にお問い合わせください',
  address: '〒963-1303 福島県郡山市熱海町玉川横山４',
  mapUrl:
    'https://www.google.com/maps/place/Selected/data=!4m2!3m1!1s0x0:0x6c4f6e9fb5e09429?sa=X&ved=1t:2428&ictx=111',
  contactTitle: 'エアコンの汚れ・ニオイ、まずはご相談ください。',
  contactDescription: '分解洗浄・室外機・防カビコート・トラブル対応など、お気軽にお問い合わせください。',
  heroImage: '/images/selected-aircleaning/hero.jpg',
  serviceHeroImage: '/images/selected-aircleaning/svctop.jpg',
  stats: [
    { label: '対応内容', value: '洗浄〜トラブル対応', note: 'エアコンまわりを幅広く対応' },
    { label: '対応範囲', value: '分解洗浄対応', note: '内部の汚れ・カビまで' },
    { label: '相談方法', value: '無料相談OK', note: '症状のご相談から歓迎' },
    { label: '対応エリア', value: '福島県内', note: '郡山市を中心に対応' },
  ],
  services: [
    { name: 'エアコンクリーニング（壁掛け）', label: 'STANDARD', text: '一般的な壁掛けエアコンを分解し、内部のカビや汚れ・ニオイの原因をしっかり洗浄します。', image: '/images/selected-aircleaning/svc1.jpg' },
    { name: 'エアコンクリーニング（お掃除機能付き）', label: 'AUTO-CLEAN', text: 'お掃除機能付きエアコンも、構造に合わせて分解・洗浄し、内部まできれいにします。', image: '/images/selected-aircleaning/svc2.jpg' },
    { name: '室外機クリーニング', label: 'OUTDOOR', text: '室外機まわりの汚れやホコリを除去し、効率的な運転をサポートします。', image: '/images/selected-aircleaning/svc3.jpg' },
    { name: '防カビ・抗菌コート', label: 'ANTI-MOLD', text: '洗浄後に防カビ・抗菌コートを施し、きれいな状態を長持ちさせます。', image: '/images/selected-aircleaning/svc4.jpg' },
    { name: 'その他各種トラブル対応', label: 'REPAIR', text: '効きが悪い・異音・水漏れなど、エアコンの各種トラブルを確認して対応します。', image: '/images/selected-aircleaning/svc5.jpg' },
  ],
  strengths: [
    { title: '汚れに合わせた丁寧な作業', text: 'エアコンの種類や汚れの状態に合わせて、最適な方法で洗浄します。', label: 'CAREFUL' },
    { title: '分解洗浄で根本から解決', text: '内部まで分解して洗浄し、カビやニオイの原因から解決します。', label: 'DEEP CLEAN' },
    { title: '地域密着でスピード対応', text: '郡山市を中心に、お困りごとへできる限り迅速に対応します。', label: 'LOCAL SPEED' },
  ],
  flow: ['お問い合わせ', '症状・状態の確認', 'お見積り', '作業実施', '完了確認'],
  works: [
    { title: 'エアコンクリーニング（壁掛け）', area: '福島県内', period: '作業時間：1〜2時間', description: '壁掛けエアコンを分解し、内部のカビや汚れを丁寧に洗浄しました。', image: '/images/selected-aircleaning/work1.jpg' },
    { title: 'その他各種トラブル対応', area: '福島県内', period: '作業時間：半日', description: 'エアコンの不具合の状態を確認し、原因に合わせて対応しました。', image: '/images/selected-aircleaning/work2.jpg' },
  ],
  recruit: {
    title: '一緒に働くスタッフを募集しています',
    catch: '未経験でも、手に職をつけたい方・丁寧な作業ができる方を歓迎します。',
    jobs: ['エアコンクリーニングスタッフ', '作業アシスタント', '受付・サポート'],
    points: ['技術を丁寧に習得できる', 'お客様に感謝される仕事', '経験者は優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/selected-aircleaning/recruit.jpg',
    subImage: '/images/selected-aircleaning/recruit2.jpg',
  },
};
