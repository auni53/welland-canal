var handler = require('./src/index.js').handler;

var event = {
  'session': {
    'sessionId': 'SessionId.fb4b98d2-449c-43cf-b9a9-3d0dfd768c9d',
    'application': {
      'applicationId': 'amzn1.echo-sdk-ams.app.ef7d53b5-c8cd-4177-a707-8b65a85a0028'
    },
    'attributes': {},
    'user': {
      'userId': 'amzn1.ask.account.AFP3ZWPOS2BGJR7OWJZ3DHPKMOMNWY4AY66FUR7ILBWANIHQN73QHY7YRUQCC3EJGHNWHPJY6SMKQ3CGU44NLP3BYUM6II4Y4CWHW6RF3SUK7NJHIN3WZGI4YRLJJ3H6RENYOILA3TOUFWPXOOQPWVVYU5V7YTOEZ35Y65B47HPX3W5JHT7MHNISDP55CUZBCLL3QJPTGOL6YVQ'
    },
    'new': true
  },
  'request': {
    'type': 'IntentRequest',
    'locale': 'en-US',
    'intent': {
      'name': 'GetBridgeStatus',
      'slots': { 
        'location': {
          'name': 'location',
          'value': 'lakeshore',
        }
      }
    }
  },
  'version': '1.0'
};

var fakeLambdaContext = {
  succeed: function succeed(results) {
    console.log(results);
    process.exit(0);
  },
  fail: function fail(results) {
    console.log(results);
    process.exit(1);
  },
};

handler(event, fakeLambdaContext);
