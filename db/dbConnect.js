// external imports
const mongoose = require("mongoose");
require('dotenv').config()
const DB_URL = 'mongodb://jaymokiri03:v21yhTwMMpGb3cR2@ac-rdn0e35-shard-00-00.ma0essx.mongodb.net:27017,ac-rdn0e35-shard-00-01.ma0essx.mongodb.net:27017,ac-rdn0e35-shard-00-02.ma0essx.mongodb.net:27017/toDoDB?ssl=true&replicaSet=atlas-nj3lts-shard-0&authSource=admin&retryWrites=true&w=majority'
async function dbConnect() {
    // use mongoose to connect this app to our database on mongoDB using the DB_URL (connection string)
    mongoose
        .connect(
            // process.env.DB_URL,
            DB_URL,
            {
                //   these are options to ensure that the connection is done properly
                useNewUrlParser: true,
                useUnifiedTopology: true,
                // useCreateIndex: true,
            }
        )
        .then(() => {
            console.log("Successfully connected to MongoDB Atlas!");
        })
        .catch((error) => {
            console.log("Unable to connect to MongoDB Atlas!");
            console.error(error);
        });
}

module.exports = dbConnect;