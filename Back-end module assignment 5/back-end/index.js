const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const {MONGODB_URL} = require('./config')

mongoose.connect(MONGODB_URL);

mongoose.connection.on('connected', () => {
    console.log("DB connected successfully");
})

mongoose.connection.on('error', () => {
    console.log("Some error occured while cooecting to DB");
})

require('./models/user_model');
require('./models/sales_model');

app.use(cors());
app.use(express.json());

app.use(require('./routes/user_route'));
app.use(require('./routes/sales_route'));

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}...`);
});