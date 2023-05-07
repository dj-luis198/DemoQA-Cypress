///<reference types="cypress" />

import { HomePage } from '../../support/pages/homePage'
import { UploadAndDownload } from '../../support/pages/uploadAndDownloadPage'

describe('Upload and download', () => {
  const homePage = new HomePage()
  const uploadAndDownloadPage = new UploadAndDownload()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickElements()
    uploadAndDownloadPage.clickUploadAndDownload()
  })

  it('Verificar subir archivo de imagen .jpg', () => {
    uploadAndDownloadPage.returnFileUpload().attachFile('cat.jpg')
    uploadAndDownloadPage.returnUploadedFilePath().invoke('text').then(res => {
      expect(res).contain('cat.jpg')
    })
  })

  it.only('Verificar bajar archivo de imagen .jpg', () => {
    uploadAndDownloadPage.clickDownloadButton()
    cy.verifyDownload('sampleFile.jpeg')

  })
})