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

    }

}











// .getText('@fastestLeviathan', function (result) {
//     console.log(result.value)
// })