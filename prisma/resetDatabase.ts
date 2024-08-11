import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function resetDatabase() {
  try {
    await prisma.$transaction([
      prisma.verificationToken.deleteMany(),
      prisma.refreshToken.deleteMany(),
      prisma.userLink.deleteMany(),
      prisma.activityPoint.deleteMany(),
      prisma.organiser.deleteMany(),
      prisma.team.deleteMany(),
      prisma.attendance.deleteMany(),
      prisma.certificate.deleteMany(),
      prisma.quizResponse.deleteMany(),
      prisma.payment.deleteMany(),
      prisma.user.deleteMany(),
      prisma.branch.deleteMany(),
      prisma.event.deleteMany(),
      prisma.winner.deleteMany(),
      prisma.feedbackTemplate.deleteMany(),
      prisma.quiz.deleteMany(),
    ]);
    console.log("All data has been deleted successfully.");
  } catch (error) {
    console.error("Error deleting data:", error);
  } finally {
    await prisma.$disconnect();
  }
}

resetDatabase();
