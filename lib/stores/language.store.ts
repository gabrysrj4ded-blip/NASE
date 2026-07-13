import { create } from "zustand";

type Language = "en" | "ru" | "fa";

interface LanguageStore {
  language: Language | null;
  setLanguage: (language: Language) => void;
}

export const useLanguageStore = create<LanguageStore>((set) => ({
  language: null,

  setLanguage: (language) =>
    set({
      language,
    }),
}));