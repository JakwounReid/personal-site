
import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import remarkGfm from 'remark-gfm'

const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc: any) => doc._raw.flattenedPath.split('/').slice(-1)[0],
  },
}

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `blog/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' } },
    publishDate: { type: 'date', required: true },
    status: { type: 'enum', options: ['draft','published'], default: 'published' },
    thumbnail: { type: 'string' },
  },
  computedFields,
}))

export const Log = defineDocumentType(() => ({
  name: 'Log',
  filePathPattern: `log/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    mood: { type: 'string' },
    publishDate: { type: 'date', required: true },
    status: { type: 'enum', options: ['draft','published'], default: 'published' },
  },
  computedFields,
}))

export const Project = defineDocumentType(() => ({
  name: 'Project',
  filePathPattern: `projects/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    summary: { type: 'string', required: true },
    stack: { type: 'list', of: { type: 'string' } },
    repo: { type: 'string' },
    demo: { type: 'string' },
    status: { type: 'enum', options: ['draft','published'], default: 'published' },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Log, Project],
  disableImportAliasWarning: true,
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
    ],
  },
})
