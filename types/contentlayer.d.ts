declare module 'contentlayer/generated' {
  export interface Post {
    _id: string;
    _raw: any;
    type: 'Post';
    title: string;
    summary: string;
    tags?: string[];
    publishDate: string;
    status: 'draft' | 'published';
    thumbnail?: string;
    slug: string;
    body: {
      raw: string;
      code: string;
    };
  }

  export interface Log {
    _id: string;
    _raw: any;
    type: 'Log';
    title: string;
    summary: string;
    mood?: string;
    publishDate: string;
    status: 'draft' | 'published';
    slug: string;
    body: {
      raw: string;
      code: string;
    };
  }

  export interface Project {
    _id: string;
    _raw: any;
    type: 'Project';
    title: string;
    summary: string;
    stack?: string[];
    repo?: string;
    demo?: string;
    status: 'draft' | 'published';
    slug: string;
    body: {
      raw: string;
      code: string;
    };
  }

  export const allPosts: Post[];
  export const allLogs: Log[];
  export const allProjects: Project[];
}