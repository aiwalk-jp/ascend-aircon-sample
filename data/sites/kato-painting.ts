import type { SiteData } from '../types';

// 個社サンプル：加藤塗装（外壁塗装・栃木県鹿沼市）
export const katoPainting: SiteData = {
  slug: 'kato-painting',
  logoText: 'K',
  representative: '代表　加藤勇武',
  theme: { primary: '#143a2e', secondary: '#0f2f35', accent: '#c6a15b' },
  name: '加藤塗装',
  subName: '鹿沼市の外壁塗装・屋根塗装・外装工事',
  tagline: '鹿沼市周辺の外壁塗装を、\n迅速・丁寧に。',
  lead: '外壁塗装・屋根塗装から雨樋・カーポート施工まで。現地調査・お見積り・施工まで迅速に、ご希望の日程に合わせて対応します。',
  description:
    '加藤塗装は、外壁・屋根塗装から雨樋・カーポート施工まで対応する、鹿沼市の塗装店です。現地調査からお見積り・施工まで迅速に、ご希望の日程に合わせて対応します。塗料の調達力にも自信があり、材料の入荷待ちで工事が延びるご不安を減らせるよう努めています。',
  area: '鹿沼市周辺対応',
  areaNote: '鹿沼市周辺のお客様へ迅速に対応いたします',
  tel: '090-7908-5428',
  hours: 'お電話でお気軽にご相談ください',
  address: '栃木県鹿沼市西茂呂3-4-13',
  // GoogleマップURLは未提供のため、住所での地図検索リンクを暫定設定（正式リンクが決まり次第差し替え）
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=%E6%A0%83%E6%9C%A8%E7%9C%8C%E9%B9%BF%E6%B2%BC%E5%B8%82%E8%A5%BF%E8%8C%82%E5%91%823-4-13',
  contactTitle: '住まいの塗り替え、まずはご相談ください。',
  contactDescription: '現地調査・お見積り・ご相談など、お電話でお気軽にお問い合わせください。',
  heroImage: '/images/kato-painting/hero.jpg',
  serviceHeroImage: '/images/kato-painting/svctop.jpg',
  stats: [
    { label: '対応スピード', value: '迅速対応', note: '現地調査・お見積り・施工まで素早く' },
    { label: '施工日程', value: 'ご希望に対応', note: 'ご希望の日程に合わせて施工' },
    { label: '材料調達', value: '調達力に自信', note: '塗料問屋・協力会社との強い連携' },
    { label: '対応エリア', value: '鹿沼市中心', note: '鹿沼市周辺へ迅速に対応' },
  ],
  services: [
    { name: '外壁塗装', label: 'PAINT', text: '外壁の色あせ・ひび割れ・チョーキングなどを確認し、住まいに合った塗装をご提案します。', image: '/images/kato-painting/svc1.jpg' },
    { name: '屋根塗装', label: 'ROOF', text: '屋根材の劣化状況を確認し、防水性・耐久性を保つための塗装を行います。', image: '/images/kato-painting/svc2.jpg' },
    { name: '防水工事', label: 'WATERPROOF', text: 'ベランダ・屋上・外部まわりの防水工事に対応し、雨水の侵入を防ぎます。', image: '/images/kato-painting/svc3.jpg' },
    { name: '雨漏り対応', label: 'LEAK', text: '原因調査から補修まで、写真をもとに分かりやすくご説明します。', image: '/images/kato-painting/svc4.jpg' },
    { name: '外壁・屋根リフォーム', label: 'REFORM', text: '塗装だけでなく、住まいの状態に応じた改修・補修にも対応します。', image: '/images/kato-painting/svc5.jpg' },
    { name: '雨樋・カーポート施工', label: 'EXTERIOR', text: '雨樋の交換・補修やカーポートの設置など、住まいの外まわり工事にも対応します。', image: '/images/kato-painting/svc6.jpg' },
  ],
  strengths: [
    { title: '現地調査から施工までスピード対応', text: '現地調査・お見積り・施工まで無駄なく進めます。お急ぎのご相談にもできる限り迅速に対応します。', label: 'SPEED' },
    { title: 'ご希望の施工日程に合わせやすい', text: '「この日までに仕上げたい」といったご希望の日程にも、できる限り合わせて施工します。', label: 'SCHEDULE' },
    { title: '塗料の調達力に自信', text: '塗料の入手が難しい時期も、塗料問屋や協力会社との関係を活かして材料をスムーズに確保。入荷待ちで工事が延びるご不安を減らします。', label: 'SUPPLY' },
  ],
  flow: ['お問い合わせ', '現地調査', 'ご提案・お見積り', 'ご契約', '施工', '完了確認・アフターフォロー'],
  works: [
    { title: '外壁塗装工事', area: '鹿沼市', period: '施工期間：14日間', description: '経年劣化した外壁を確認し、住まいに合わせた塗装で美観と耐久性を高めました。', image: '/images/kato-painting/work1.jpg' },
    { title: '屋根塗装工事', area: '鹿沼市', period: '施工期間：7日間', description: '屋根材の状態を確認し、防水性・耐候性を高める塗装を実施しました。', image: '/images/kato-painting/work2.jpg' },
  ],
  recruit: {
    title: '一緒に働く仲間を募集しています',
    catch: '塗装の技術を身につけたい方、お客様と近い距離で働きたい方を歓迎します。',
    jobs: ['塗装職人', '営業担当'],
    points: ['現場で塗装技術が身につく', '地域密着でお客様と近い仕事', '経験者は優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/kato-painting/recruit.jpg',
    subImage: '/images/kato-painting/work3.jpg',
  },
};
