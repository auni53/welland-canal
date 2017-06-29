module.exports = {
  'bridges': response => {
    const bridges = response.bridges.map(bridge => bridge.location);
    return 'Here are the bridges: ' + bridges.join(', ');
  },
  'bridgeStatus': response => {
    if (response.stale) return 'I don\'t have updated information for this bridge';

    const bridge = response.bridge;
    if (bridge.closures.length != 0) {
      return 'There is a closure';
    } else {
      return `The bridge ${bridge.location} is ${bridge.status.status}`;
    }
  },
}
