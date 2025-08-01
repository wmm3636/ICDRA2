import { Request, Response } from 'express';
import { ContactService } from '../services/contactService';
import { sendMail } from '../services/emailService';
import { newEnquiryNotificationEmailTemplate } from '../templates/newEnquiryNotificationEmailTemplate';
import { AuthenticatedRequest } from '../middleware/auth';
import { ContactUsStatus } from '../types';

export const createContactRequest = async (req: Request, res: Response) => {
  try {
    const contactData = req.body;
    const contactRequest = await ContactService.createContactRequest(contactData);

    await sendMail({
      to: 'Icdra2026@sfda.gov.sa',
      subject: `New Enquiry Received - ${contactRequest.subject}`,
      html: newEnquiryNotificationEmailTemplate(
        contactRequest.name,
        contactRequest.email,
        contactRequest.subject,
        contactRequest.message,
        contactRequest.id
      )
    });

    res.status(201).json({
      success: true,
      message: 'Contact request submitted successfully',
      contactRequest: {
        id: contactRequest.id,
        name: contactRequest.name,
        email: contactRequest.email,
        subject: contactRequest.subject,
        createdAt: contactRequest.createdAt
      }
    });
  } catch (error: any) {
    console.error('Create contact request error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getContactRequests = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { search, status } = req.query as {
      search?: string;
      status?: ContactUsStatus;
    };

    const contactRequests = await ContactService.getAllContactRequests(search, status);

    res.json({
      success: true,
      contactRequests,
      count: contactRequests.length
    });
  } catch (error) {
    console.error('Get contact requests error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getContactRequestById = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    const contactRequest = await ContactService.getContactRequestById(id);

    if (!contactRequest) {
      return res.status(404).json({ error: 'Contact request not found' });
    }

    res.json({
      success: true,
      contactRequest
    });
  } catch (error) {
    console.error('Get contact request error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const updateContactRequestStatus = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const contactRequest = await ContactService.updateContactRequestStatus(id, status);

    res.json({
      success: true,
      message: `Contact request status updated to ${status.toLowerCase()}`,
      contactRequest
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Contact request not found' });
    }
    console.error('Update contact request status error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const deleteContactRequest = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const { id } = req.params;

    await ContactService.deleteContactRequest(id);

    res.json({
      success: true,
      message: 'Contact request deleted successfully'
    });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Contact request not found' });
    }
    console.error('Delete contact request error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

export const getContactRequestStats = async (req: AuthenticatedRequest, res: Response) => {
  try {
    const stats = await ContactService.getContactRequestStats();

    res.json({
      success: true,
      stats
    });
  } catch (error) {
    console.error('Get contact request stats error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};