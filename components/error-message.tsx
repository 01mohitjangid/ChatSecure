import { IconWarning } from '@/components/ui/icons'
import { Button } from '@/components/ui/button'

export interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

export function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
      <IconWarning className="mt-0.5 size-5 text-red-600 dark:text-red-400" />
      <div className="flex-1">
        <p className="text-sm font-medium text-red-900 dark:text-red-100">
          Error
        </p>
        <p className="mt-1 text-sm text-red-700 dark:text-red-300">
          {message}
        </p>
        {onRetry && (
          <Button
            onClick={onRetry}
            variant="outline"
            size="sm"
            className="mt-2"
          >
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}

