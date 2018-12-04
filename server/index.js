const express = require('express'),
  next = require('next'),
  port = parseInt(process.env.PORT, 10) || 3000,
  dev = process.env.NODE_ENV !== 'production',
  app = next({ dev }),
  handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;

    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
