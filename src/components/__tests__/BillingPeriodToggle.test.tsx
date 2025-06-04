import { render, screen, fireEvent } from '@testing-library/react';
import BillingPeriodToggle from '../BillingPeriodToggle';
import { BillingPeriod } from '../types';

describe('BillingPeriodToggle', () => {
  const defaultProps = {
    value: BillingPeriod.Monthly,
    onChange: jest.fn(),
  };

  it('renders all billing period options', () => {
    render(<BillingPeriodToggle {...defaultProps} />);

    expect(screen.getByText('Monthly')).toBeInTheDocument();
    expect(screen.getByText('Annually')).toBeInTheDocument();
    expect(screen.getByText('2 Years')).toBeInTheDocument();
    expect(screen.getByText('3 Years')).toBeInTheDocument();
  });

  it('calls onChange when a different period is selected', () => {
    render(<BillingPeriodToggle {...defaultProps} />);

    fireEvent.click(screen.getByText('Annually'));
    expect(defaultProps.onChange).toHaveBeenCalledWith(BillingPeriod.Yearly);
  });

  it('shows the selected period as active', () => {
    render(<BillingPeriodToggle {...defaultProps} value={BillingPeriod.Yearly} />);

    const selectedButton = screen.getByText('Annually');
    expect(selectedButton).toHaveAttribute('aria-pressed', 'true');
  });
});