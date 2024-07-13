const mongoose = require('mongoose')

const MONGO_URI = 'mongodb://localhost:27017/ecommerce';

mongoose.connect(
    MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true }).
    then(() => console.log('MongoDB connected')).
    catch(err => console.log('MongoDB error', err))