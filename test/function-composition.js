const
  _ = require("lodash")
, chai = require('chai')
, sinon = require('sinon')
, expect = chai.expect
chai.use(require('sinon-chai'));
chai.config.truncateThreshold = 0;

// Source Files
const requests = require('../src/05-request')

describe('Function Composition', function(){
  before(function(){
    requests.request.send = console.log;
  });

  beforeEach(function(){
    sinon.stub(requests.request, 'send')
  });

  afterEach(function(){
    requests.request.send.restore();
  });

  describe('Request Adapter',function(){
    it('should make requester functions',function(){
      const testRequester = requests.requestAdapter(requests.request, 'GET');
      testRequester('test-endpoint', {})
      expect(requests.request.send).to.have.been.calledWith(
        'GET', 'test-endpoint', {}, void 0, void 0
      );
    });

    it('should make requesters with ',function(){
      const defaultTest = function(options){
        return _.assign(options || {}, {
          test: 'value'
        })
      }
      const testRequester = requests.requestAdapter(
        requests.request.send, 'GET', defaultTest, defaultTest
      );
      testRequester('test-endpoint', { data: 0 }, { first: 1 }, { second: 2 })
      expect(requests.request.send).to.have.been.calledWith(
        'GET', 'test-endpoint', { data: 0 },
        { first: 1, test: 'value' },
        { second: 2, test: 'value' }
      );
    });
  });

  describe('Make Public Requester',function(){
    beforeEach(function(){
      sinon.stub(Date, 'now').returns(1234)
    });

    afterEach(function(){
      Date.now.restore();
    });

    it('should make requester functions with a default bust param',function(){
      const publicRequester = requests.makePublicRequester('GET');
      publicRequester('public-endpoint')
      expect(requests.request.send).to.have.been.calledWith(
        'GET', 'public-endpoint', void 0, { bust: 1234 }, void 0
      )
    });

    describe('Make Private Requester',function(){
      beforeEach(function(){
        sinon.stub(Math, 'random').returns(4321)
      });

      afterEach(function(){
        Math.random.restore();
      });

      it('should make requester functions with a default bust param',function(){
        const privateRequester = requests.makePrivateRequester('POST');
        privateRequester('public-endpoint')
        expect(requests.request.send).to.have.been.calledWith(
          'POST', 'public-endpoint', void 0, { bust: 1234 }, { Authorization: 4321 }
        )
      });
    });
  });

})