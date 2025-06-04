import { render, screen, fireEvent } from '@testing-library/react';
import BillingCard from '../BillingCard';

describe('BillingCard', () => {
  const defaultProps = {
    planName: 'Test Plan',
    subtitle: 'Test Subtitle',
    price: '$99',
    period: 'month',
    note: 'Billed Monthly',
    features: ['Feature 1', 'Feature 2'],
    selected: false,
    onSelect: jest.fn(),
    recommended: false,
  };

  it('renders plan information correctly', () => {
    render(<BillingCard {...defaultProps} />);
    
    expect(screen.getByText('Test Plan')).toBeInTheDocument();
    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
    expect(screen.getByText('$99')).toBeInTheDocument();
    expect(screen.getByText('/month')).toBeInTheDocument();
    expect(screen.getByText('Billed Monthly')).toBeInTheDocument();
    expect(screen.getByText('Feature 1')).toBeInTheDocument();
    expect(screen.getByText('Feature 2')).toBeInTheDocument();
  });

  it('calls onSelect when clicked', () => {
    render(<BillingCard {...defaultProps} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(defaultProps.onSelect).toHaveBeenCalledTimes(1);
  });

  it('shows recommended badge when recommended is true', () => {
    render(<BillingCard {...defaultProps} recommended={true} />);
    
    expect(screen.getByText('Recommended')).toBeInTheDocument();
  });

  it('applies selected styles when selected is true', () => {
    render(<BillingCard {...defaultProps} selected={true} />);
    
    const card = screen.getByRole('button');
    expect(card).toHaveStyle({ borderColor: expect.any(String) });
  });
}); 