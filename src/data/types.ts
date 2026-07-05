import type { ReactNode } from "react";

export type DocumentLink = string | string[];

export interface Conference {
  year: number;
  name: string;
  description: string;
  collectionTitle: string;
  collectionLinks: DocumentLink;
}

export interface CommitteeMember {
  name: string;
  descr: string;
  location: string;
  img: string;
}

export interface HistorySection {
  year: string;
  title: string;
}

export interface LinkItem {
  title: string;
  href: string;
  bold?: string;
}

export interface Organizer {
  title: string;
  location: string;
  logo: string;
}

export interface KeyDate {
  title: string;
  text: string | ReactNode;
  registrationLink?: boolean;
  email?: string;
  qr?: boolean;
}

export interface RequirementItem {
  title: string;
  text: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface NavigationItem {
  link: string;
  title: string;
  external?: boolean;
}
