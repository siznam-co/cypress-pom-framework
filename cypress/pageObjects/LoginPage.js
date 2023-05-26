import CommonPage from "./CommonPage";
class LoginPage {

  loginWithUI(userId,password) {

    const commonPage = new CommonPage();
    cy.visit("/actions/Account.action");

    commonPage.getUserNameField().type("bilal929");
    commonPage.getPasswordField().clear().type("1234");
    commonPage.getSigninButton().click();
    commonPage.verifyUrl("/actions/Catalog.action");
    commonPage.getWelcomeContent("Welcome");

  }
}
export default LoginPage;
