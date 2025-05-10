import { render, screen, } from '@testing-library/react'
import TestComponent from './TestComponent'

test('renders Test component', () => {
  render(<TestComponent/>)
  expect(screen.getByText(/TestComponent/i)).toBeInTheDocument()
})
