const mongoose = require("mongoose");
require('dotenv').config();


const dbConnect = () => {
    if(mongoose.connection.readyState >= 1) {
        return;
    }
    mongoose.connect(process.env.DB_LOCAL_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    }).then(res => {
        console.log('DB CONNECTED');
    }).catch(err => {throw new Error(err)})
}

export default dbConnect;