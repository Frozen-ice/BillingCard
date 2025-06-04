import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { BillingPeriod } from './types';

interface Props {
  value: BillingPeriod;
  onChange: (period: BillingPeriod) => void;
}

const BillingPeriodToggle: React.FC<Props> = ({ value, onChange }) => (
  <ToggleButtonGroup
    value={value}
    exclusive
    onChange={(_, newPeriod) => newPeriod && onChange(newPeriod)}
    aria-label="billing period"
    sx={{ mb: 4 }}
  >
    <ToggleButton value={BillingPeriod.Monthly}>Monthly</ToggleButton>
    <ToggleButton value={BillingPeriod.Yearly}>Annually</ToggleButton>
    <ToggleButton value={BillingPeriod.TwoYear}>2 Years</ToggleButton>
    <ToggleButton value={BillingPeriod.ThreeYear}>3 Years</ToggleButton>
  </ToggleButtonGroup>
);

export default BillingPeriodToggle; 