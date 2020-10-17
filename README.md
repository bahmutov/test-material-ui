# test-material-ui
> Testing [Material UI](https://material-ui.com/) components using Cypress

![cypress version](https://img.shields.io/badge/cypress-5.4.0-brightgreen) ![cypress-react-unit-test version](https://img.shields.io/badge/cypress--react--unit--test-4.16.2-brightgreen)

Uses [cypress-react-unit-test](https://github.com/bahmutov/cypress-react-unit-test)

Installation

```shell
$ npx create-react-app test-material-ui
$ cd test-material-ui

$ yarn add @material-ui/core @material-ui/icons @material-ui/lab
info Direct dependencies
├─ @material-ui/core@4.9.9
├─ @material-ui/icons@4.9.1
└─ @material-ui/lab@4.0.0-alpha.48

$ yarn add -D cypress-react-unit-test@3.0.0-cypress-mount-mode.14
```

Add [cypress.json](cypress.json) with experimental flag

Write components and specs in [src](src) folder. I recommend looking at [src/autocomplete-spec.js](src/autocomplete-spec.js)

![Autocomplete test](images/autocomplete-demo.gif)

And [src/date-picker-spec.js](src/date-picker-spec.js)

![Date and time picker](images/date-pickers-demo.gif)
