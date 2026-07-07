import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="notFound">
      <p className="notFoundCode">404</p>
      <h1>ページが見つかりません</h1>
      <p>お探しのデモページは存在しないか、URLが間違っている可能性があります。</p>
      <Link className="notFoundLink" href="/">
        デモ一覧へ戻る
      </Link>
    </main>
  );
}
