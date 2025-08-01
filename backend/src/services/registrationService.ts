import prisma from '../lib/prisma';
import { RegistrationType, DecisionStatus } from '../types';

export interface CreateRegistrationData {
  familyName: string;
  firstName: string;
  nationality: string;
  countryOfWork: string;
  cityProvince: string;
  jobTitle: string;
  companyOrganization: string;
  organizationType: string;
  email: string;
  mobilePhone: string;
  phoneCountry: string;
  registrationType: RegistrationType;
  agreeCodeOfConduct: boolean;
}

export interface UpdateRegistrationData {
  familyName?: string;
  firstName?: string;
  nationality?: string;
  countryOfWork?: string;
  cityProvince?: string;
  jobTitle?: string;
  companyOrganization?: string;
  organizationType?: string;
  email?: string;
  mobilePhone?: string;
  phoneCountry?: string;
  registrationType?: RegistrationType;
}

export class RegistrationService {
  static async createRegistration(data: CreateRegistrationData) {
    try {
      const registration = await prisma.registration.create({
        data,
      });

      return registration;
    } catch (error) {
      throw error;
    }
  }

  static async getAllRegistrations(searchTerm?: string, decisionFilter?: DecisionStatus, registrationTypeFilter?: RegistrationType) {
    try {
      const whereClause: any = {};

      if (searchTerm) {
        whereClause.OR = [
          { firstName: { contains: searchTerm, mode: 'insensitive' } },
          { familyName: { contains: searchTerm, mode: 'insensitive' } },
          { email: { contains: searchTerm, mode: 'insensitive' } },
          { companyOrganization: { contains: searchTerm, mode: 'insensitive' } }
        ];
      }

      if (decisionFilter) {
        whereClause.decision = decisionFilter;
      }

      if (registrationTypeFilter) {
        whereClause.registrationType = registrationTypeFilter;
      }

      const registrations = await prisma.registration.findMany({
        where: whereClause,
        orderBy: {
          createdAt: 'desc',
        },
      });

      return registrations;
    } catch (error) {
      throw error;
    }
  }

  static async getRegistrationById(id: string) {
    try {
      const registration = await prisma.registration.findUnique({
        where: { id },
      });

      return registration;
    } catch (error) {
      throw error;
    }
  }

  static async updateRegistration(id: string, data: UpdateRegistrationData) {
    try {
      const registration = await prisma.registration.update({
        where: { id },
        data,
      });

      return registration;
    } catch (error) {
      throw error;
    }
  }

  static async makeDecision(id: string, decision: DecisionStatus, decisionBy: string) {
    try {
      const registration = await prisma.registration.update({
        where: { id },
        data: {
          decision,
          decisionBy,
          decisionAt: new Date(),
        },
      });

      return registration;
    } catch (error) {
      throw error;
    }
  }

  static async deleteRegistration(id: string) {
    try {
      await prisma.registration.delete({
        where: { id },
      });

      return { success: true, message: 'Registration deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  static async getRegistrationStats() {
    try {
      const stats = await prisma.registration.groupBy({
        by: ['decision'],
        _count: {
          decision: true,
        },
      });

      const totalCount = await prisma.registration.count();

      return {
        total: totalCount,
        stats: stats.reduce((acc, curr) => {
          acc[curr.decision] = curr._count.decision;
          return acc;
        }, {} as Record<DecisionStatus, number>)
      };
    } catch (error) {
      throw error;
    }
  }
}