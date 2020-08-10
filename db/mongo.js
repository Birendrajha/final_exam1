const mongoose = require('mongoose')

mongoose.connect('mssandbox.2vs3j.mongodb.net:27017/sample_restaurants.restaurants', {
    user:'ms-trainee-batch1',
    pass: '1K4y8zZUMpp7Cjr4',
    dbName: 'sample_restaurants',
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    keepAlive: true,
})
.then(() => {
    console.log('Connected to Mongo!')
})
.catch((err) => {
    console.error('Error connecting to Mongo', err)
})
