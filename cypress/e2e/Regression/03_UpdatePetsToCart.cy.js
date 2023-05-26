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
    
    petPage.getFishCategory('DOGS').click()
    petPage.verifyCategorySubHeading('Dogs')

    petPage.getPetByID('K9-BD-01').click()
    petPage.verifyCategorySubHeading('Bulldog')
    petPage.getItemById('EST-6').click()
    petPage.addPetToCartButton('EST-6').click()

    petPage.getCartSubHeading('Shopping Cart')
    petPage.getItemById('EST-6')

    petPage.removeItemFromCartById('EST-6').click()

  })
})