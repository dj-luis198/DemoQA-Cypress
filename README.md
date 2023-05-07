# [DEMOQA.COM](https://demoqa.com) CYPRESS TESTS

[![Chrome](https://github.com/dj-luis198/DemoQA-Cypress/actions/workflows/main.yml/badge.svg)](https://github.com/dj-luis198/DemoQA-Cypress/actions/workflows/main.yml)

[demoqa.com](https://demoqa.com) es una página provista por toolsqa.com para realizar practicas con Selenium. La misma posee módulos como botones, menús, formularios, etc. En estas pruebas automatizadas se utilizó Cypress.io con Java Script aplicando el patron de diseño POM (Page Object Model).

## Pre requisitos
Se requiere tener Node.js y npm instalados para ejecutar este proyecto.
> Usé versiones `v18.15.0` y `9.5.0` de Node.js y npm, respectivamente. Le sugiero que use la misma versión o versiones posteriores.

## Instalación
Ejecutar `npm install` (o `npm i` para la versión corta) para instalar las dependencias de desarrollo.

## Pruebas

> **Nota:** Antes de ejecutar las pruebas, registrarse en la pagina; crear un archivo `.env` en el directorio raiz, declarar las 
variables CYPRESS_USER_NAME, CYPRESS_USER_PASS con sus respectivos usuario y contraseña.
>

Ejecutar `npm test` para abrir Cypress en modo interactivo en el navegador Chrome.

Ejecutar `npm run test-chrome` para ejecutar la prueba en modo headless.

Ejecutar `npm run eslint cypress` para ejecutar analisis estatico de codigo.

Ejecutar `npm run eslint cypress --fix` para corregir errores.

## Metodos
Algunos de los métodos aprendidos son:
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
each()
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
session()
```
además se utilizaron las dependencias:

```
dotenv
plugin-api
file-upload
downloadfile
verify-downloads
ajv validador schema
eslint
eslint-plugin-cypress

```
### Resultados

```
====================================================================================================

  (Run Finished)

       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  API-Book-Store/bookStore.cy.js           00:02       11       11        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Alerts -Frame-Windows/alerts.cy.js       00:10        6        6        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Alerts -Frame-Windows/browser-windo      00:04        2        2        -        -        - │
  │    ws.cy.js                                                                                    │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Alerts -Frame-Windows/frames.cy.js       00:03        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Alerts -Frame-Windows/modal-dialogs      00:03        2        2        -        -        - │
  │    .cy.js                                                                                      │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Alerts -Frame-Windows/nested-frames      00:02        1        1        -        -        - │
  │    .cy.js                                                                                      │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Book-Store-Application/bookStorePag      00:03        1        1        -        -        - │
  │    ination.cy.js                                                                               │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Widgets/Select.cy.js                     00:10        6        6        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Widgets/accordian.cy.js                  00:05        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Widgets/autoComplete.cy.js               00:03        2        1        -        1        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Widgets/datePicker.cy.js                 00:05        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Widgets/menu.cy.js                       00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Widgets/progressBar.cy.js                00:01        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Widgets/slider.cy.js                     00:01        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  Widgets/tooltTips.cy.js                  00:04        2        2        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  elements/broken-links-images.cy.js       118ms        2        -        -        2        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  elements/buttons.cy.js                   00:04        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  elements/check-box.cy.js                 00:10        7        7        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  elements/links.cy.js                     00:11        9        9        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  elements/radio-button.cy.js              00:03        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  elements/text-box.cy.js                  00:04        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  elements/upload-and-download.cy.js       00:02        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  elements/web-tables.cy.js                01:00        3        3        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  forms/practiceForm.cy.js                 00:06        1        1        -        -        - │
  ├────────────────────────────────────────────────────────────────────────────────────────────────┤
  │ ✔  session/sessionGUI.cy.js                 00:07        2        2        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        02:56       75       72        -        3        -  
    
    
