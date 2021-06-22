npm install 
Allure reports test cafe 

first install allure "npm install testcafe-reporter-allure"

Run the tests "testcafe chrome 'path/to/test/file.js' --reporter allure"

Run below command to view allure report.

"allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report"


Video recoring commnad
"npm install --save @ffmpeg-installer/ffmpeg"

command is "testcafe firefox ./tests --video artifacts/videos"
