const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

app.use(bodyParser.json());

app.post('/orders', (req, res) => {
  console.log(req.body);

  fs.writeFile('orders.json', JSON.stringify(req.body), (err) => {
      if (err) {
          console.error(err);
          res.status(500).send('Error writing orders file');
      } else {
          res.send('Order received and saved successfully');
      }
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});