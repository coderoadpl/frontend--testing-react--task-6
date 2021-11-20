describe('CounterHooks E2E test', () => {
  it('should render valid initial number', () => {
    cy.visit('http://localhost:3000/')

    cy
      .get('[data-testid="counter__number-display"]')
      .should('have.text', '0')
  })

  it('should render valid number after button click', () => {
    cy.visit('http://localhost:3000/')

    cy
      .get('[data-testid="counter__button--inc"]')
      .click()

    cy
      .get('[data-testid="counter__number-display"]')
      .should('have.text', '1')
  })
})
