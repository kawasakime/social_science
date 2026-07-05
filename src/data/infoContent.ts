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
    href: "http://upravlenie.uriu.ranepa.ru/login?source=%2F",
    title: "Научный и общественно-теоретический журнал",
    bold: "«Государственное и муниципальное управление»",
  },
  {
    href: "http://vestnik.uriu.ranepa.ru/login?source=%2F",
    title: "Научно-практический журнал",
    bold: "«Северо-Кавказский юридический вестник»",
  },
  {
    href: "https://www.garant.ru/info/infopartner/",
    title: "Региональный представитель в ВУЗах ООО",
    bold: "«Гарант-Сервис-Ростов»",
  },
];
