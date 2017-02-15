# gtris

gtris는 가비아 프론트엔드개발팀에서 제작한 CSS 기반의 UI Framework 입니다.<br />
웹어플리케이션을 제작할 때 반복적으로 발생하는 로직을 콤포넌트화 하여 결과물의 품질과 개발 생산성을 높입니다.<br />
CSS 전문가와 비전문가 누구나 몇가지 규칙을 숙지하면 자유롭게 웹표준 기반 마크업을 개발할 수 있으며
이미지 기반이 아닌 CSS 기반의 스타일링을 가지므로 개발자 입장에서 보다 손쉬운 유지관리가 가능합니다.

Modernizr has an optional (*not included*) conditional resource loader called `Modernizr.load()`, based on [Yepnope.js](http://yepnopejs.com). You can get a build that includes `Modernizr.load()`, as well as choosing which feature tests to include on the [Download page](http://www.modernizr.com/download/).

## New Asynchronous Event Listeners

Often times people want to know when an asynchronous test is done so they can allow their application to react to it.
In the past, you've had to rely on watching properties or `<html>` classes. Only events on **asynchronous** tests are
supported. Synchronous tests should be handled synchronously for speed and consistency reasons.

The new api looks like this:

```javascript
// Listen to a test, give it a callback
Modernizr.on('testname', function( result ) {
  if (result) {
    console.log('The test passed!');
  }
  else {
    console.log('The test failed!');
  }
});
```

We guarantee that we'll only invoke your function once (per time that you call `on`). We are currently not exposing
a method for exposing the `trigger` functionality. Instead, if you'd like to have control over async tests, use the
`src/addTest` feature, and any test that you set will automatically expose and trigger the `on` functionality.

## Test suite

Run the [test suite](http://modernizr.github.com/Modernizr/test/)


## Building Modernizr v3

### To generate everything in 'config-all.json':

```js
grunt build
//outputs to ./dist/modernizr-build.js
```

### To run tests (in phantom):

```js
grunt qunit
```

### To run tests (in browser):

```shell
grunt build
serve .
visit <url>/tests
```

### To see simple build in browser:

serve the root dir, `<url>/test/modular.html`


### To see the build tool:


* checkout the modernizr.com code
* install all your gems and bundles and jekyll and shit
* `jekyll`
* `serve ./_sites`
* visit <url>/download
* It should be just a big list of things you can build with no frills.


### API Reference

Modernizr can be used programmatically via npm:

```javascript
var modernizr = require("modernizr");
```

#### Building

A `build` method is exposed for generating custom Modernizr builds. Example:

```javascript
var modernizr = require("modernizr");

var result = modernizr.build({}, function (result) {
  console.log(result.code); // full source
  console.log(result.min); // minfied output
});
```

The first parameter takes a JSON object of options and feature-detects to include. See [`lib/config-all.json`](lib/config-all.json) for all available options.

The second parameter is a function invoked on task completion.

## License

MIT license
