const express = require('express');

const app = express();

//settings
app.get('/', (req, res) => {
    res.sendFile(__dirname + '\\index.html');
});

//initialize server
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});



