const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('./dist'));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});

app.get('/*', (req, res) => {
  res.sendFile(`${process.cwd()}/dist/index.html`);
});

app.get('/page-error404', (req, res) => {
  res.sendFile(`${process.cwd()}/dist/PageErrorTpl.*.html`);
});
