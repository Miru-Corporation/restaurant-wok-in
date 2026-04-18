type Props = {
  eyebrow?: string
  title: string
  subtitle?: string
  id?: string
  center?: boolean
  light?: boolean
}

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  id,
  center = true,
  light = false,
}: Props) {
  return (
    <div className={`mb-14 ${center ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className="eyebrow mb-3">{eyebrow}</p>
      )}
      <h2
        id={id}
        className={`font-display text-4xl sm:text-5xl leading-tight ${
          light ? 'text-primary' : 'text-warm'
        }`}
      >
        {title}
      </h2>
      {center && <div className="gold-rule" />}
      {!center && <div className="gold-rule-left" />}
      {subtitle && (
        <p className={`mt-2 max-w-2xl leading-relaxed ${center ? 'mx-auto' : ''} ${
          light ? 'text-primary/70' : 'text-warm/70'
        }`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
