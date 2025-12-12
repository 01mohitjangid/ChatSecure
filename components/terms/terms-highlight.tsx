import { AlertTriangle, Info, CheckCircle } from "lucide-react"

interface TermsHighlightProps {
  type: "warning" | "info" | "success"
  children: React.ReactNode
}

export const TermsHighlight = ({ type, children }: TermsHighlightProps) => {
  const styles = {
    warning: {
      bg: "bg-amber-50 dark:bg-amber-950/30",
      border: "border-amber-200 dark:border-amber-800",
      icon: <AlertTriangle className="size-5 text-amber-600" />,
    },
    info: {
      bg: "bg-blue-50 dark:bg-blue-950/30",
      border: "border-blue-200 dark:border-blue-800",
      icon: <Info className="size-5 text-blue-600" />,
    },
    success: {
      bg: "bg-green-50 dark:bg-green-950/30",
      border: "border-green-200 dark:border-green-800",
      icon: <CheckCircle className="size-5 text-green-600" />,
    },
  }

  const style = styles[type]

  return (
    <div className={`flex items-start gap-3 p-4 rounded-lg border ${style.bg} ${style.border}`}>
      <div className="shrink-0 mt-0.5">{style.icon}</div>
      <div className="text-sm">{children}</div>
    </div>
  )
}

