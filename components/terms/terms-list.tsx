interface TermsListProps {
  items: string[]
}

export const TermsList = ({ items }: TermsListProps) => {
  return (
    <ul className="space-y-2 list-none">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <span className="size-1.5 rounded-full bg-purple-600 mt-2 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

