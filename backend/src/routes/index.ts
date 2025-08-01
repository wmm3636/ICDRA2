import { Router } from 'express';
import {  signIn,  verifyCode } from '../handlers/auth';
import { changePassword,createUser, deleteUser, getUserById, getUsers, getCurrentUser, updateUser, updateCurrentUser } from '../handlers/user';
import { downloadVisaForm } from '../handlers/download';
import { 
  getRegistrations, 
  getRegistrationById, 
  createRegistration, 
  updateRegistration, 
  makeDecision, 
  deleteRegistration,
  getRegistrationStats 
} from '../handlers/registration';
import { 
  getContactRequests,
  getContactRequestById,
  createContactRequest,
  updateContactRequestStatus,
  deleteContactRequest,
  getContactRequestStats
} from '../handlers/contact';
import { validateBody, validateQuery } from '../middleware/validation';
import { authenticate, authorize } from '../middleware/auth';
import { 
  signInSchema, 
  verifyCodeSchema, 
  createUserSchema, 
  updateUserSchema, 
  getUsersQuerySchema,
  createRegistrationSchema,
  updateRegistrationSchema,
  makeDecisionSchema,
  getRegistrationsQuerySchema,
  changePasswordSchema,
  createContactRequestSchema,
  getContactRequestsQuerySchema,
  updateContactStatusSchema
} from '../validation/schemas';
import { UserType } from '../types';

const router = Router();

router.get('/life', (req, res) => {
  res.json({ message: 'Beast is alive!' });
});

router.get('/profile', authenticate, getCurrentUser);
router.put('/profile', authenticate, validateBody(updateUserSchema), updateCurrentUser);
router.post('/change-password', authenticate, validateBody(changePasswordSchema), changePassword);

router.post('/signin', validateBody(signInSchema), signIn);
router.post('/verify-code', validateBody(verifyCodeSchema), verifyCode);
router.get('/users', authenticate, authorize([UserType.ADMIN]), validateQuery(getUsersQuerySchema), getUsers);
router.get('/users/:id', authenticate, authorize([UserType.ADMIN]), getUserById);
router.post('/users', authenticate, authorize([UserType.ADMIN]), validateBody(createUserSchema), createUser);
router.put('/users/:id', authenticate, authorize([UserType.ADMIN]), validateBody(updateUserSchema), updateUser);
router.delete('/users/:id', authenticate, authorize([UserType.ADMIN]), deleteUser);

router.get('/registrations', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL, UserType.WHO]), validateQuery(getRegistrationsQuerySchema), getRegistrations);
router.get('/registrations/stats', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL, UserType.WHO]), getRegistrationStats);
router.get('/registrations/:id', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL, UserType.WHO]), getRegistrationById);

router.post('/registrations', validateBody(createRegistrationSchema), createRegistration);
router.put('/registrations/:id', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL]), validateBody(updateRegistrationSchema), updateRegistration);
router.delete('/registrations/:id', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL]), deleteRegistration);

router.patch('/registrations/:id/decision', authenticate, authorize([UserType.WHO]), validateBody(makeDecisionSchema), makeDecision);

router.post('/contact', validateBody(createContactRequestSchema), createContactRequest);
router.get('/contact', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL]), validateQuery(getContactRequestsQuerySchema), getContactRequests);
router.get('/contact/stats', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL]), getContactRequestStats);
router.get('/contact/:id', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL]), getContactRequestById);
router.patch('/contact/:id/status', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL]), validateBody(updateContactStatusSchema), updateContactRequestStatus);
router.delete('/contact/:id', authenticate, authorize([UserType.ADMIN, UserType.INTERNAL]), deleteContactRequest);

router.get('/download/visa-form', downloadVisaForm);

export default router;

