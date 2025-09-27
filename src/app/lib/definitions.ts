export interface Project {
  id: number;
  title: string;
  desc: string;
  img: string;
  link: string;
  github: string;
  technologies: string;
  createdAt: bigint;
}

export type EditOrCreateInput = {
  title: string;
  img: string;
  desc: string;
  technologies: string;
  link: string;
  github: string;
};
