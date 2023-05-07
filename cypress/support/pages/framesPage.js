export class FramesPage {

  constructor() {
    this.framesButton = 'Frames'
    this.frame1 = '#frame1'
    this.sampleHeading = '#sampleHeading'
    this.frame2 = '#frame2'
  }

  clickFrames() {
    cy.contains('span[class="text"]', this.framesButton).click()
  }

  returnFrame1() {
    return cy.get(this.frame1)
  }

  returnFrame2() {
    return cy.get(this.frame2)
  }

  returnSampleHeading() {
    return cy.get(this.sampleHeading)
  }

  returnIframe1() {
    return cy.iframe(this.frame1, this.sampleHeading)
  }

  returnIframe2() {
    return cy.iframe(this.frame2, this.sampleHeading)
  }

  returnIframe11() {
    return cy.getIframeBody(this.frame1).find(this.sampleHeading)
  }

  returnIframe22() {
    return cy.getIframeBody(this.frame2).find(this.sampleHeading)
  }
}