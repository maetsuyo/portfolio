"use client";

import { useState } from "react";
import { Page, PageState } from "../types/page";

export function useSwitchPage(): PageState {
  const [currentPage, setCurrentPage] = useState<Page>("home");

  const setPage = (page: Page) => {
    setCurrentPage(page);
  }
  return { currentPage, setPage };
}