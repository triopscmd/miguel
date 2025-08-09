```typescript
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';
import README from '../../README.md';

describe('Core Project Setup Guide (README)', () => {
  it('should render the main project setup heading', () => {
    render(<README />);
    const heading = screen.getByRole('heading', {
      name: /project setup|getting started|welcome/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
  });

  it('should provide clear instructions for installing dependencies', () => {
    render(<README />);
    expect(screen.getByText(/npm install|yarn install|pnpm install/i)).toBeInTheDocument();
  });

  it('should provide clear instructions for running the application in development mode', () => {
    render(<README />);
    expect(screen.getByText(/npm start|npm run dev|yarn dev|pnpm dev/i)).toBeInTheDocument();
  });
});