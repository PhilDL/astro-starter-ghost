import type { Post, Page, TSGhostContentAPI } from "@ts-ghost/content-api";

export const fetchAllBlogPosts = async (ghost: TSGhostContentAPI) => {
  const posts: Post[] = [];
  let currentPage = 1;
  let pages = 1;
  while (currentPage <= pages) {
    const res = await ghost.posts
      .browse({
        input: {
          page: currentPage,
        },
        output: {
          include: {
            authors: true,
            tags: true,
          },
        },
      })
      .fetch();
    if (res.status === "success") {
      posts.push(...(res.data || []));
      pages = res.meta.pagination.pages || 1;
    }
    currentPage++;
  }
  return posts;
};

export const fetchAllPages = async (ghost: TSGhostContentAPI) => {
  const pages: Page[] = [];
  let currentPage = 1;
  let totalPages = 1;
  while (currentPage <= totalPages) {
    const res = await ghost.pages
      .browse({
        input: {
          page: currentPage,
        },
        output: {
          include: {
            authors: true,
            tags: true,
          },
        },
      })
      .fetch();
    if (res.status === "success") {
      pages.push(...(res.data || []));
      totalPages = res.meta.pagination.pages || 1;
    }
    currentPage++;
  }
  return pages;
};

export const fetchSettings = async (ghost: TSGhostContentAPI) => {
  const res = await ghost.settings.fetch();
  if (res.status === "success") {
    return res.data;
  }
  return null;
};
export type NonNullable<T> = T extends null | undefined ? never : T;

export type Settings = NonNullable<Awaited<ReturnType<typeof fetchSettings>>>;
