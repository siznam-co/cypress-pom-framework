class CommonPage{

    getUserNameField(){
        return cy.get('input[name="username"]').should('be.visible')
    }

    getPasswordField(){
        return cy.get('input[name="password"]').should('be.visible')
    }

    getSigninButton(){
        return cy.get('[name="signon"]').should('be.visible')
    }

    verifyUrl(endPoint){
        cy.url().should('include', endPoint)
        cy.url().should('include', endPoint)
    }

    getWelcomeContent(txt){
        return cy.get('#WelcomeContent').should('contain.text',txt)
    }

}
export default CommonPage;