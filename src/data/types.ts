export type VerificationStatus = 'verified' | 'sample' | 'needsCheck'

export type DisabilityType =
  | 'visual'
  | 'mobility'
  | 'hearing'
  | 'cognitive'
  | 'caregiver'

export type ServiceCategory =
  | 'policy'
  | 'health'
  | 'education'
  | 'employment'
  | 'organization'
  | 'urgent'

export interface Policy {
  id: string
  title: string
  category: string
  summary: string
  eligibleGroups: string[]
  requiredDocuments: string[]
  howToApply: string
  sourceName: string
  sourceUrl: string
  effectiveDate: string
  lastReviewed: string
  verificationStatus: VerificationStatus
  disclaimer: string
}

export interface Service {
  id: string
  name: string
  category: ServiceCategory
  description: string
  targetUsers: DisabilityType[]
  district: string
  address: string
  phone: string
  email?: string
  sourceUrl?: string
  verificationStatus: VerificationStatus
  accessibilityNotes: string
}

export interface Organization {
  id: string
  name: string
  role: string
  contact: string
  verificationStatus: VerificationStatus
}

export interface SupportRequest {
  id: string
  fullName: string
  contactMethod: 'phone' | 'email' | 'caregiver'
  contactValue: string
  needType: ServiceCategory
  message: string
  urgency: 'normal' | 'soon'
  createdAt: string
}
