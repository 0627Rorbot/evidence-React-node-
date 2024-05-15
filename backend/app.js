const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes');
const cors = require('cors')
const bodyParser = require('body-parser')

mongoose.connect(
    'mongodb://127.0.0.1:27017/my_database', 
    { 
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors(["*"]))

app.use('/api', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});