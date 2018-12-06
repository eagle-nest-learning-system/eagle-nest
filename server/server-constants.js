const server = require('express')(),
  next = require('next'),
  port = parseInt(process.env.PORT, 10) || 3000,
  dev = process.env.NODE_ENV !== 'production',
  app = next({ dev }),
  handle = app.getRequestHandler();

module.exports = {
  server,
  app,
  dev,
  port,
  handle,
};
