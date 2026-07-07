# HP Demo Site

Aiwalkの業種別HP制作サービス用デモ専用URLプロジェクトです。

## URL設計

- `/demo/ascend`：ASCEND向けサンプル
- 今後は `data/sites.ts` に1社分追加すると `/demo/slug` で表示できます。

## ローカル確認

```bash
npm install
npm run dev
```

ブラウザで `http://localhost:3000/demo/ascend` を開きます。

## 会社追加手順

1. `data/sites.ts` の `sites` に `sample001` などのキーを追加
2. `slug: 'sample001'` にする
3. 会社名、電話番号、住所、GoogleマップURL、文言、色味を差し替え
4. `git add . && git commit -m "add sample001 demo" && git push`
5. Vercelの自動デプロイ後、`https://<vercel-domain>/demo/sample001` を送付
