/// <reference types="cypress" />
import LoginPage from "../../pageObjects/LoginPage"

describe('example to-do app', () => {

  const loginPage=new LoginPage()

  beforeEach(() => {
    cy.visit('/actions/Account.action')
  })

  it('displays two todo items by default', () => {
   
    loginPage.loginWithUI('bilal929','1234')

  })
})