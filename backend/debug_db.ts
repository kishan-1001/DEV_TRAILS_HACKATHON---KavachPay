import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const email = 'roykishan532@gmail.com';
  const user = await prisma.user.findUnique({ where: { email } });
  console.log('User exists:', user);
  const verification = await prisma.otpVerification.findFirst({
    where: { email, verified: true },
    orderBy: { createdAt: 'desc' }
  });
  console.log('Latest verified OTP record:', verification);
}

main().catch(console.error).finally(() => prisma.$disconnect());
