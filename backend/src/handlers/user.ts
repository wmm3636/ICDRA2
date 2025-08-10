import { Response } from 'express';
import { UserService } from '../services/userService';
import { sendMail } from '../services/emailService';
import { welcomeEmailTemplate } from '../templates/welcomeEmail';
import { AuthenticatedRequest } from '../middleware/auth';
import { UserType } from '../types';

const generateTempPassword = (): string => {
  return Math.random().toString(36).slice(-8);
};

export const changePassword = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const { currentPassword, newPassword } = req.body;

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const user = await UserService.getUserWithPassword(req.user?.email || '');

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const isCurrentPasswordValid = await UserService.verifyPassword(currentPassword, user.password);
    if (!isCurrentPasswordValid) {
      return res.status(400).json({ error: 'Current password is incorrect' });
    }

    await UserService.updatePassword(userId, newPassword);

    res.json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    console.error('Change password error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getCurrentUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.userId;

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const user = await UserService.getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      user
    });
  } catch (error) {
    console.error('Get current user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateCurrentUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const userId = req.user?.userId;
    const updateData = req.body;

    if (!userId) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    const user = await UserService.updateUserById(userId, updateData);

    res.json({
      success: true,
      message: 'Profile updated successfully',
      user
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'User not found' });
    }
    console.error('Update current user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
export const getUserById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const user = await UserService.getUserById(id);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      user
    });
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getUsers = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { search, userType } = req.query as { search?: string; userType?: UserType };

    const users = await UserService.getAllUsersWithFilter(search, userType);

    res.json({
      success: true,
      users,
      count: users.length
    });
  } catch (error) {
    console.error('Get users error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { email, firstName, lastName, userType, address } = req.body;
    const tempPassword = generateTempPassword();
    console.log(tempPassword);

    const user = await UserService.createUser({
      email,
      firstName,
      lastName,
      userType,
      address,
      password: tempPassword
    });

    await sendMail({
      to: user.email,
      subject: 'Welcome to ICDRA 2026 - Account Created',
      html: welcomeEmailTemplate(firstName, email, tempPassword)
    });

    res.status(201).json({
      success: true,
      message: 'User created successfully',
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        userType: user.userType,
        address: user.address,
        createdAt: user.createdAt
      }
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'User with this email already exists' });
    }
    console.error('Create user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const user = await UserService.updateUserById(id, updateData);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      success: true,
      message: 'User updated successfully',
      user
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'User not found' });
    }
    console.error('Update user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteUser = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const result = await UserService.deleteUserById(id);

    res.json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'User not found' });
    }
    console.error('Delete user error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};