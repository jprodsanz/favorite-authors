const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const app = express();
dotenv.config();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./config/mongoose.config')
require('./routes/author.routes')(app)


const  PORT = process.env.PORT || 5000;
app.listen(PORT,console.log
    (`Hi Pablo, your server's running on PORT ${PORT}!`));