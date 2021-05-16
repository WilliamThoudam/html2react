const authResolver = require('./auth');
const eventsResolver = require('./events');
const postsResolver = require('./posts');
const bookingResolver = require('./booking');

const rootResolver = {
  ...authResolver,
  ...eventsResolver,
  ...postsResolver,
  ...bookingResolver,
};

module.exports = rootResolver;
