const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.send("ok");
});

var server = app.listen(3000, () => {
  console.log('server started');
});