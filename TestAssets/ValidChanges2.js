module.exports = (employeeManager, name, phoneNumber, title) => {
    employeeManager
        .click('@employee2')
        .clearValue('@nameInput')
        .setValue('@nameInput', name)
        .clearValue('@phoneInput')
        .setValue('@phoneInput', phoneNumber)
        .clearValue('@titleInput')
        .setValue('@titleInput', title)
        .click('@saveButton')
        // .getText('@errorCard', function (result) {
        //     console.log(result.value)
        //     })
        .click('@employee3')
        .click('@employee2')
        .getText('@employeeName', function (result) {
            console.log(result.value)
            })
        .getValue('@phoneInput', function (result) {
            console.log(result.value)
            })
        .getValue('@titleInput', function (result) {
            console.log(result.value)
            })


}