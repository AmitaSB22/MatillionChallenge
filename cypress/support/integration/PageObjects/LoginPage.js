class LoginPage
{
    userName()
    {
        return cy.get('#username')
    }
    password()
    {
        return cy.get('#password')
    }
    submitBtn()
    {
        return cy.get('.MuiButton-label')
    }
}
export default LoginPage;