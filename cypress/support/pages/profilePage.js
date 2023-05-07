export class ProfilePage {
  constructor() {
    this.userNameLabel = '#userName-value'
  }

  returnUserNameProfile() {
    return cy.get(this.userNameLabel)
  }
}