# Execute

![N|Solid](http://www.alex-arriaga.com/wp-content/uploads/2013/08/Console-128.png)

To download the angular and other resources
**run** (sudo if required):

```sh
$ npm install
$ bower install
```
To run gulp tasks and serve data:
- implement tasks and improve performance
```sh
$ gulp
```
- Then, copy the contents of the "dist" folder to the "public" folder in "json-server", then run  (inside the json-server folder):

```sh
$ json-server --watch db.json
```

- To run unit test (Karma and jasmine) run (inside the "test" folder):

```sh
$  karma start karma.conf.js
```

- To run e2e test (Protractor and webdriver-manager) run (inside the "test" folder):

```sh
$   protractor protractor.conf.js
```

- Setting up the Unit Test Environment
```sh
$ npm install jasmine-core --save-dev
$ npm install karma-cli -g
$ npm install karma-jasmine --save-dev
$ npm install phantomjs karma-phantomjs-launcher karma-chrome-launcher --save-dev
$ bower install angular-mocks -S
```


- Setting up the E2E Test Environment
```sh
$ npm install protractor -g
$ webdriver-manager update
$ gulp watch
```
