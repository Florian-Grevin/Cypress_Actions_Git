describe('Smoke test', () => {
    it('Application répond', () => {
        cy.visit('http://localhost:3000')
    })
})