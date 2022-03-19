class FeedbackPage
{
    firstName()
    {
        return cy.get('#firstname')
    }
    lastName()
    {
        return cy.get('#lastname')
    }
    email()
    {
        return cy.get('#email')
    }
    phone()
    {
        return cy.get('#phone')
    }
    company()
    {
        return cy.get('#company')
    }
    postCode()
    {
        return cy.get('input#postcode')
    }
    priorityStatus()
    {
        return cy.get('select.MuiSelect-root')
    }
    feedbackText()
    {
        return cy.get('div[class$="MuiInput-multiline"] textarea')
    }
    sendBtn()
    {
       // return cy.get('span.MuiButton-label')
        return cy.get('button#submit')
    }
    feedbackSentMessage()
    {
        return cy.get('h2.feedback__sent')
    }
}
export default FeedbackPage;