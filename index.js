const express = require('express');


const app = express();


app.get('/', (req, res) => {
  res.sendFile('/index.html', {root: __dirname });
});
app.get('/a.mp3', (req, res) => {
  res.sendFile('/a.mp3', {root: __dirname });
});
app.get('/aidcraft.tk/ai.js', (req, res) => {
  res.sendFile('/ai.js', {root: __dirname });
});
app.get('/aidcraft.tk/mySketch.js', (req, res) => {
  res.sendFile('/mySketch.js', {root: __dirname });
});
app.get('/aidcraft.tk/snake.js', (req, res) => {
  res.sendFile('/snake.js', {root: __dirname });
});
app.get('/aidcraft.tk/riddle', (req, res) => {
  res.sendFile('/riddle.html', {root: __dirname });
});
app.get("/json", (req, res) => {
  res.sendFile('/version.json', {root: __dirname })
});
app.get("/*", (req, res) => {
  res.status(404).send()
});
var server = app.listen(3000, () => {
  console.log('server started');
});