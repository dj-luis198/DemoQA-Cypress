# [DEMOQA.COM](https://demoqa.com) CYPRESS TESTS

[![Chrome](https://github.com/dj-luis198/DemoQA-Cypress/actions/workflows/main.yml/badge.svg)](https://github.com/dj-luis198/DemoQA-Cypress/actions/workflows/main.yml)

[demoqa.com](https://demoqa.com) es una página provista por toolsqa.com para realizar practicas con Selenium. La misma posee módulos como botones, menús, formularios, etc.

## Methods
En estas pruebas automatizadas se utilizó Cypress.io con Java Script aplicando el patron de diseño POM (Page Object Model). Algunos de los métodos aprendidos son:
```
get()
type()
click()
select()
check()
clear()
contains()
dblclick()
rightclick()
frameLoaded()
wrap()
should()
then()
its()
each(()
visit()
on()
expect()
window()
intercept()
as()
wait()
request()
verifyDownload
it()
describe()
before()
beforeEach()
after()
afterEach()
```
además se utilizaron los plugins:

```
dotenv
plugin-api
file-upload
downloadfile
verify-downloads
ajv validador schema

```
### resultados

```
====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ √  Alerts -Frame-Windows/alerts.cy.js       00:23        6        6        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Alerts -Frame-Windows/browser-windo      00:12        2        2        -        -        - │
  │    ws.cy.js                                                                                    │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Alerts -Frame-Windows/frames.cy.js       00:10        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Alerts -Frame-Windows/modal-dialogs      00:11        2        2        -        -        - │
  │    .cy.js                                                                                      │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Alerts -Frame-Windows/nested-frames      00:07        1        1        -        -        - │
  │    .cy.js                                                                                      │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  API-Book-Store/account.cy.js             00:02        5        5        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Book-Store-Application/bookStorePag      00:08        1        1        -        -        - │
  │    ination.cy.js                                                                               │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ×  elements/broken-links-images.cy.js       00:13        2        -        2        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  elements/buttons.cy.js                   00:12        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  elements/check-box.cy.js                 00:30        7        7        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  elements/links.cy.js                     00:34        9        9        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  elements/radio-button.cy.js              00:12        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  elements/text-box.cy.js                  00:09        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  elements/upload-and-download.cy.js       00:07        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  elements/web-tables.cy.js                02:15        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  forms/practiceForm.cy.js                 00:13        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Widgets/accordian.cy.js                  00:14        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Widgets/autoComplete.cy.js               00:07        2        1        -        1        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Widgets/datePicker.cy.js                 00:13        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Widgets/menu.cy.js                       00:07        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Widgets/progressBar.cy.js                00:06        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Widgets/Select.cy.js                     00:24        6        6        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Widgets/slider.cy.js                     00:06        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ √  Widgets/tooltTips.cy.js                  00:11        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ×  1 of 24 failed (4%)                      07:18       67       64        2        1        -
