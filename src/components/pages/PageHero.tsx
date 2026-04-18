import Image from 'next/image'

type Props = {
  title: string
  subtitle?: string
  eyebrow?: string
  image: string
  imageAlt: string
}

export default function PageHero({ title, subtitle, eyebrow, image, imageAlt }: Props) {
  return (
    <section className="relative h-[45vh] min-h-[320px] max-h-[520px] flex items-end pb-14 overflow-hidden">
      <Image
        src={image}
        alt={imageAlt}
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-primary/20" />

      <div className="relative z-10 section-container w-full">
        {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-warm leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-warm/70 mt-3 max-w-2xl text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
