import type { SiteData } from '../types';

// 株式会社Flumen 正式ホームページ（外壁塗装・外装リフォーム／栃木県宇都宮市）
// デザイン・構造はテンプレートのまま。色は theme-flumen（ブルー〜ライトシアン系）で差し替え。
// 画像は既存テンプレート画像（base-painting）を流用。
export const flumen: SiteData = {
  slug: 'flumen',
  logoText: 'F',
  logo: '/images/flumen/logo.png',
  representative: '代表取締役　小林凌乃介',
  brandClass: 'theme-flumen',
  theme: { primary: '#0e7490', secondary: '#155e75', accent: '#c6a15b' },
  name: '株式会社Flumen',
  subName: '栃木県の外壁塗装・屋根塗装・外装リフォーム',
  tagline: '住まいの価値を守る、\n誠実な外装リフォーム。',
  lead: '外壁塗装・屋根塗装・防水工事から外装リフォームまで、お客様に寄り添ったご提案・施工を行います。',
  description:
    '株式会社Flumenは、外壁塗装・屋根塗装・防水工事から外装リフォームまで、住まいの外装を総合的に手がける会社です。施工写真を使った分かりやすいご説明と、誠実な施工を大切にしています。',
  area: '栃木県を中心に対応',
  areaNote: '栃木県宇都宮市を中心に迅速対応いたします',
  tel: '028-612-8881',
  hours: '受付時間 9:00〜18:00',
  address: '〒321-0953 栃木県宇都宮市東宿郷3丁目1-8 大福ビル3F',
  mapUrl:
    'https://www.google.com/maps/place/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEFlumen/data=!4m2!3m1!1s0x0:0x785984077a7565df',
  contactTitle: '住まいの外装のこと、まずはご相談ください。',
  contactDescription: '現地調査・お見積り・ご相談など、お電話でお気軽にお問い合わせください。',
  heroImage: '/images/base-painting/hero.jpg',
  serviceHeroImage: '/images/base-painting/svctop.jpg',
  serviceLead: '住まいに合わせた最適な外装リフォームをご提案します。',
  stats: [
    { label: 'エリア', value: '地域密着', note: '栃木県を中心に迅速対応' },
    { label: '説明方針', value: '施工写真で共有', note: '施工内容を写真で分かりやすくご説明' },
    { label: '対応範囲', value: '調査〜施工まで対応', note: '現地調査から施工完了まで一貫対応' },
    { label: '相談', value: '相談しやすい', note: '小さな工事もお気軽にご相談ください' },
  ],
  services: [
    { name: '外壁塗装', label: 'PAINT', text: '外壁の状態に合わせた最適な塗装をご提案します。', image: '/images/base-painting/svc1.jpg', note: '色あせ・ひび割れ・チョーキングなど、外壁の劣化状況に合わせた最適な塗装をご提案します。' },
    { name: '屋根塗装', label: 'ROOF', text: '屋根材を保護し耐久性を高めます。', image: '/images/base-painting/svc2.jpg', note: '色あせ・サビ・防水性能の低下など、屋根の状態に合わせた塗装をご提案します。' },
    { name: '外装リフォーム', label: 'REFORM', text: '住まい全体の外装リフォームに対応します。', image: '/images/base-painting/svc5.jpg', note: '塗装だけでは改善できない箇所も、補修・交換を含めたご提案が可能です。' },
    { name: '防水工事', label: 'WATERPROOF', text: '屋上・ベランダなど各種防水施工に対応します。', image: '/images/base-painting/svc3.jpg', note: 'ベランダや屋上からの雨水侵入を防ぎ、建物の寿命を延ばします。' },
    { name: '雨漏り修理', label: 'LEAK', text: '原因調査から補修まで対応します。', image: '/images/base-painting/svc4.jpg', note: '原因をしっかり調査し、補修から再発防止まで対応します。' },
    { name: '外壁診断・ご相談', label: 'DIAGNOSIS', text: 'まずはお気軽にご相談ください。', image: '/images/base-painting/svc6.jpg', note: '「これって相談していいのかな？」そんな小さなお困りごとからお気軽にご相談ください。' },
  ],
  strengths: [
    { title: '現地調査から施工完了まで一貫対応', text: '現場確認から施工後まで責任を持って対応します。', label: 'ONE STOP' },
    { title: '施工写真で安心', text: '施工前後や施工中の写真をご共有し、分かりやすくご説明します。', label: 'PHOTO REPORT' },
    { title: '地域密着のスピード対応', text: '栃木県を中心に迅速に対応します。', label: 'LOCAL SPEED' },
  ],
  flow: ['お問い合わせ', '現地調査', 'ご提案・お見積り', 'ご契約', '施工', '完了確認・アフターフォロー'],
  works: [
    { title: '外壁塗装工事', area: '宇都宮市', period: '施工期間：14日間', description: '経年劣化した外壁を塗り替え、住まいの美観と耐久性を向上しました。', image: '/images/base-painting/work1.jpg' },
    { title: '屋根塗装工事', area: '鹿沼市', period: '施工期間：7日間', description: '屋根材の状態を確認し、耐候性を高める塗装を実施しました。', image: '/images/base-painting/work2.jpg' },
  ],
  recruit: {
    title: '一緒に働く仲間を募集しています',
    catch: '営業経験に関しては未経験者も歓迎します。',
    jobs: ['塗装職人', '営業担当'],
    points: ['現場で技術が身につく', '地域密着でお客様と近い仕事', '経験者優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/base-painting/recruit.jpg',
    subImage: '/images/base-painting/work3.jpg',
  },
};
