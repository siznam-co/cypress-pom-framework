/// <reference types="cypress" />
import LoginPage from "../../pageObjects/LoginPage"
import PetPage from "../../pageObjects/PetPage"

describe('example to-do app', () => {

  const loginPage=new LoginPage()
  const petPage=new PetPage()

  beforeEach(() => {
    loginPage.loginWithUI('bilal929','1234')
  })

  it('displays two todo items by default', () => {
    
   // Need to updated

  })
})