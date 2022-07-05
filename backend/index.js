const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const userRoute = require('./routes/user.routes');
const houseRoute = require('./routes/house.routes');
const authRoute = require('./routes/auth.routes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

app.use('/api/v1/users', userRoute);
app.use('/api/v1/houses', houseRoute);
app.use('/api/v1/', authRoute);

const PORT = 3000;
const MONGO_URI = 'mongodb+srv://8140386:8140386@paw-21-22-recurso.qrhwy.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
    .then( () => {
        console.log('Database connected!');
        app.listen(PORT, () => {
            console.log(`Server running on port: http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.log(err));
