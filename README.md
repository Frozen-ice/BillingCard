# FutureFeed Pricing Component

A responsive and accessible pricing component built with React, TypeScript, and Material-UI. It showcases FutureFeed's pricing plans with a clean and user-friendly interface.

## Features

- Modern design using Material-UI
- Fully accessible with ARIA labels and semantic HTML
- Mobile-first approach with responsive grid layout
- Multiple billing period options (Monthly, Annually, 2 Years, 3 Years)
- Built with TypeScript for type safety
- Custom theme with FutureFeed's brand colors
- Dynamic pricing updates based on selected billing period
- Recommended plan highlighting
- Clear feature lists for each plan

## Available Plans

1. **Basic FAR Self-Assessment**
   - CMMC Level 1 Express
   - Perfect for contractors with FCI

2. **FutureFeed Core**
   - CMMC Level 1+
   - Recommended plan
   - Includes CIS Implementation Group 1

3. **DoD Contractor CUI Bundle**
   - CMMC Level 2+
   - Includes NIST SP 800-171 Framework

## Trade-offs & Decisions

1. Styling
	-	Went with MUI’s built-in styling system instead of something like styled-components. It integrates better with MUI’s theming and keeps things consistent.
	-	Used sx for quick one-off styles and styled for shared components—helps keep things clean and maintainable.
	-	Trade-off: MUI’s styling does add a bit to the bundle size, but having a robust and consistent theme setup is more valuable in the long run.

2. Responsive Design
	-	Set breakpoints at 600px (sm), 900px (md), and 1200px (lg) to cover common device sizes.
	-	Used fluid typography and spacing so things scale nicely and look good across screens.
	-	Trade-off: Writing responsive styles adds some complexity, but it’s worth it for a smoother user experience.

3. Accessibility
	-	Added ARIA roles and used semantic HTML where it made sense.
	-	Made sure everything’s keyboard navigable so it works for everyone, not just mouse users.
	-	Trade-off: A bit more markup and testing involved, but it’s a no-brainer when it comes to building inclusive UIs.

4. Performance
	-	Wrapped components with React.memo where it helped cut down on re-renders.
	-	Defined props carefully to avoid unnecessary updates and catch issues early.
	-	Trade-off: Slightly more verbose component structure, but the speed boost and stability make it a good trade.

## Future Enhancements

- **Performance Optimization**: Further optimize component rendering and reduce bundle size
- **Accessibility Improvements**: Enhance keyboard navigation and screen reader support
- **Feature Expansion**: Add more customization options and interactive elements
- **Documentation**: Improve inline documentation and add more usage examples

## Tech Stack

- **Frontend**: React, TypeScript, Material-UI
- **Build Tool**: Vite
- **Testing**: Jest, React Testing Library
- **Version Control**: Git
- **Package Manager**: npm

## Installation

```bash
# Clone the repository
git clone https://github.com/your-username/futurefeed.git

# Navigate to the project directory
cd futurefeed

# Install dependencies
npm install
```

## Project Structure

```
futurefeed/
├── src/
│   ├── components/
│   │   ├── BillingCard.tsx
│   │   └── BillingPeriodToggle.tsx
│   ├── data/
│   │   └── plans.ts
│   ├── types/
│   │   └── index.ts
│   ├── theme/
│   │   └── index.ts
│   └── App.tsx
├── package.json
└── README.md
```

## Usage

```tsx
import { BillingCard } from './components/BillingCard';
import { BillingPeriod } from './types';

const MyComponent = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>(BillingPeriod.Monthly);

  return (
    <BillingCard
      planName="FutureFeed Core"
      subtitle="CMMC Level 1+"
      price="$399"
      period="month"
      note="Billed Yearly"
      features={[
        'Feature 1',
        'Feature 2',
        // ... more features
      ]}
      selected={selected === 0}
      onSelect={() => setSelected(0)}
      recommended={true}
    />
  );
};
```

## Development

```bash

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

## Customization

The component can be customized through the theme configuration in `src/theme/index.ts`. You can modify:

- Colors
- Typography
- Spacing
- Component default props
- Custom breakpoints

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Material-UI for the component library
- React team for the amazing framework
- TypeScript for type safety
