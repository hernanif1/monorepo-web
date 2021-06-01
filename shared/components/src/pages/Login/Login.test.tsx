import { render, screen } from '@testing-library/react'
import { Login } from './Login'

test('renders learn react link', () => {
  render(<Login />)
  const linkElement = screen.getByText(/Login/i)
  expect(linkElement).toBeInTheDocument()
})
