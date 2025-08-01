import { Request, Response } from 'express';
import { RegistrationService } from '../services/registrationService';
import { sendMail } from '../services/emailService';
import { registrationConfirmationEmailTemplate } from '../templates/registrationConfirmationEmail';
import { whoNotificationEmailTemplate } from '../templates/whoNotificationEmail';
import { registrationApprovalEmailTemplate } from '../templates/registrationApprovalEmail';
import { registrationRejectionEmailTemplate } from '../templates/registrationRejectionEmail';
import { AuthenticatedRequest } from '../middleware/auth';
import { RegistrationType, DecisionStatus } from '../types';

export const getRegistrations = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { search, decision, registrationType } = req.query as {
      search?: string;
      decision?: DecisionStatus;
      registrationType?: RegistrationType;
    };

    const registrations = await RegistrationService.getAllRegistrations(search, decision, registrationType);

    res.json({
      success: true,
      registrations,
      count: registrations.length
    });
  } catch (error) {
    console.error('Get registrations error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRegistrationById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const registration = await RegistrationService.getRegistrationById(id);

    if (!registration) {
      return res.status(404).json({ error: 'Registration not found' });
    }

    res.json({
      success: true,
      registration
    });
  } catch (error) {
    console.error('Get registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const createRegistration = async (req: Request, res: Response) => {
  try {
    const registrationData = req.body as any; // Type assertion to fix the ReadableStream issue

    const registration = await RegistrationService.createRegistration(registrationData);

    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:8080';
    const approveUrl = `${baseUrl}/api/registrations/${registration.id}/decision?action=approve`;
    const rejectUrl = `${baseUrl}/api/registrations/${registration.id}/decision?action=reject`;

    await sendMail({
      to: registration.email,
      subject: 'Registration Confirmation - Pre-ICDRA Conference',
      html: registrationConfirmationEmailTemplate(registration.firstName)
    });

    await sendMail({
      to: 'alserhani2010@gmail.com',
      subject: 'New Registration - Application to Attend Pre-ICDRA',
      html: whoNotificationEmailTemplate(
        `${registration.firstName} ${registration.familyName}`,
        registration.id,
        approveUrl,
        rejectUrl
      )
    });

    res.status(201).json({
      success: true,
      message: 'Registration submitted successfully',
      registration: {
        id: registration.id,
        firstName: registration.firstName,
        familyName: registration.familyName,
        email: registration.email,
        registrationType: registration.registrationType,
        createdAt: registration.createdAt
      }
    });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(409).json({ error: 'Registration with this email already exists' });
    }
    console.error('Create registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const updateRegistration = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const registration = await RegistrationService.updateRegistration(id, updateData);

    res.json({
      success: true,
      message: 'Registration updated successfully',
      registration
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Registration not found' });
    }
    console.error('Update registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const makeDecision = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { decision } = req.body;
    const decisionBy = req.user?.userId;
    const userType = req.user?.userType;

    if (!decisionBy) {
      return res.status(401).json({ error: 'User not authenticated' });
    }

    if (userType !== 'WHO') {
      return res.status(403).json({ error: 'Only WHO users can approve or reject registrations' });
    }

    if (!decision || !Object.values(DecisionStatus).includes(decision)) {
      return res.status(400).json({ error: 'Valid decision is required (APPROVED or REJECTED)' });
    }

    const registration = await RegistrationService.makeDecision(id, decision, decisionBy);

    if (decision === 'APPROVED') {
      const referenceNumber = registration.id.substring(0, 8).toUpperCase();

      await sendMail({
        to: registration.email,
        subject: 'Registration Approved - Pre-ICDRA Conference',
        html: registrationApprovalEmailTemplate(
          registration.firstName,
          registration.familyName,
          referenceNumber
        )
      });
    } else if (decision === 'REJECTED') {
      await sendMail({
        to: registration.email,
        subject: 'Registration Status - Pre-ICDRA Conference',
        html: registrationRejectionEmailTemplate(registration.firstName)
      });
    }

    res.json({
      success: true,
      message: `Registration ${decision.toLowerCase()} successfully`,
      registration
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Registration not found' });
    }
    console.error('Make decision error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteRegistration = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    await RegistrationService.deleteRegistration(id);

    res.json({
      success: true,
      message: 'Registration deleted successfully'
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Registration not found' });
    }
    console.error('Delete registration error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getRegistrationStats = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const stats = await RegistrationService.getRegistrationStats();

    res.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Get registration stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};