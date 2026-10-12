/**
 * Case studies of finished Elor and Celestial Lights projects.
 *
 * Template only. Add a project here once it is finished, photographed, and the
 * client has agreed to be named or quoted. Do not add placeholders: an empty
 * array renders nothing. Schema for these entries is added separately.
 */

export type SpaceType =
  | "living-room"
  | "dining"
  | "bedroom"
  | "kitchen"
  | "staircase"
  | "double-height"
  | "villa"
  | "apartment"
  | "hotel"
  | "retail"
  | "banquet"
  | "other";

export interface ProjectFixture {
  /** What was fitted, e.g. "Custom crystal cascade" or "Tread lights". */
  name: string;
  /** "custom" was made by Elor; "shelf" came from the Celestial Lights range. */
  source: "custom" | "shelf";
  quantity?: number;
}

export interface ProjectPhoto {
  /** Path under /public, e.g. "/projects/slug/void.jpg". */
  src: string;
  alt: string;
}

export interface ProjectQuote {
  text: string;
  /** Name or description the client agreed to, e.g. "Homeowner, Kannur". */
  attribution: string;
}

export interface Project {
  slug: string;
  title: string;
  /** Town or city, as the client agreed it can be shown, e.g. "Kochi". */
  location: string;
  spaceType: SpaceType;
  /** Clear height as measured on site, with units, e.g. "6.4 m". Omit if not measured. */
  ceilingHeight?: string;
  fixtures: ProjectFixture[];
  photos: ProjectPhoto[];
  /** Only with written client consent. */
  clientQuote?: ProjectQuote;
  /** Year the project was finished. */
  year: number;
  summary: string;
}

export const projects: Project[] = [];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
