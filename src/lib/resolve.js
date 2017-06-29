var Fuse = require('fuse.js');

const bridges = [
  'Lakeshore Rd. (St. Catharines)',
  'Carlton St. (St. Catharines)',
  'Queenston St. (St. Catharines)',
  'Glendale Ave. (St. Catharines)',
  'Highway 20 (Thorold)',
  'Main St. (Port Colborne)',
  'Mellanby Ave. (Port Colborne)',
  'Clarence St. (Port Colborne)'
];

module.exports = query => {
  const options = {
    shouldSort: true,
    threshold: 0.6,
    location: 0,
    distance: 100,
    maxPatternLength: 32,
    minMatchCharLength: 1,
    keys: [],
  };

  console.log(Fuse);
  console.log(typeof Fuse);
  const fuse = new Fuse(bridges, options);
  const result = fuse.search(query);
  return result[0] + 1;
};
