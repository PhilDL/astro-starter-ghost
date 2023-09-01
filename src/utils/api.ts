import type { Page, Post } from "@ts-ghost/content-api";
import { TSGhostContentAPI } from "@ts-ghost/content-api";

const ghostUrl = import.meta.env.PUBLIC_GHOST_URL;
const ghostApiKey = import.meta.env.PUBLIC_GHOST_KEY;

export const getAllAuthors = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, "v5.0");
  const results = await api.authors
    .browse()
    .include({
      "count.posts": true,
    })
    .fetch();
  if (!results.success) {
    throw new Error(results.errors.map((e) => e.message).join(", "));
  }
  return {
    authors: results.data,
    meta: results.meta,
  };
};

export const getPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, "v5.0");
  const results = await api.posts
    .browse()
    .include({
      authors: true,
      tags: true,
    })
    .fetch();
  if (!results.success) {
    throw new Error(results.errors.map((e) => e.message).join(", "));
  }
  return {
    posts: results.data,
    meta: results.meta,
  };
};

export const getAllPosts = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, "v5.0");
  const posts: Post[] = [];
  let cursor = await api.posts
    .browse()
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) posts.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) posts.push(...cursor.current.data);
  }
  return posts;
};

export const getAllPages = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, "v5.0");
  const pages: Page[] = [];
  let cursor = await api.pages
    .browse()
    .include({
      authors: true,
      tags: true,
    })
    .paginate();
  if (cursor.current.success) pages.push(...cursor.current.data);
  while (cursor.next) {
    cursor = await cursor.next.paginate();
    if (cursor.current.success) pages.push(...cursor.current.data);
  }
  return pages;
};

export const getSettings = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, "v5.0");
  const res = await api.settings.fetch();
  if (res.success) {
    return res.data;
  }
  return null;
};
export type NonNullable<T> = T extends null | undefined ? never : T;

export type Settings = NonNullable<Awaited<ReturnType<typeof getSettings>>>;

export const getAllTags = async () => {
  const api = new TSGhostContentAPI(ghostUrl, ghostApiKey, "v5.0");
  const results = await api.tags
    .browse()
    .include({
      "count.posts": true,
    })
    .fetch();
  if (!results.success) {
    throw new Error(results.errors.map((e) => e.message).join(", "));
  }
  return {
    tags: results.data,
    meta: results.meta,
  };
};
