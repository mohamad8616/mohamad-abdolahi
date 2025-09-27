import prisma from "./prisma";

export const getProjects = async () => await prisma.project.findMany();
