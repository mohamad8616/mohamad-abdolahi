import { items as projects, experiences } from "@/app/lib/data";
import prisma from "@/app/lib/prisma";

async function main() {
  await prisma.project.deleteMany();
  await prisma.experience.deleteMany();

  console.log("start seeding");
  // Create projects
  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }
  console.log("projects seeded.");
  // Create experiences
  for (const experience of experiences) {
    await prisma.experience.create({
      data: experience,
    });
  }
  console.log("experiences seeded.");

  console.log("Seeding finished!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
