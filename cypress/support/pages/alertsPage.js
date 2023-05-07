export class AlertsPage {

  constructor() {
    this.alertsButton = 'Alerts'
    this.alertButton = '#alertButton'
    this.timerAlertButton = '#timerAlertButton'
    this.confirmButton = '#confirmButton'
    this.promtButton = '#promtButton'
    this.promptResult = '#promptResult'
  }

  clickAlerts() {
    cy.contains('span[class="text"]', this.alertsButton).click()
  }

  clickAlertComun() {
    cy.gClick(this.alertButton)
  }

  clickTimerAlert() {
    cy.gClick(this.timerAlertButton)
  }

  clickConfirm() {
    cy.gClick(this.confirmButton)
  }

  clickPromt() {
    cy.gClick(this.promtButton)
  }

  returnPromptResult() {
    return cy.get(this.promptResult)
  }
}