/// <reference types="cypress" />
import LoginPage from "../../pageObjects/LoginPage"
import PetPage from "../../pageObjects/PetPage"

describe('Add Pets to cart', () => {

  const loginPage=new LoginPage()
  const petPage=new PetPage()

  beforeEach(() => {
    loginPage.loginWithUI('bilal929','1234')
  })

  it('should be able to add and remove pets from cart', () => {
    
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