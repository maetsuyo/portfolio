export type Page = "home" | "profile";

export type PageState = {
  currentPage: Page;
  setPage: (page: Page) => void;
};