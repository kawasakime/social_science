import { conference } from "./conferenceContent";
import type { LinkItem } from "./types";

export const info = {
  title: conference.title,
  goal:
    "создание междисциплинарного пространства для международного сотрудничества и обмена результатами научных исследований в контексте глобальных трансформаций и иных вызовов современности.",
  supportTitle: "Информационная поддержка",
  publicationNote:
    "По результатам рассмотрения материалов конференции программным комитетом лучшие статьи могут быть опубликованы в этих журналах",
};

export const supportLinks: LinkItem[] = [
  {
    href: "https://upravlenie-uriu.ranepa.ru/jour",
    title: "Научный и общественно-теоретический журнал",
    bold: "«Государственное и муниципальное управление. Ученые записки»",
  },
  {
    href: "https://vestnik-uriu.ranepa.ru/jour",
    title: "Научно-практический журнал",
    bold: "«Северо-Кавказский юридический вестник»",
  },
  {
    href: "https://naukaru.ru/ru/nauka/journal/6a9c1dda32807fdbab8859fc/zhurnal-politicheskih-issledovaniy/view?section=about",
    title: "Научный журнал",
    bold: "«Журнал политических исследований»"
  },
  {
    href: "https://elibrary.ru/contents.asp?titleid=69390",
    title: "Научный журнал",
    bold: "«The EUrASEANs: journal on global socio-economic dynamics»",
  },
];
