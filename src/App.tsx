import { useState } from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box } from '@mui/material';
import theme from './theme/index';
import BillingCard from './components/BillingCard';
import BillingPeriodToggle from './components/BillingPeriodToggle';
import { plans } from './data/plans';
import { BillingPeriod } from './components/types';

const App = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>(BillingPeriod.Monthly);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography variant="h3" component="h1" sx={{ mb: 2, color: 'primary.main', fontWeight: 700 }}>
            FutureFeed Pricing
          </Typography>
          <BillingPeriodToggle value={billingPeriod} onChange={setBillingPeriod} />
        </Box>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 4 }}>
          {plans.map((plan, idx) => {
            const { price, period, note } = plan.prices[billingPeriod];
            return (
              <Box key={plan.planName}>
                <BillingCard
                  planName={plan.planName}
                  subtitle={plan.subtitle}
                  price={price}
                  period={period}
                  note={note}
                  features={plan.features}
                  selected={selected === idx}
                  onSelect={() => setSelected(idx)}
                  recommended={plan.recommended}
                />
              </Box>
            );
          })}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default App;
