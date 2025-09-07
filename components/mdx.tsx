
import * as React from 'react'
import { useMDXComponent } from 'next-contentlayer/hooks'

const components = {
  h2: (props: any) => <h2 className="mt-8 text-2xl font-bold" {...props} />,
  h3: (props: any) => <h3 className="mt-6 text-xl font-semibold" {...props} />,
  a: (props: any) => <a className="underline underline-offset-4" {...props} />,
  pre: (props: any) => <pre className="bg-neutral-900/80 border border-neutral-800 p-4 rounded-lg overflow-x-auto" {...props} />,
  code: (props: any) => <code className="px-1 py-0.5 bg-neutral-900/60 rounded" {...props} />,
  ul: (props: any) => <ul className="list-disc ml-6" {...props} />,
  ol: (props: any) => <ol className="list-decimal ml-6" {...props} />,
}

export function MDX({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component components={components as any} />
}
