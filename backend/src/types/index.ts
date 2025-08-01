export enum UserType {
  ADMIN = 'ADMIN',
  INTERNAL = 'INTERNAL',
  WHO = 'WHO'
}

export enum RegistrationType {
  PRE_ICDRA_ONLY = 'PRE_ICDRA_ONLY',
  PRE_ICDRA_AND_ICDRA_COMBINED = 'PRE_ICDRA_AND_ICDRA_COMBINED',
  ICDRA_ONLY = 'ICDRA_ONLY'
}

export enum DecisionStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum ContactUsStatus {
  NEW = 'NEW',
  RESOLVED = 'RESOLVED',
  WAITING_FOR_REPLY = 'WAITING_FOR_REPLY'
}