var employeeManagerPage = {}

var validChanges1 = require('../TestAssets/ValidChanges1')
var validChanges2 = require('../TestAssets/ValidChanges2')
var invalidChanges = require('../TestAssets/InvalidChanges')

module.exports = {
    beforeEach: browser => {
        employeeManagerPage = browser.page.EmployeeManagerPage()
        employeeManagerPage.navigate()
        console.log()
    },

    after: browser => {
        browser.end()
    },

    'Employee 1 Changes': browser => {
        validChanges1(employeeManagerPage, 'Andrew', '1231231234', 'Mentor')

    },

    'Invalid Test': browser => {
        invalidChanges(employeeManagerPage, 'Andrew Smith is the best mentor i swear to Batman', '12345678901234567890')

    },
    'NEW test': browser => {


},
}











// .getText('@fastestLeviathan', function (result) {
//     console.log(result.value)
// })