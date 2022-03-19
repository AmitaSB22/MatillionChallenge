///<reference types="Cypress" />
import FeedbackPage from '../PageObjects/FeedbackPage'
describe("This is my Feedback Form Page Test", function()
{
    before(function(){
        cy.fixture('FeedbackFormData').then(data  =>{
            this.FeedbackFormData=data
        })
    })

    it("Feedback Form validations", function()
    {
        const FeedbackPageObj=new FeedbackPage()
        let index = 1
        this.FeedbackFormData.forEach(data => {
            if(index>1)
            {
                cy.visit(Cypress.env('url'))
            }
            cy.login(Cypress.env('userName'),Cypress.env('password'))
            cy.log("Entering Feedback data for Iteration : " + index )

            FeedbackPageObj.firstName().type(data.firstName)
            FeedbackPageObj.firstName().should('have.attr','aria-invalid','false')

            FeedbackPageObj.lastName().type(data.lastName)
            FeedbackPageObj.lastName().should('have.attr','aria-invalid','false')

            FeedbackPageObj.email().type(data.email)
            FeedbackPageObj.email().should('have.attr','aria-invalid','false')

            FeedbackPageObj.phone().type(data.phone)
            FeedbackPageObj.phone().should('have.attr','aria-invalid','false')

            FeedbackPageObj.company().type(data.company)
            FeedbackPageObj.company().should('have.attr','aria-invalid','false')

            FeedbackPageObj.postCode().type(data.postCode)
            FeedbackPageObj.postCode().should('have.attr','aria-invalid','false')

            FeedbackPageObj.priorityStatus().select(data.priorityStatus)
            FeedbackPageObj.priorityStatus().should('have.attr','aria-invalid','false')

            FeedbackPageObj.feedbackText().type(data.feedback)
            FeedbackPageObj.feedbackText().should('have.attr','aria-invalid','false')

           //FeedbackPageObj.sendBtn().should('have.attr','tabindex','0')
            FeedbackPageObj.sendBtn().then(sendButton => {
            expect(sendButton).to.be.enabled
            })
            FeedbackPageObj.sendBtn().click()

            FeedbackPageObj.feedbackSentMessage().then(function(feedback){
                expect(feedback.text()).to.equal('Thank you for your feedback')
                cy.log('Feedback Form submitted successfully')
            })
            index+=1
    });
    })

})  