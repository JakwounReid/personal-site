
import * as React from 'react'

export function MDX({ code }: { code: string }) {
  return (
    <div
      className="prose prose-invert"
      dangerouslySetInnerHTML={{ __html: code }}
    />
  )
}
