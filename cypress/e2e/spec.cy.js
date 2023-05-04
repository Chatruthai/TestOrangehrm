describe('OrangeHRM Login page', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com')
  })

  it('Verify title', () => {
    cy.title().should('eq','OrangeHRM') ///title web
  })

  it('Verify logo branding', () => {
    cy.get('.orangehrm-login-branding').find('img').should('have.attr','src','/web/images/ohrm_branding.png?1672659722816') ///logo brand
  })

  it('Verify logo login', () => {
    cy.get('.orangehrm-login-logo').find('img').should('have.attr','src','/web/images/ohrm_logo.png') /// logo login
  })

  it('Verify login text ', () => {
    cy.get('.oxd-text--h5').contains('Login') /// login text
  })

  it('Verify username section ', () => {
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-icon').should('have.class','bi-person'), /// username icon
    cy.get(':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').contains('Username'), /// username text
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input--active').should('have.attr','placeholder','Username')/// placeholder username
  })

  it('Verify password section ', () => {
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-icon').should('have.class','bi-key'), /// password icon
    cy.get(':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label').contains('Password'), /// password text
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input--active').should('have.attr','placeholder','Password')/// placeholder password
  })

  it('Verify login button ', () => {
    cy.get('.oxd-button').contains('Login').should('have.attr','type','submit') /// login button
  })

  it('Verify forgot password text', () => {
    cy.get('.orangehrm-login-forgot > .oxd-text').contains('Forgot your password?') /// forgpt password text
  })

  it('Verify footer text', () => {
    cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').contains('OrangeHRM OS 5.3'), /// line 1
    cy.get('.orangehrm-copyright-wrapper > :nth-child(2)').contains('© 2005 - 2023 OrangeHRM, Inc. All rights reserved.') /// line 2 
  })

  it('Verify social icons', () => {
    cy.get('a[href="https://www.linkedin.com/company/orangehrm/mycompany/"]').find('svg').should('have.attr','xmlns','http://www.w3.org/2000/svg')/// linkedin icons
    cy.get('a[href="https://www.facebook.com/OrangeHRM/"]').find('svg').should('have.attr','xmlns','http://www.w3.org/2000/svg')/// lfacebook icons
    cy.get('a[href="https://twitter.com/orangehrm?lang=en"]').find('svg').should('have.attr','xmlns','http://www.w3.org/2000/svg')/// twitter icons
    cy.get('a[href="https://www.youtube.com/c/OrangeHRMInc"]').find('svg').should('have.attr','xmlns','http://www.w3.org/2000/svg')/// youtube icons
  })

})
