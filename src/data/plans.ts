import type { Plan } from '../components/types';
import { BillingPeriod } from '../components/types';

export const plans: Plan[] = [
  {
    planName: 'Basic FAR Self-Assessment',
    subtitle: 'CMMC Level 1 Express',
    prices: {
      [BillingPeriod.Monthly]: { price: '$499', period: 'year', note: 'one time annual payment' },
      [BillingPeriod.Yearly]: { price: '$499', period: 'year', note: 'one time annual payment' },
      [BillingPeriod.TwoYear]: { price: '$499', period: 'year', note: 'one time annual payment' },
      [BillingPeriod.ThreeYear]: { price: '$499', period: 'year', note: 'one time annual payment' },
    },
    features: [
      'For Contractors with FCI',
      'Compliance Single-Point-of-Truth',
      'Guided Self-Assessment',
      'Organize scope and assets',
      'Store evidence to defend your assessment',
    ],
  },
  {
    planName: 'FutureFeed Core',
    subtitle: 'CMMC Level 1+',
    prices: {
      [BillingPeriod.Monthly]: { price: '$798', period: 'month', note: 'Billed Monthly' },
      [BillingPeriod.Yearly]: { price: '$399', period: 'month', note: 'Billed Yearly' },
      [BillingPeriod.TwoYear]: { price: '$365', period: 'month', note: 'Billed Every 2 Years' },
      [BillingPeriod.ThreeYear]: { price: '$354', period: 'month', note: 'Billed Every 3 Years' },
    },
    features: [
      'All of the features of CMMC1 Express',
      'CIS Implementation Group1(IG1)',
      'Manage Live SSP',
      'Manage POAMs',
      'Build and Manage Projects',
      'Add Other Frameworks',
    ],
    recommended: true,
  },
  {
    planName: 'DoD Contractor CUI Bundle',
    subtitle: 'CMMC Level 2+',
    prices: {
      [BillingPeriod.Monthly]: { price: '$965', period: 'month', note: 'Billed Monthly' },
      [BillingPeriod.Yearly]: { price: '$483', period: 'month', note: 'Billed Yearly' },
      [BillingPeriod.TwoYear]: { price: '$442', period: 'month', note: 'Billed Every 2 Years' },
      [BillingPeriod.ThreeYear]: { price: '$429', period: 'month', note: 'Billed Every 3 Years' },
    },
    features: [
      'All of the features of FutureFeed Core',
      'CMMC 2.0 Level 2 Framework',
      'NIST SP 800-171 Framework',
      'Dynamic SPRS Score Tracking',
    ],
  },
]; 