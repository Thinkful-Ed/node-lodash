const _ = require('lodash');

// Do not change
// this is the request function used for testing
// makePublicRequester and makePrivateRequester should use this
const request = function request(method, endpoint, data, params, headers){
  (request.send || _.noop)(method, endpoint, data, params, headers)
}

// Do not change
// example paramsCb
// makePublicRequester should use this
function getDefaultParams(params){
  return _.defaults({}, params || {}, { bust: Date.now() })
}

// Do not change
// example headersCb
// makePublicRequester and makePrivateRequester should use this
function getDefaultHeaders(headers){
  return _.defaults({}, headers || {}, { Authorization: Math.random() })
}

/**
Level 5:

function requestAdapter(request, method, ?paramsCb, ?headerCb)
    -> function wrappedRequest(endpoint, data, parameters, headers)

 * Return a wrapped request function pre-bound with a method string and applying mutation functions to the parameters and headers of the request.
 *
 * @param  {Function} request - The request function to wrap
 * @param  {String} method - The request type
 * @param  {Function} paramsCb - A function that modifies the request params
 * @param  {Function} headerCb - A function that modifies the request headers
 *
 * @return {Function} - The wrapped request function

E.g.
```
function paramsCb(params){
  return _.defaults(params, { bust: Date.now })
}

var myRequest = requestAdapter(request, 'GET', paramsCb)

// using this now like so:
myRequest('http://my-endpoint', null, { foo: 'bar' })
// will make a request like so: "http://my-endpoint?bust=1232234&foo=bar"
```
 */
const requestAdapter = function(){
  return _.noop
};

/*
- intermediate

The second function is a new adapter used for making public request functions that have a `bust` parameter pre-filled for cache busting.

The request function and paramsCb has been supplied for you (getDefaultParams).

NB. Try to reuse the original requestAdapter along with `wrap`, `partial` or `bind`.
 */
const makePublicRequester = function(){
  return _.noop
};

/*
The final function is again an adapter used for private requests, this time composing with the cache busted public request adapter as well as adding a default header of `Authorization` with a random key.

The request function and headersCb has been supplied for you (getDefaultHeaders).

NB. Try to reuse the original requestAdapter along with `wrap`, `partial` or `bind`.
 */
const makePrivateRequester = function(){
  return _.noop
};

module.exports = {
  request: request,
  // adapter
  requestAdapter: requestAdapter,
  // builders
  makePublicRequester: makePublicRequester,
  makePrivateRequester: makePrivateRequester,
  // prebound
  throttledPublicGet: _.throttle(makePublicRequester('GET')),
  privatePost: makePrivateRequester('POST'),
};