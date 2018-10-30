const routes = require('next-routes')();

routes
  .add('/tags/locate', '/tags/locate')
  .add('/tags/new', '/tags/new')
  .add('/tags/:address', '/tags/show');

module.exports = routes;
