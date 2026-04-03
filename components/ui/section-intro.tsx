type SectionIntroProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export default function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <span className={`eyebrow ${align === 'center' ? 'justify-center' : ''}`}>{eyebrow}</span>
      <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.75rem)] leading-[0.98] tracking-[-0.04em] text-textPrimary">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-2xl text-base leading-8 text-textMuted md:text-[1.05rem]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
