
import React from 'react'
import { cn } from '@/lib/utils'

export function Prose({ children, className }:{children: React.ReactNode, className?: string}) {
  return <article className={cn("prose prose-invert max-w-none", className)}>{children}</article>
}
