interface TermsSectionProps {
  id: string
  number: string
  title: string
  children: React.ReactNode
}

export const TermsSection = ({ id, number, title, children }: TermsSectionProps) => {
  return (
    <section id={id} className="scroll-mt-20">
      <div className="flex items-start gap-4 mb-4">
        <span className="flex items-center justify-center size-10 rounded-lg bg-purple-100 dark:bg-purple-950 text-purple-600 font-bold text-lg shrink-0">
          {number}
        </span>
        <h2 className="text-2xl font-bold tracking-tight pt-1">{title}</h2>
      </div>
      <div className="pl-14 space-y-4 text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}

