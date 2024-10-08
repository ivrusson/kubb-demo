import { screen } from '@testing-library/react'
import { navigateTo } from './utils'

describe('Router', () => {
  it('should render the home page for /', () => {
    navigateTo('/');

    expect(screen.getByRole('heading', { name: /pokedex/i })).toBeInTheDocument();
  })
})