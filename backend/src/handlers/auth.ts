import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { UserService } from '../services/userService';
import { VerificationService } from '../services/verificationService';
import { sendMail } from '../services/emailService';
import { verificationCodeTemplate } from '../templates/verificationCode';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export const signIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await UserService.getUserWithPassword(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const isPasswordValid = await UserService.verifyPassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const verificationCode = await VerificationService.createVerificationCode(user.id);
    
    const emailSent = await sendMail({
      to: user.email,
      subject: 'ICDRA 2025 - Verification Code',
      html: verificationCodeTemplate(verificationCode, user.firstName)
    });

    if (!emailSent) {
      console.log(`Verification code for ${email}: ${verificationCode}`);
    }

    res.json({
      success: true,
      message: 'Verification code sent to your email',
      userId: user.id
    });
  } catch (error) {
    console.error('Sign in error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const verifyCode = async (req: Request, res: Response) => {
  try {
    const { userId, code } = req.body;

    if (!userId || !code) {
      return res.status(400).json({ error: 'UserId and code are required' });
    }

    const isValid = await VerificationService.verifyCode(userId, code);
    if (!isValid) {
      return res.status(401).json({ error: 'Invalid or expired verification code' });
    }

    const user = await UserService.getUserById(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const token = jwt.sign(
      { 
        userId: user.id, 
        email: user.email, 
        userType: user.userType 
      },
      JWT_SECRET,
      { expiresIn: '8h' }
    );

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        userType: user.userType
      }
    });
  } catch (error) {
    console.error('Verify code error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};