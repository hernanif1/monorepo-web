import { render, screen } from '@testing-library/react'
import { Text } from './Text'

test('renders learn react link', () => {
  render(<Text />)
  const linkElement = screen.getByText(/storybook/i)
  expect(linkElement).toBeInTheDocument()
})
