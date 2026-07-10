import type { SiteData } from '../types';

// 個社サンプル：洗濯機のウラカーン（生活サービス／洗濯機クリーニング・修理）
export const sentakukiUracaan: SiteData = {
  slug: 'sentakuki-uracaan',
  category: 'service',
  logoText: 'U',
  theme: { primary: '#14263d', secondary: '#1f4e79', accent: '#c6a15b' },
  name: '洗濯機のウラカーン',
  subName: '洗濯機クリーニング・修理の専門サービス',
  tagline: '洗濯機のトラブル、\nプロが解決します',
  lead: '分解クリーニングから修理まで、洗濯機のことならお任せください。',
  description:
    '洗濯機の分解クリーニングから、給排水・乾燥のトラブル、各種修理まで対応する専門サービスです。洗濯機のお困りごとをまるごとご相談いただけます。',
  area: '全国対応',
  areaNote: '全国のお客様の洗濯機トラブルに対応します',
  tel: '080-6954-7008',
  hours: 'お気軽にお問い合わせください',
  address: '〒444-0244 愛知県岡崎市下青野町 字本築70番地メゾネットランド下青野105',
  mapUrl:
    'https://www.google.com/maps/place/%E6%B4%97%E6%BF%AF%E6%A9%9F%E3%81%AE%E3%82%A6%E3%83%A9%E3%82%AB%E3%83%BC%E3%83%B3/@34.9413352,137.0225079,12z/data=!4m10!1m2!2m1!1z5rSX5r-v5qmf44Gu44Km44Op44Kr44O844Oz!3m6!1s0x600365f3cbf520db:0x33e51a1a979f9cda!8m2!3d34.9413352!4d137.1625836!15sChvmtJfmv6_mqZ_jga7jgqbjg6njgqvjg7zjg7OSAR93YXNoZXJfYW5kX2RyeWVyX3JlcGFpcl9zZXJ2aWNl4AEA!16s%2Fg%2F11z1_kk5kj?entry=ttu&g_ep=EgoyMDI2MDcwNS4wIKXMDSoASAFQAw%3D%3D',
  contactTitle: '洗濯機のトラブル、まずはご相談ください。',
  contactDescription: '分解クリーニング・修理・トラブル対応など、お気軽にお問い合わせください。',
  heroImage: '/images/sentakuki-uracaan/hero.jpg',
  serviceHeroImage: '/images/sentakuki-uracaan/svctop.jpg',
  stats: [
    { label: '対応内容', value: 'クリーニング〜修理', note: '洗濯機まわりを幅広く対応' },
    { label: '対応範囲', value: '分解洗浄対応', note: '内部の汚れ・ニオイまで' },
    { label: '相談方法', value: '無料相談OK', note: '症状のご相談から歓迎' },
    { label: '対応エリア', value: '全国対応', note: '全国のお客様に対応' },
  ],
  services: [
    { name: '洗濯機分解クリーニング', label: 'CLEANING', text: '洗濯機を分解し、内部のカビや汚れ・ニオイの原因をしっかり洗浄します。', image: '/images/sentakuki-uracaan/svc1.jpg' },
    { name: '給排水トラブル対応', label: 'WATER', text: '給水・排水の不具合や水漏れなど、洗濯機まわりの水回りトラブルに対応します。', image: '/images/sentakuki-uracaan/svc2.jpg' },
    { name: '乾燥トラブル対応', label: 'DRYING', text: '乾燥しない・乾きが悪いなど、乾燥機能のトラブルを確認して対応します。', image: '/images/sentakuki-uracaan/svc3.jpg' },
    { name: '各種修理対応', label: 'REPAIR', text: '動かない・異音がするなど、洗濯機の各種不具合の修理に対応します。', image: '/images/sentakuki-uracaan/svc4.jpg' },
  ],
  strengths: [
    { title: '洗濯機のトラブルをまるごと対応', text: 'クリーニングから修理まで、洗濯機のことならまとめてご相談いただけます。', label: 'ALL-IN-ONE' },
    { title: '分解洗浄で根本から解決', text: '内部まで分解して洗浄し、汚れやニオイの原因から解決します。', label: 'DEEP CLEAN' },
    { title: '安心のスピード対応', text: 'お困りのトラブルに、できる限り迅速に対応します。', label: 'QUICK' },
  ],
  flow: ['お問い合わせ', '症状・状態の確認', 'お見積り', '作業実施', '完了確認'],
  works: [
    { title: '洗濯機分解クリーニング', area: '全国対応', period: '作業時間：半日', description: '洗濯機を分解し、内部のカビや汚れを丁寧に洗浄しました。', image: '/images/sentakuki-uracaan/work1.jpg' },
    { title: '給排水トラブル対応', area: '全国対応', period: '作業時間：半日', description: '給排水の不具合を確認し、水漏れの原因に対応しました。', image: '/images/sentakuki-uracaan/work2.jpg' },
  ],
  recruit: {
    title: '一緒に働くスタッフを募集しています',
    catch: '未経験でも、手に職をつけたい方・丁寧な作業ができる方を歓迎します。',
    jobs: ['洗濯機クリーニングスタッフ', '修理・メンテナンススタッフ', '受付・サポート'],
    points: ['技術を丁寧に習得できる', 'お客様に感謝される仕事', '経験者は優遇', '未経験者も基礎からサポート'],
    message: 'まずは仕事内容を聞いてみたい、という相談からでも大丈夫です。',
    applyUrl: '',
    image: '/images/sentakuki-uracaan/recruit.jpg',
    subImage: '/images/sentakuki-uracaan/recruit2.jpg',
  },
};
