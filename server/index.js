const express = require('express');

const app = express();

app.listen(8080, err => {
  if (err) throw err;

  // eslint-disable-next-line no-console
  console.log('Hello');
});
