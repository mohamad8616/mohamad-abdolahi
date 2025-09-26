import { PrismaClient } from "./generated/prisma";
import { experiences, items } from "./src/utility/data";
const prisma = new PrismaClient();

async function main() {
  console.log("Seeding projects");
  items.forEach(async (item) => {
    const { title, createdAt, desc, github, img, link, technologies } = item;

    await prisma.project.create({
      data: {
        title,
        desc,
        img,
        link,
        github,
        technologies,
        createdAt,
      },
    });
  });
}
console.log("Project seeded");

console.log("Seeding experiences");
experiences.forEach(async (experience) => {
  const { jobTitle, jobDesc, jobDate, jobCompany } = experience;

  await prisma.experience.create({
    data: {
      jobTitle,
      jobDesc,
      jobDate,
      jobCompany,
    },
  });
});
console.log("Experiences seeded");
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
