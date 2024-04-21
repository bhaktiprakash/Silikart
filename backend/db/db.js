const mongoose = require('mongoose')
async function dbConnect(){
    DBURL="mongodb+srv://21bcsd21:21bcsd21@cluster0.vnejuvk.mongodb.net"
    DBNAME="silikart"
    try {
        await mongoose.connect(DBURL+"/"+DBNAME)
        console.log("Database Connected");
    } catch (error) {
        console.log("Connection Error "+error );
    }
}

module.exports = dbConnect