import type { GhostSettings, Author, Tag, Post, Page } from "$/types";

const ghostUrl = import.meta.env.PUBLIC_GHOST_URL;
const ghostApiKey = import.meta.env.PUBLIC_GHOST_KEY;

export const get = async ({ endpoint = "", include = "", filter = "" }) => {
  let url = `${ghostUrl}/ghost/api/v3/content/${endpoint}/?key=${ghostApiKey}`;
  if (include) {
    url += `&include=${include}`;
  }
  if (filter) {
    url += `&filter=${filter}`;
  }
  return await fetch(url).then((response) => {
    return response.json();
  });
};

export const getAllAuthors = async ({
  include = "",
  filter = "",
}): Promise<{ authors: Author[]; meta: object }> => {
  return await get({
    endpoint: "authors",
    include,
    filter,
  });
};

export const getAllPosts = async ({
  include = "",
  filter = "",
}): Promise<{ posts: Post[]; meta: object }> => {
  return await get({
    endpoint: "posts",
    include,
    filter,
  });
};

export const getAllPages = async ({
  include = "",
  filter = "",
}): Promise<{ pages: Page[]; meta: object }> => {
  return await get({
    endpoint: "pages",
    include,
    filter,
  });
};

export const getAllTags = async ({
  include = "",
  filter = "",
}): Promise<{ tags: Tag[]; meta: object }> => {
  return await get({
    endpoint: "tags",
    include,
    filter,
  });
};

export const getSettings = async ({ include = "", filter = "" } = {}): Promise<{
  settings: GhostSettings;
  meta: object;
}> => {
  return await get({
    endpoint: "settings",
    include,
    filter,
  });
};
