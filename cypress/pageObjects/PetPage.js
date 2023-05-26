import CommonPage from "./CommonPage";
class PetPage {

 getFishCategory(categoryName){
    return cy.get(`#SidebarContent a[href="/actions/Catalog.action?viewCategory=&categoryId=${categoryName}"]`).should('be.visible')
 }

 getCartSubHeading(txt){
    return cy.get('#Cart h2').should('contain.text',txt)
 }

 verifyCategorySubHeading(txt){
    return cy.get('#Catalog h2').should('contain.text',txt)
 }

 getPetByID(petId){
    return cy.get(`a[href="/actions/Catalog.action?viewProduct=&productId=${petId}"]`).should('be.visible')
 }

 getItemById(itemId){
    return cy.get(`a[href="/actions/Catalog.action?viewItem=&itemId=${itemId}"]`).should('be.visible')
 }

 addPetToCartButton(itemId){
    return cy.get(`a[href="/actions/Cart.action?addItemToCart=&workingItemId=${itemId}"]`).should('be.visible')
 }

 removeItemFromCartById(itemId){
    return cy.get(`a[href="/actions/Cart.action?removeItemFromCart=&workingItemId=${itemId}"]`).should('be.visible')
 }


}
export default PetPage;
