Navigate to building-with-ant/

run: java -jar tools/JsTestDriver-1.3.4.b.jar --port 4224

Visit localhost:4224/capture to capture the browser you want to run tests on

To run the build process run: ant build

JUnit formatted reports are sent to ./test-output
Code coverage reports are sent to ./test-output

To convert the code coverage report do a more readable xml format, run the following:
python tools/lcov-to-cobertura-xml/lcov-to-cobertura-xml.py test-output/jsTestDriver.conf-coverage.dat -e 'spec|lib'

(thanks to https://github.com/eriwen/lcov-to-cobertura-xml)

Resources:
http://eriwen.com/tools/perfect-front-end-build/
http://eriwen.com/tools/continuous-integration-for-javascript/