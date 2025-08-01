import Joi from 'joi';

export const signInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required()
});

export const verifyCodeSchema = Joi.object({
  userId: Joi.string().uuid().required(),
  code: Joi.string().length(6).pattern(/^\d+$/).required()
});

export const createUserSchema = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().min(2).max(50).required(),
  lastName: Joi.string().min(2).max(50).required(),
  userType: Joi.string().valid('ADMIN', 'INTERNAL', 'WHO').required(),
  address: Joi.object({
    street: Joi.string().min(5).max(100).required(),
    zip: Joi.string().min(3).max(20).required(),
    city: Joi.string().min(2).max(50).required(),
    state: Joi.string().min(2).max(50).required(),
    country: Joi.string().min(2).max(50).required()
  }).required()
});

export const updateUserSchema = Joi.object({
  firstName: Joi.string().min(2).max(50).optional(),
  lastName: Joi.string().min(2).max(50).optional(),
  userType: Joi.string().valid('ADMIN', 'INTERNAL', 'WHO').optional(),
  address: Joi.object({
    street: Joi.string().min(5).max(100).required(),
    zip: Joi.string().min(3).max(20).required(),
    city: Joi.string().min(2).max(50).required(),
    state: Joi.string().min(2).max(50).required(),
    country: Joi.string().min(2).max(50).required()
  }).optional()
}).min(1);

export const getUsersQuerySchema = Joi.object({
  search: Joi.string().min(1).max(100).optional(),
  userType: Joi.string().valid('ADMIN', 'INTERNAL', 'WHO').optional()
});

export const createRegistrationSchema = Joi.object({
  familyName: Joi.string().min(2).max(50).required(),
  firstName: Joi.string().min(2).max(50).required(),
  nationality: Joi.string().min(2).max(50).required(),
  countryOfWork: Joi.string().min(2).max(50).required(),
  cityProvince: Joi.string().min(2).max(50).required(),
  jobTitle: Joi.string().min(2).max(100).required(),
  companyOrganization: Joi.string().min(2).max(100).required(),
  organizationType: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  mobilePhone: Joi.string().min(5).max(20).required(),
  phoneCountry: Joi.string().min(2).max(50).required(),
  registrationType: Joi.string().valid('PRE_ICDRA_ONLY', 'PRE_ICDRA_AND_ICDRA_COMBINED', 'ICDRA_ONLY').required(),
  agreeCodeOfConduct: Joi.boolean().valid(true).required()
});

export const updateRegistrationSchema = Joi.object({
  familyName: Joi.string().min(2).max(50).optional(),
  firstName: Joi.string().min(2).max(50).optional(),
  nationality: Joi.string().min(2).max(50).optional(),
  countryOfWork: Joi.string().min(2).max(50).optional(),
  cityProvince: Joi.string().min(2).max(50).optional(),
  jobTitle: Joi.string().min(2).max(100).optional(),
  companyOrganization: Joi.string().min(2).max(100).optional(),
  organizationType: Joi.string().min(2).max(100).optional(),
  email: Joi.string().email().optional(),
  mobilePhone: Joi.string().min(5).max(20).optional(),
  phoneCountry: Joi.string().min(2).max(50).optional(),
  registrationType: Joi.string().valid('PRE_ICDRA_ONLY', 'PRE_ICDRA_AND_ICDRA_COMBINED', 'ICDRA_ONLY').optional()
}).min(1);

export const makeDecisionSchema = Joi.object({
  decision: Joi.string().valid('APPROVED', 'REJECTED').required()
});

export const changePasswordSchema = Joi.object({
  currentPassword: Joi.string().min(6).required(),
  newPassword: Joi.string().min(6).required(),
  confirmPassword: Joi.string().valid(Joi.ref('newPassword')).required().messages({
    'any.only': 'Passwords do not match'
  })
});

export const getRegistrationsQuerySchema = Joi.object({
  search: Joi.string().min(1).max(100).optional(),
  decision: Joi.string().valid('PENDING', 'APPROVED', 'REJECTED').optional(),
  registrationType: Joi.string().valid('PRE_ICDRA_ONLY', 'PRE_ICDRA_AND_ICDRA_COMBINED', 'ICDRA_ONLY').optional()
});

export const createContactRequestSchema = Joi.object({
  name: Joi.string().min(2).max(100).required(),
  email: Joi.string().email().required(),
  subject: Joi.string().min(5).max(200).required(),
  message: Joi.string().min(10).max(2000).required()
});

export const updateContactStatusSchema = Joi.object({
  status: Joi.string().valid('NEW', 'RESOLVED', 'WAITING_FOR_REPLY').required()
});

export const getContactRequestsQuerySchema = Joi.object({
  search: Joi.string().min(1).max(100).optional(),
  status: Joi.string().valid('NEW', 'RESOLVED', 'WAITING_FOR_REPLY').optional()
});