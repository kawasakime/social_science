import { REGISTRATION_LINK } from "./conferenceContent";
import type { NavigationItem } from "./types";

export const navigationItems: NavigationItem[] = [
  {
    link: REGISTRATION_LINK,
    title: "Регистрация",
    external: true,
  },
  {
    link: "#info",
    title: "О конференции",
  },
  {
    link: "#sections",
    title: "История конференции",
  },
  {
    link: "#committee",
    title: "Эксперты",
  },
  {
    link: "#requirements",
    title: "Требования к материалам",
  },
  {
    link: "#gallery",
    title: "Фотогалерея",
  },
  {
    link: "#contacts",
    title: "Контакты",
  },
];
