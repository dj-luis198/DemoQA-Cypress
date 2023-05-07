export class DatePickerPage {

  constructor() {
    this.datePickerButton = 'Date Picker'
    this.datePickerMonthYearInput = '#datePickerMonthYearInput'
    this.dateOfBirthInput = '#datePickerMonthYearInput'
    this.yearSelect = 'select[class="react-datepicker__year-select"]'
    this.monthSelect = 'select[class="react-datepicker__month-select"]'
    this.daySelect = 'div[class*="react-datepicker__day"][role="option"]'
  }
  /////////////////// Select Date //////////////////////

  clickDatePicker() {
    cy.contains('span[class="text"]', this.datePickerButton).click()
  }

  clearDatePicker() {
    cy.gClear(this.datePickerMonthYearInput)
  }

  returnDatePicker() {
    return cy.get(this.datePickerMonthYearInput)
  }

  typeDate() {
    this.clearDatePicker()
    cy.randomDate().as('datee')
    cy.get('@datee').then(res => {
      cy.gType(this.datePickerMonthYearInput, res.toString())
    })
  }

  /////////////////// Select Date (react-datepicker) //////////////////////

  returnDatePickerMonthYearInput() {
    return cy.get(this.datePickerMonthYearInput)
  }

  clickDateOfBirth() {
    cy.gClick(this.dateOfBirthInput)
  }

  selectYear(year) {
    cy.gSelect(this.yearSelect, year)
  }

  selectMonth(month) {
    cy.gSelect(this.monthSelect, month)
    cy.get(this.monthSelect).find(`[value=${month}]`).as('month')
  }

  selectdaySelect(day) {
    if (day == 1 || day == 21 || day == 31) {
      cy.get('@month').invoke('text').then(res => {
        cy.get(`[aria-label*="${res} ${day}st"]`).click()
      })
    } else {
      if (day == 2 || day == 22) {
        cy.get('@month').invoke('text').then(res => {
          cy.get(`[aria-label*="${res} ${day}nd"]`).click()
        })

      } else {
        if (day == 3 || day == 23) {
          cy.get('@month').invoke('text').then(res => {
            cy.get(`[aria-label*="${res} ${day}rd"]`).click()
          })
        } else {
          cy.get('@month').invoke('text').then(res => {
            cy.get(`[aria-label*="${res} ${day}th"]`).click()
          })
        }
      }
    }
  }

  returnDay(date) {
    let d = new Date(date)
    let day = '' + d.getDate()
    return day
  }

  returnMonth(date) {
    let d = new Date(date)
    let month = '' + (d.getMonth())
    return month
  }

  returnYear(date) {
    let d = new Date(date)
    let year = d.getFullYear()
    return year
  }

  SelectDateOfBirth() {
    let date = new Date(+(new Date()) - Math.floor(Math.random() * 500000000000))
    let month = this.returnMonth(date)
    let day = this.returnDay(date)
    let year = this.returnYear(date)
    this.clickDateOfBirth()
    this.selectYear(year.toString())
    this.selectMonth(month.toString())
    this.selectdaySelect(day.toString())

    month = parseInt(month) + 1
    let d = day.toString(), m = (month).toString()

    if (d.length < 2) {
      d = '0' + d
      cy.log(d)
    }
    if (m.length < 2) {
      m = '0' + m
      cy.log(m)
    }
    return `${m}/${d}/${year}`
  }
}