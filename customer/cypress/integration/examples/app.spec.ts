context('Actions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render text', () => {
    cy.contains("Edit src/App.tsx and save to reload.")
  })
})
