import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="container-x flex min-h-[70vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-6xl font-black text-teal-800">404</p>
      <h1 className="mt-4 text-2xl font-black">ページが見つかりません</h1>
      <p className="mt-3 max-w-md leading-8 text-slate-600">
        お探しのデモページは存在しないか、URLが間違っている可能性があります。
      </p>
      <Link href="/" className="mt-8 inline-flex rounded-2xl bg-teal-700 px-8 py-4 font-black text-white shadow-xl transition hover:-translate-y-0.5 hover:bg-teal-800">
        デモ一覧へ戻る
      </Link>
    </main>
  );
}
