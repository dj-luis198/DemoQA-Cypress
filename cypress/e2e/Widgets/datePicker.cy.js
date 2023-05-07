///<reference types="cypress" />
import { HomePage } from '../../support/pages/homePage'
import { DatePickerPage } from '../../support/pages/datePickerPage'

describe('Date Picker', () => {
  const homePage = new HomePage()
  const datePicker = new DatePickerPage()

  beforeEach(() => {
    cy.visit('/')
    homePage.clickWidgetsCard()
    datePicker.clickDatePicker()
  })

  it('Select Date', () => {
    datePicker.typeDate()
    cy.get('@datee').then(res => {
      datePicker.returnDatePicker().should('have.attr', 'value').and('eql', res)
    })
  })

  it('Select Date (react-datepicker)', () => {
    let date = datePicker.SelectDateOfBirth()
    datePicker.returnDatePickerMonthYearInput().should('have.attr', 'value').and('eql', date)
  })
})