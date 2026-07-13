export type Language = "en" | "fa" | "ru";

const KEY = "nase-language";

export function saveLanguage(lang: Language) {
  localStorage.setItem(KEY, lang);
}

export function getLanguage(): Language | null {
  return localStorage.getItem(KEY) as Language | null;
}