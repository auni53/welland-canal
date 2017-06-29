const Transit = require('./Transit.js');
const inputs = require('./inputs');
const template = inputs.template;
const requests = inputs.requests;

const wrap = i => ({
  ...template,
  request: requests[i],
});

describe('Transit Skill', function() {

  it('welcomes', function() {
    return Transit(wrap(0)).should.eventually
      .have.deep.property('response.outputSpeech.text',
        'Welcome to ASK transit');
  });

  it('gets intersection times', function() {
    return Transit(wrap(1)).should.eventually
      .have.deep.property('response.outputSpeech.text')
      ;
  });

  it('gets stop times', function() {
    return Transit(wrap(2)).should.eventually
      .have.deep.property('response.outputSpeech.text')
      ;
  });

});
