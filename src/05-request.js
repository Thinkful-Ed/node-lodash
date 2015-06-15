const _ = require('lodash');

const request = function request(method, endpoint, data, params, headers){
  (request.send || _.noop)(method, endpoint, data, params, headers)
}

function getDefaultHeaders(headers){
  return _.defaults({}, headers || {}, {
    Authorization: Math.random()
  })
}

function getDefaultParams(params){
  return _.defaults({}, params || {}, {
    bust: Date.now()
  })
}

const requestAdapter = function requestAdapter(request, method, paramsCb, headerCb){
  paramsCb = paramsCb || _.identity;
  headerCb = headerCb || _.identity;
  return function(endpoint, data, params, headers){
    return _.partial(request, method)(
      endpoint, data, paramsCb(params), headerCb(headers)
    )
  }
}

const makePublicRequester = _.bind(
  requestAdapter, null, request, _, getDefaultParams
)
const makePrivateRequester = _.bind(
  makePublicRequester, null, _, getDefaultHeaders
)

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