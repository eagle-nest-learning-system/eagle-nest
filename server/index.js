const serverConstants = require('./server-constants'),
  app = serverConstants.app,
  server = serverConstants.server,
  port = serverConstants.port,
  handle = serverConstants.handle;

app.prepare().then(() => {
  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;

    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
