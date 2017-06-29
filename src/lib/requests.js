const fetch = require('isomorphic-fetch');

module.exports = function get(url) {
  return fetch(url)
      .then(r => r.ok
        ? Promise.resolve(r)
        : Promise.reject(new Error(`${r.status} error.`))
      )
      .then(r => r.text())
      .then(JSON.parse)
      .catch(e => {
        console.log('ERROR:', e.message);
        return Promise.reject(e);
      })
    ;
}
