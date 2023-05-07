// <reference types="cypress" />
import { HomePage } from '../../support/pages/homePage'
import { CheckBoxPage } from '../../support/pages/checkBoxPage'

describe('check box', () => {
  const homePage = new HomePage()
  const checkBoxPage = new CheckBoxPage()

  let checkData

  before(() => {
    cy.fixture('checkBox').then(data => {
      checkData = data
    })
  })

  beforeEach(() => {
    cy.visit('/')
    homePage.clickElements()
    checkBoxPage.clickCheckBox()
  })

  it('Expandir y contraer todas las opciones con los botones generales', () => {
    checkBoxPage.expandsAll()
    checkBoxPage.returnAllCheckBox().should('not.be.checked')
    checkBoxPage.collapseAll()
    checkBoxPage.returnAllToggle().should('have.length', '1')
  })

  it('Seleccionar la opcion "Desktop"', () => {
    let resEsperado = checkData[5].resp
    let sinEspacios = resEsperado.split(' ').join('')

    checkBoxPage.expandsAll()
    checkBoxPage.returnAllCheckBox().should('not.be.checked')
    checkBoxPage.checkOption(checkData[5].check[0])
    checkBoxPage.returnAllChecked()
    checkBoxPage.returnNameChecked().invoke('text').then(res => {
      expect(res.toLowerCase()).to.eql(sinEspacios)
    })
    checkBoxPage.returnAllSuccessText().invoke('text').then(res => {
      expect(res).to.eql(sinEspacios)
    })
  })

  it('Seleccionar la opcion "Documents"', () => {
    let resEsperado = checkData[4].resp
    let sinEspacios = resEsperado.split(' ').join('')

    checkBoxPage.expandsAll()
    checkBoxPage.returnAllCheckBox().should('not.be.checked')
    checkBoxPage.checkOption(checkData[4].check[0])
    checkBoxPage.returnAllChecked()
    checkBoxPage.returnNameChecked().invoke('text').then(res => {
      expect(res.toLowerCase()).to.eql(sinEspacios)
    })
    checkBoxPage.returnAllSuccessText().invoke('text').then(res => {
      expect(res).to.eql(sinEspacios)
    })
  })

  it('Seleccionar la opcion "Downloads"', () => {
    let resEsperado = checkData[3].resp
    let sinEspacios = resEsperado.split(' ').join('')
    let sinDoc = sinEspacios.split('.doc').join('')

    checkBoxPage.expandsAll()
    checkBoxPage.returnAllCheckBox().should('not.be.checked')
    checkBoxPage.checkOption(checkData[3].check[0])
    checkBoxPage.returnAllChecked()
    checkBoxPage.returnNameChecked().invoke('text').then(res => {
      expect(res.split(' ').join('').toLowerCase()).to.eql(sinEspacios)
    })
    checkBoxPage.returnAllSuccessText().invoke('text').then(res1 => {
      expect(res1.toLowerCase()).to.eql(sinDoc)
    })
  })

  it('Seleccionar las opciones "Private"', () => {
    let resEsperado = checkData[2].resp
    let sinEspacios = resEsperado.split(' ').join('')

    checkBoxPage.expandsAll()
    checkBoxPage.returnAllCheckBox().should('not.be.checked')
    checkBoxPage.checkOption(checkData[2].check[0])
    checkBoxPage.returnAllChecked()
    checkBoxPage.returnNameChecked().invoke('text').then(res => {
      expect(res.toLowerCase()).to.eql(sinEspacios)
    })
    checkBoxPage.returnAllSuccessText().invoke('text').then(res => {
      expect(res).to.eql(sinEspacios)
    })
  })

  it('Seleccionar las opciones "Private, Angular, Commands"', () => {
    let resEsperado = checkData[1].resp
    let sinEspacios = resEsperado.split(' ').join('')

    checkBoxPage.expandsAll()
    checkBoxPage.returnAllCheckBox().should('not.be.checked')
    checkBoxPage.checkOption(checkData[1].check[0])
    checkBoxPage.checkOption(checkData[1].check[1])
    checkBoxPage.checkOption(checkData[1].check[2])
    checkBoxPage.returnAllChecked()
    checkBoxPage.returnNameChecked().invoke('text').then(res => {
      expect(res.toLowerCase()).to.eql(sinEspacios)
    })
    checkBoxPage.returnAllSuccessText().invoke('text').then(res => {
      expect(res).to.eql(sinEspacios)
    })
  })

  it('Seleccionar todas las opciones', () => {
    let resEsperado = checkData[0].resp
    let sinEspacios = resEsperado.split(' ').join('').toLowerCase()
    let sinDoc = sinEspacios.split('.doc').join('')

    checkBoxPage.expandsAll()
    checkBoxPage.returnAllCheckBox().should('not.be.checked')
    checkBoxPage.checkOption(checkData[0].check[0])
    checkBoxPage.returnAllChecked()
    checkBoxPage.returnNameChecked().invoke('text').then(res => {
      expect(res.split(' ').join('').toLowerCase()).to.eql(sinEspacios)
    })
    checkBoxPage.returnAllSuccessText().invoke('text').then(res => {
      expect(res.toLowerCase()).to.eql(sinDoc)
    })
  })
})