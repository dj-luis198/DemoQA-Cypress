export class ProgressBarPage {

  constructor() {
    this.progressBarButton = 'Progress Bar'
    this.startStopButton = '#startStopButton'
  }

  clickProgressBar() {
    cy.contains('span[class="text"]', this.progressBarButton).click()
  }

  clickStartStopButton() {
    cy.gClick(this.startStopButton)
  }
}