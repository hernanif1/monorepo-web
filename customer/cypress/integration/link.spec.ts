context('App', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should click link', () => {
    cy.get(".App-link2").click()
  })
})
