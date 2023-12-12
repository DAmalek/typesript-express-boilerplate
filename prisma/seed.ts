import prisma from "src/database";

async function main() {}

main()
  .then(async () => {
    prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    prisma.$disconnect();
    process.exit(1);
  });
