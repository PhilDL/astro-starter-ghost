import type { fetchSettings } from "./utils/ghost-helpers";
export type NavigationLink = {
  label: string;
  url: string;
};

export type Settings = Awaited<ReturnType<typeof fetchSettings>>;
