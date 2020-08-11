const express = require('express');
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/web-app'));

app.get('/', (req, res) => res.render('index.html'));

const port = 7508;

app.listen(port, () => console.log(`App running on ${port}`));
