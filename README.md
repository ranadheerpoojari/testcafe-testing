Allure reports test cafe 

first install allure "npm install testcafe-reporter-allure"

Run the tests "testcafe chrome 'path/to/test/file.js' --reporter allure"

Run below command to view allure report.

"allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report"