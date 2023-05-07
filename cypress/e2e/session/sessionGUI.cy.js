///<reference types="cypress" />

import { LoginPage } from '../../support/pages/loginPage'
import { ProfilePage } from '../../support/pages/profilePage'

describe('Session GUI', () => {
  const loginPage = new LoginPage()
  const profilePage = new ProfilePage()

  let user = 'danielff'
  let pass = 'Az2528831040@'

  beforeEach(() => {
    loginPage.login(user, pass)
    cy.visit('/profile')
  })

  it('Session UI', () => {
    profilePage.returnUserNameProfile().invoke('text').should('eql', user)
  })

  it('Session UI', () => {
    profilePage.returnUserNameProfile().invoke('text').should('eql', user)
  })

})