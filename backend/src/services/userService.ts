import { PrismaClient, User, Prisma } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { v4 as uuidv4 } from 'uuid';
import prisma from '../lib/prisma';
import { UserType } from '../types';

export interface CreateUserData {
  email: string;
  firstName: string;
  lastName: string;
  userType?: UserType;
  address: {
    street: string;
    zip: string;
    city: string;
    state: string;
    country: string;
  };
  password: string;
}

export interface UpdateUserData {
  firstName?: string;
  lastName?: string;
  userType?: UserType;
  address?: {
    street: string;
    zip: string;
    city: string;
    state: string;
    country: string;
  };
}

export class UserService {
  static async createUser(userData: CreateUserData) {
    try {
      const hashedPassword = await bcrypt.hash(userData.password, 12);

      const user = await prisma.user.create({
        data: {
          ...userData,
          password: hashedPassword,
        },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          userType: true,
          address: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUserById(id: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { id },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          userType: true,
          address: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async getUserByEmail(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          userType: true,
          address: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  
  static async getUserWithPassword(email: string) {
    try {
      const user = await prisma.user.findUnique({
        where: { email },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  
  static async getAllUsersWithFilter(searchTerm?: string, userTypeFilter?: UserType) {
    try {
      const whereClause: any = {};

      if (searchTerm) {
        whereClause.OR = [
          { firstName: { contains: searchTerm, mode: 'insensitive' } },
          { lastName: { contains: searchTerm, mode: 'insensitive' } },
          { email: { contains: searchTerm, mode: 'insensitive' } }
        ];
      }

      if (userTypeFilter) {
        whereClause.userType = userTypeFilter;
      }

      const users = await prisma.user.findMany({
        where: whereClause,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          userType: true,
          address: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return users;
    } catch (error) {
      throw error;
    }
  }

  
  static async getAllUsers() {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          userType: true,
          address: true,
          createdAt: true,
          updatedAt: true,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return users;
    } catch (error) {
      throw error;
    }
  }

  
  static async updateUserById(id: string, updateData: UpdateUserData) {
    try {
      const user = await prisma.user.update({
        where: { id },
        data: updateData,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          userType: true,
          address: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  
  static async updateUser(email: string, updateData: UpdateUserData) {
    try {
      const user = await prisma.user.update({
        where: { email },
        data: updateData,
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
          userType: true,
          address: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return user;
    } catch (error) {
      throw error;
    }
  }

  static async deleteUserById(id: string) {
    try {
      await prisma.user.delete({
        where: { id },
      });

      return { success: true, message: 'User deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  static async deleteUser(email: string) {
    try {
      await prisma.user.delete({
        where: { email },
      });

      return { success: true, message: 'User deleted successfully' };
    } catch (error) {
      throw error;
    }
  }

  static async updatePassword(userId: string, newPassword: string) {
    try {
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      
      await prisma.user.update({
        where: { id: userId },
        data: { password: hashedPassword },
      });

      return { success: true };
    } catch (error) {
      throw error;
    }
  }

  static async verifyPassword(plainPassword: string, hashedPassword: string) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
}