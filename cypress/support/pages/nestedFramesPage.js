export class NestedFamesPage {

  constructor() {
    this.nestedFramesButton = 'Nested Frames'
    this.frame1 = '#frame1'
    this.frame2 = 'iframe'
  }

  clickNestedFrames() {
    cy.contains('span[class="text"]', this.nestedFramesButton).click()
  }

  returnFrameChildren() {
    return cy.getIframeChildrenBody(this.frame1, this.frame2).find('p')
  }
}