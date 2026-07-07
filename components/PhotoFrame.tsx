export function PhotoFrame({ label, tone = 'light', className = '', src }: { label: string; tone?: 'light' | 'dark' | 'gold'; className?: string; src?: string }) {
  const tones = {
    light: 'from-slate-100 via-white to-teal-50 text-slate-600 border-slate-200',
    dark: 'from-slate-700 via-slate-800 to-slate-950 text-white/75 border-white/20',
    gold: 'from-amber-50 via-white to-teal-50 text-slate-600 border-amber-200'
  };
  return (
    <div className={`relative overflow-hidden border bg-gradient-to-br ${tones[tone]} ${className}`}>
      {src ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={src} alt={label} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#04343a]/85 via-[#04343a]/42 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-transparent" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 opacity-70 [background-image:radial-gradient(circle_at_30%_25%,rgba(255,255,255,.70),transparent_32%),linear-gradient(135deg,rgba(15,118,110,.16),transparent_55%)]" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="relative flex h-full min-h-[210px] flex-col items-center justify-center p-6 text-center">
            <div className="photo-mark" aria-hidden="true" />
            <p className="mt-5 text-base font-black">ここに写真を挿入</p>
            <p className="mt-2 max-w-xs text-sm leading-6 opacity-80">{label}</p>
          </div>
        </>
      )}
    </div>
  );
}
