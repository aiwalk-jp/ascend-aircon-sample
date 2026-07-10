import type { SiteData } from '../types';

// 個社サンプル：エアコンクリーニングイチロー（エアコンクリーニング・トラブル対応）
export const ichiroAircleaning: SiteData = {
  slug: 'ichiro-aircleaning',
  category: 'service',
  logoText: 'I',
  theme: { primary: '#14263d', secondary: '#1f4e79', accent: '#c6a15b' },
  name: 'エアコンクリーニングイチロー',
  subName: 'エアコンクリーニング・トラブル対応の専門サービス',
  tagline: 'エアコンの汚れ・ニオイを、\n徹底洗浄します',
  lead: '分解洗浄からトラブル対応まで、エアコンのことならお任せください。',
  description:
    'エアコンの分解洗浄から、室外機クリーニング・防カビコート、各種トラブル対応まで行う専門サービスです。エアコンのお困りごとをまるごとご相談いただけます。',
  area: '横浜市港南区を中心に神奈川県内対応',
  areaNote: '横浜市港南区を中心に神奈川県内へ対応します',
  tel: '080-6677-5431',
  hours: 'お気軽にお問い合わせください',
  address: '〒234-0051 神奈川県横浜市港南区日野４丁目４８−５',
  mapUrl:
    'https://www.google.com/maps/place/%E3%82%A8%E3%82%A2%E3%82%B3%E3%83%B3%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%8B%E3%83%B3%E3%82%B0+%E3%82%A4%E3%83%81%E3%83%AD%E3%83%BC/@35.3936457,139.576695,17z/data=!3m1!4b1!4m6!3m5!1s0xce1688c19d5a4f3:0x140d68a37526f175!8m2!3d35.3936414!4d139.5792699!16s%2Fg%2F11sn_5mhcd',
  contactTitle: 'エアコンの汚れ・ニオイ、まずはご相談ください。',
  contactDescription: '分解洗浄・室外機・防カビコート・トラブル対応など、お気軽にお問い合わせください。',
  heroImage: '/images/ichiro-aircleaning/hero.jpg',
  serviceHeroImage: '/images/ichiro-aircleaning/svctop.jpg',
  stats: [
    { label: '対応内容', value: '洗浄〜トラブル対応', note: 'エアコンまわりを幅広く対応' },
    { label: '対応範囲', value: '分解洗浄対応', note: '内部の汚れ・カビまで' },
    { label: '相談方法', value: '無料相談OK', note: '症状のご相談から歓迎' },
    { label: '対応エリア', value: '神奈川県内', note: '横浜市港南区を中心に対応' },
  ],
  services: [
    { name: 'エアコンクリーニング（壁掛け）', label: 'STANDARD', text: '一般的な壁掛けエアコンを分解し、内部のカビや汚れ・ニオイの原因をしっかり洗浄します。', image: '/images/ichiro-aircleaning/svc1.jpg' },
    { name: 'エアコンクリーニング（お掃除機能付き）', label: 'AUTO-CLEAN', text: 'お掃除機能付きエアコンも、構造に合わせて分解・洗浄し、内部まできれいにします。', image: '/images/ichiro-aircleaning/svc2.jpg' },
    { name: '室外機クリーニング', label: 'OUTDOOR', text: '室外機まわりの汚れやホコリを除去し、効率的な運転をサポートします。', image: '/images/ichiro-aircleaning/svc3.jpg' },
    { name: '防カビ・抗菌コート', label: 'ANTI-MOLD', text: '洗浄後に防カビ・抗菌コートを施し、きれいな状態を長持ちさせます。', image: '/images/ichiro-aircleaning/svc4.jpg' },
    { name: 'その他各種トラブル対応', label: 'REPAIR', text: '効きが悪い・異音・水漏れなど、エアコンの各種トラブルを確認して対応します。', image: '/images/ichiro-aircleaning/svc5.jpg' },
  ],
  strengths: [
    { title: '汚れに合わせた丁寧な作業', text: 'エアコンの種類や汚れの状態に合わせて、最適な方法で洗浄します。', label: 'CAREFUL' },
    { title: '分解洗浄で根本から解決', text: '内部まで分解して洗浄し、カビやニオイの原因から解決します。', label: 'DEEP CLEAN' },
    { title: '地域密着でスピード対応', text: '横浜市港南区を中心に、お困りごとへできる限り迅速に対応します。', label: 'LOCAL SPEED' },
  ],
  flow: ['お問い合わせ', '症状・状態の確認', 'お見積り', '作業実施', '完了確認'],
  works: [
    { title: 'エアコンクリーニング（壁掛け）', area: '神奈川県内', period: '作業時間：1〜2時間', description: '壁掛けエアコンを分解し、内部のカビや汚れを丁寧に洗浄しました。', image: '/images/ichiro-aircleaning/work1.jpg' },
    { title: 'その他各種トラブル対応', area: '神奈川県内', period: '作業時間：半日', description: 'エアコンの不具合の状態を確認し、原因に合わせて対応しました。', image: '/images/ichiro-aircleaning/work2.jpg' },
  ],
  recruit: {
    title: '一緒に働くスタッフを募集しています',
    catch: '未経験でも、手に職をつけたい方・丁寧な作業ができる方を歓迎します。',
    jobs: ['エアコンクリーニングスタッフ', '作業アシスタント', '受付・サポート'],
    points: ['技術を丁寧に習得できる', 'お客様に感謝される仕事', '経験者は優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/ichiro-aircleaning/recruit.jpg',
    subImage: '/images/ichiro-aircleaning/recruit2.jpg',
  },
};
