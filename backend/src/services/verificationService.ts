import prisma from '../lib/prisma';

export class VerificationService {
  static async createVerificationCode(userId: string): Promise<string> {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 15 * 60 * 1000);

    await prisma.verificationCode.create({
      data: {
        userId,
        code,
        expiresAt,
      },
    });

    return code;
  }

  static async verifyCode(userId: string, code: string): Promise<boolean> {
    const verificationCode = await prisma.verificationCode.findFirst({
      where: {
        userId,
        code,
        expiresAt: {
          gt: new Date(),
        },
      },
    });

    if (!verificationCode) {
      return false;
    }

    await prisma.verificationCode.delete({
      where: {
        id: verificationCode.id,
      },
    });

    return true;
  }

  static async cleanupExpiredCodes(): Promise<void> {
    await prisma.verificationCode.deleteMany({
      where: {
        expiresAt: {
          lt: new Date(),
        },
      },
    });
  }
}