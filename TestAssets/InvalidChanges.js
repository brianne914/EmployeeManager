module.exports = (employeeManager, name, phoneNumber) => {
    employeeManager
        .click('@employee2')
        .clearValue('@nameInput')
        .setValue('@nameInput', name)
        .clearValue('@phoneInput')
        .setValue('@phoneInput', phoneNumber)
        .click('@saveButton')
        .waitForElementPresent('@errorCard', 5000, 'Error Card Present')
        .getText('@errorCard', function (result) {
            console.log(result.value)
            })
        .expect.element('@nameInput').to.have.css('border-bottom', 'Red Underline Present').which.equals('2px solid rgb(204, 0, 0)')
    employeeManager
        .expect.element('@titleInput').to.have.css('border-bottom', 'Red Underline Present').which.equals('2px solid rgb(204, 0, 0)')
}