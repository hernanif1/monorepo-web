context('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should render text', () => {
    cy.contains("Edit src/App.tsx and save to reload.")
  })

  it('should click link', () => {
    cy.get(".App-link").click()
  })
})
