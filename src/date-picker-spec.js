import React from 'react'
// these date pickers came from
// https://material-ui.com/components/pickers/
// https://codesandbox.io/s/z9k3z
import DatePickers from './date-picker'
import {mount} from '@cypress/react'

describe('Date pickers', () => {
  it('picks a day', () => {
    mount(<DatePickers />)

    cy.viewport(500, 600)
    cy.log('**type date**')
    cy.get('input#date-picker-inline')
      .clear()
      .type('12 31')

    cy.contains('#date-picker-inline-helper-text', 'Invalid Date')

    // continue typing
    cy.get('input#date-picker-inline')
      .type('1999') // party like
    cy.get('#date-picker-inline-helper-text').should('not.exist')

    // use calendar widget
    cy.get('[aria-label="change date"]').first().click()
    cy.contains('December 1999').should('be.visible')

    // perfect candidate for visual testing!

    // not sure what the best selectors would be in this case
    cy.get('button.MuiPickersCalendarHeader-iconButton').eq(1).click()
    // Happy New Year 🎉
    cy.contains('January 2000').should('be.visible')

    cy.log('**close the date picker**')
    cy.get('body').click({ position: 'topLeft' })
    cy.contains('January 2000').should('not.exist')

    cy.log('**check time**')
    cy.get('.MuiInputAdornment-positionEnd button').eq(2).click()
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.get('.MuiPickersClock-clock').should('be.visible')
      .wait(500) // for the demo

    // another great candidate for visual testing

    cy.get('.MuiDialog-root').contains('OK').click()
    cy.get('.MuiPickersClock-clock').should('not.exist')
  })
})
