export enum BillingPeriod {
  Monthly = 'monthly',
  Yearly = 'yearly',
  TwoYear = '2year',
  ThreeYear = '3year',
}

export interface PlanPrice {
  price: string;
  period: string;
  note: string;
}

export interface Plan {
  planName: string;
  subtitle?: string;
  prices: Record<BillingPeriod, PlanPrice>;
  features: string[];
  recommended?: boolean;
} 