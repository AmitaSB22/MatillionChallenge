///<reference types="Cypress" />
import LoginPage from '../PageObjects/LoginPage'
describe("This is my Login Page Test", function()
{
    const LoginPageObj=new LoginPage()

    it("Login Page Validation", function()
    {
        cy.login(Cypress.env('userName'),Cypress.env('password'))
        cy.get('p#username-helper-text').should('not.exist')    //assertion to verify Error Mesage on userName field
        cy.get('p#password-helper-text').should('not.exist')    //assertion to verify Error Mesage on Password field  
        cy.contains('Feedback Form').should('have.length',1)    //assertion to verify if feedback Form has appeared on screen
        cy.log('Login Successful')
    })

    it("Negative Test for Blank values on Login Page ", function()
    {
        LoginPageObj.userName().clear
        LoginPageObj.password().clear
        LoginPageObj.submitBtn().click()

        cy.get('p#username-helper-text').should('exist')    //assertion to verify Error Mesage on userName field
        cy.get('p#password-helper-text').should('exist')    //assertion to verify Error Mesage on Password field  
        cy.get('p#username-helper-text').then(function(userNameError){
            expect(userNameError.text()).to.equal('Please provie a username.')
        })
        cy.get('p#password-helper-text').then(function(passwordError){
            expect(passwordError.text()).to.equal('Please enter a password.')
        })
        
        cy.log('Error Messages validated for blank values on Login Page.')
    })

    it("Negative Test for Incorrect values on Login Page ", function()
    {
        LoginPageObj.userName().clear
        LoginPageObj.userName().type(Cypress.env('userName')+'_fake')
        LoginPageObj.password().clear
        LoginPageObj.password().type(Cypress.env('password')+'_fake')
        LoginPageObj.submitBtn().click()

        cy.get('p#username-helper-text').should('not.exist')  //assertion to verify Error Mesage on userName field
        cy.get('p#password-helper-text').should('exist')      //assertion to verify Error Mesage on Password field  
        cy.get('p#password-helper-text').then(function(passwordError){
            expect(passwordError.text()).to.equal('Please enter a valid username/password')
        })
        
        cy.log('Error Messages validated for incorrect values on Login Page.')
    })

})  