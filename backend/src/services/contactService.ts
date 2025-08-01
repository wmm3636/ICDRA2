import prisma from '../lib/prisma';
import { ContactUsStatus } from '../types';

export interface CreateContactRequestData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactService {
  static async createContactRequest(data: CreateContactRequestData) {
    try {
      const contactRequest = await prisma.contactUs.create({
        data,
      });

      return contactRequest;
    } catch (error) {
      throw error;
    }
  }

  static async getAllContactRequests(searchTerm?: string, statusFilter?: ContactUsStatus) {
    try {
      const whereClause: any = {};

      if (searchTerm) {
        whereClause.OR = [
          { name: { contains: searchTerm, mode: 'insensitive' } },
          { email: { contains: searchTerm, mode: 'insensitive' } },
          { subject: { contains: searchTerm, mode: 'insensitive' } }
        ];
      }

      if (statusFilter) {
        whereClause.status = statusFilter;
      }

      const contactRequests = await prisma.contactUs.findMany({
        where: whereClause,
        orderBy: {
          createdAt: 'desc',
        },
      });

      return contactRequests;
    } catch (error) {
      throw error;
    }
  }

  static async getContactRequestById(id: string) {
    try {
      const contactRequest = await prisma.contactUs.findUnique({
        where: { id },
      });

      return contactRequest;
    } catch (error) {
      throw error;
    }
  }

  static async updateContactRequestStatus(id: string, status: ContactUsStatus) {
    try {
      const contactRequest = await prisma.contactUs.update({
        where: { id },
        data: { 
          status,
          updatedAt: new Date()
        },
      });

      return contactRequest;
    } catch (error) {
      throw error;
    }
  }

  static async deleteContactRequest(id: string) {
    try {
      await prisma.contactUs.delete({
        where: { id },
      });

      return { success: true, message: 'Contact request deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  static async getContactRequestStats() {
    try {
      const stats = await prisma.contactUs.groupBy({
        by: ['status'],
        _count: {
          status: true,
        },
      });

      const totalCount = await prisma.contactUs.count();

      return {
        total: totalCount,
        stats: stats.reduce((acc, curr) => {
          acc[curr.status] = curr._count.status;
          return acc;
        }, {} as Record<ContactUsStatus, number>)
      };
    } catch (error) {
      throw error;
    }
  }
}