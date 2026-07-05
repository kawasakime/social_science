/// <reference types="react-scripts" />

declare module "*.module.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.pdf" {
  const src: string;
  export default src;
}

declare module "*.docx" {
  const src: string;
  export default src;
}
