const path = require('path');

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, './Develop/public/notes.html'));
  });

  app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });

  // If no matching route is found default to index
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, './Develop/public/index.html'));
  });
};