type Props = { eyebrow: string; title: string; description?: string };

export function SectionHeading({ eyebrow, title, description }: Props) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-brand">{eyebrow}</p>
      <h2 className="text-3xl font-black tracking-tight text-slate-950 dark:text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 leading-7 text-slate-600 dark:text-slate-400">{description}</p>}
    </div>
  );
}
