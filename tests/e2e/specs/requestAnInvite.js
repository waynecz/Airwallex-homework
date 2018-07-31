context("Broccoli", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.wait(1000) 
    cy.get(".landing__body > .button").click();
  })

  it('All done', () => {
    cy.server()
    cy.get('.request__form > .input').as('inputs')

    cy.get('@inputs').get(':nth-child(1) > input').type('Waynecz').focus().blur()
    cy.get('@inputs').get(':nth-child(2) > input').type('451578533@qq.com').focus().blur()
    cy.get('@inputs').get(':nth-child(3) > input').type('451578533@qq.com').focus().blur()

    cy.route('POST', '/prod/fake-auth').as('submit')

    cy.get('.request__action > .button:first').click()
    
    cy.wait('@submit').then(xhr => {
      cy.contains('.dialog--done > .dialog__title', 'All done')
    })
  })

  it("Validator", () => {
    cy.get('.request__form > .input').as('inputs')

    cy.get('@inputs').get(':nth-child(1) > input').as('name').type('fn').focus().blur()
    cy.get('@inputs').get(':nth-child(1)').as('nameComp').should('have.class', 'is-error')
    
    cy.get('@inputs').get(':nth-child(2) > input').as('email').type('email.com').focus().blur()
    cy.get('@inputs').get(':nth-child(2)').as('emailComp').should('have.class', 'is-error')

    cy.get('@inputs').get(':nth-child(3) > input').as('emailConfirm').type('email.com').focus().blur()
    cy.get('@inputs').get(':nth-child(3)').as('emailConfirmComp').should('have.class', 'is-error')

    // Email confirm validate
    cy.get('@email').clear().type('email@airwallex.com').focus().blur()
    cy.get('@emailComp').should('not.have.class', 'is-error')
    cy.get('@emailConfirm').clear().type('otheremail@airwallex.com').focus().blur()
    cy.get('@emailConfirmComp').should('have.class', 'is-error')
  })

  it("Used email", () => {
    cy.server()
    cy.get('.request__form > .input').as('inputs')

    cy.get('@inputs').get(':nth-child(1) > input').as('name').type('Waynecz').focus().blur()
    cy.get('@inputs').get(':nth-child(1)').as('nameComp').should('not.have.class', 'is-error')
    
    cy.get('@inputs').get(':nth-child(2) > input').as('email').type('usedemail@airwallex.com').focus().blur()
    cy.get('@inputs').get(':nth-child(2)').as('emailComp').should('not.have.class', 'is-error')

    cy.get('@inputs').get(':nth-child(3) > input').as('emailConfirm').type('usedemail@airwallex.com').focus().blur()
    cy.get('@inputs').get(':nth-child(3)').as('emailConfirmComp').should('not.have.class', 'is-error')

    // Catch 400 error
    cy.route({
      method: 'POST', url: '/prod/fake-auth', status: 400
    }).as('submit')

    cy.get('.request__action > .button:first').click()
    
    cy.wait('@submit').then(xhr => {
      cy.contains('.request__err', 'Email is already in use')
    })
  })
});
