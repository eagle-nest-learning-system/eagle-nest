const express = require('express'),
app = express();

app.listen(8080, err => {
  if (err) throw err;
  console.log('Hello');
});