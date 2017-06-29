var Alexa = require('alexa-sdk');
var fetch = require('lib/requests.js');
var interpreter = require('lib/interpreter.js');
var resolve = require('lib/resolve');

const BRIDGES = 'GetBridges';
const BRIDGE_STATUS = 'GetBridgeStatus';
const CLOSURES = 'GetClosures';
const STOP = 'AMAZON.StopIntent';
const DEFAULT = 'Unhandled';


const API_URL = 'https://canalstatus.com/api/v1/';

const queryHandlers = {
  [BRIDGES]: function() {
    fetch(API_URL + 'bridges')
      .then((response) => {
        const speech = interpreter.bridges(response);
        console.log(speech);
        this.emit(':tell', speech);
       });
  },
  [BRIDGE_STATUS]: function() {
    const bridgeLocation = this.event.request.intent.slots.location.value;
    const id = resolve(bridgeLocation);
    fetch(API_URL + 'bridges/' + id)
      .then((response) => {
        const speech = interpreter.bridgeStatus(response);
        console.log(speech);
        this.emit(':tell', speech);
       });
  },
  [DEFAULT]: function() {
    const response = 'I couldn\'t understand that';
    this.emit(':tell', response);
  },
}

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(queryHandlers);
  alexa.execute();
};
