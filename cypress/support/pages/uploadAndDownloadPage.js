export class UploadAndDownload {
  constructor() {
    this.fileUpload = '#uploadFile'
    this.uploadAndDownloadButton = '#item-7'
    this.uploadedFilePath = '#uploadedFilePath'
    this.downloadButton = '#downloadButton'
  }

  clickUploadAndDownload() {
    cy.gClick(this.uploadAndDownloadButton)
  }

  returnFileUpload() {
    return cy.get(this.fileUpload)
  }

  returnUploadedFilePath() {
    return cy.get(this.uploadedFilePath, { timeout: 60000 })
  }

  clickDownloadButton() {
    cy.gClick(this.downloadButton)
  }
}