import { Request, Response } from 'express';
import { RegistrationService } from '../services/registrationService';
import { sendMail } from '../services/emailService';
import { registrationConfirmationEmailTemplate } from '../templates/registrationConfirmationEmail';
import { whoNotificationEmailTemplate } from '../templates/whoNotificationEmail';
import { registrationApprovalEmailTemplate } from '../templates/registrationApprovalEmail';
import { registrationApprovalIcdraOnlyEmailTemplate } from '../templates/registrationApprovalIcdraOnlyEmail';
import { registrationApprovalPreIcdraOnlyEmailTemplate } from '../templates/registrationApprovalPreIcdraOnlyEmail';
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
    const registrationData = req.body as any;

    const registration = await RegistrationService.createRegistration(registrationData);

    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:8080';
    const approveUrl = `${baseUrl}/api/registrations/${registration.id}/decision?action=approve`;
    const rejectUrl = `${baseUrl}/api/registrations/${registration.id}/decision?action=reject`;

    const emailSubject = registration.registrationType === 'PRE_ICDRA_ONLY'
      ? 'Registration Confirmation - Pre-ICDRA Conference'
      : 'Registration Confirmation - ICDRA Conference';

    await sendMail({
      to: registration.email,
      subject: emailSubject,
      html: registrationConfirmationEmailTemplate(registration.firstName)
    });

    const notificationSubject = registration.registrationType === 'PRE_ICDRA_ONLY'
      ? 'New Registration - Application to Attend Pre-ICDRA'
      : 'New Registration - Application to Attend ICDRA';

    await sendMail({
      to: 'alserhani2010@gmail.com',
      subject: notificationSubject,
      html: whoNotificationEmailTemplate(
        `${registration.firstName} ${registration.familyName}`,
        registration.registrationType === 'PRE_ICDRA_ONLY' ? 'Pre-ICDRA' : 'ICDRA',
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
        email: registration.email,
        firstName: registration.firstName,
        familyName: registration.familyName,
        registrationType: registration.registrationType
      }
    });
  } catch (error: any) {
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
    const decisionBy = req.user?.userId || '';

    const registration = await RegistrationService.makeDecision(id, decision, decisionBy);

    if (decision === 'APPROVED') {
      const referenceNumber = registration.id.substring(0, 8).toUpperCase();
      const baseUrl = process.env.FRONTEND_URL || 'http://localhost:8080';

      const emailSubject = registration.registrationType === 'PRE_ICDRA_ONLY'
        ? 'Registration Approved - Pre-ICDRA Conference'
        : 'Registration Approved - ICDRA Conference';

      let emailTemplate;
      if (registration.registrationType === 'ICDRA_ONLY') {
        emailTemplate = registrationApprovalIcdraOnlyEmailTemplate(
          registration.firstName,
          registration.familyName,
          referenceNumber,
          baseUrl
        );
      } else if (registration.registrationType === 'PRE_ICDRA_ONLY') {
        emailTemplate = registrationApprovalPreIcdraOnlyEmailTemplate(
          registration.firstName,
          registration.familyName,
          referenceNumber,
          baseUrl
        );
      } else {
        emailTemplate = registrationApprovalEmailTemplate(
          registration.firstName,
          registration.familyName,
          referenceNumber
        );
      }

      await sendMail({
        to: registration.email,
        subject: emailSubject,
        html: emailTemplate
      });
    } else if (decision === 'REJECTED') {
      let emailSubject;
      if (registration.registrationType === 'PRE_ICDRA_ONLY') {
        emailSubject = 'Registration Status - Pre-ICDRA Conference';
      } else if (registration.registrationType === 'ICDRA_ONLY') {
        emailSubject = 'Registration Status - ICDRA Conference';
      } else {
        emailSubject = 'Registration Status - ICDRA Conference';
      }

      await sendMail({
        to: registration.email,
        subject: emailSubject,
        html: registrationRejectionEmailTemplate(registration.firstName, registration.registrationType)
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