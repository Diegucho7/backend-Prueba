require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.listen(3000);



app.use('/api/users', require('./routes/usuarios'))


console.log("Hello World");