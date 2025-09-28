export interface Project {
  id: number;
  title: string;
  desc: string;
  img: string | File;
  link: string;
  github: string;
  technologies: string;
  createdAt: bigint;
}

export type EditOrCreateInput = {
  title: string;
  img: string | File;
  desc: string;
  technologies: string;
  link: string;
  github: string;
};
