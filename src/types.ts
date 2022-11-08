export type NavigationLink = {
  label: string;
  url: string;
};
export type GhostSettings = {
  title: string;
  description: string;
  logo: string;
  icon: string;
  accent_color: string;
  cover_image: string;
  facebook: string;
  twitter: string;
  lang: string;
  timezone: string;
  codeinjection_head: string;
  codeinjection_foot: string;
  navigation: NavigationLink[];
  secondary_navigation: NavigationLink[];
  meta_title: string;
  meta_description: string;
  og_image: string;
  og_title: string;
  og_description: string;
  twitter_image: string;
  twitter_title: string;
  twitter_description: string;
  members_support_address: string;
  url: string;
};

export type Author = {
  id: string;
  name: string;
  slug: string;
  profile_image: string;
  cover_image: string;
  bio: string;
  website: string;
  location: string;
  facebook: string;
  twitter: string;
  meta_title: string;
  meta_description: string;
  url: string;
  count: {
    posts: number;
  };
};

export type Tag = {
  id: string;
  name: string;
  slug: string;
  description: string;
  feature_image: string;
  visibility: string;
  meta_title: string;
  meta_description: string;
  url: string;
  accent_color?: string;
  count: {
    posts: number;
  };
};

export type Post = {
  slug: string;
  id: string;
  uuid: string;
  title: string;
  html: string;
  comment_id: string;
  feature_image: string;
  feature_image_alt: string;
  feature_image_caption: string;
  featured: boolean;
  page: boolean;
  meta_title: string;
  meta_description: string;
  created_at: string;
  updated_at: string;
  published_at: string;
  custom_excerpt: string;
  codeinjection_head: string;
  codeinjection_foot: string;
  og_image: string;
  og_title: string;
  og_description: string;
  twitter_image: string;
  twitter_title: string;
  twitter_description: string;
  custom_template: string;
  canonical_url: string;
  authors?: Author[];
  tags: Tag[];
  primary_author: Author;
  primary_tag?: Tag;
  url: string;
  excerpt: string;
  reading_time?: string;
};

export type Page = Post;
