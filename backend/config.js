const config = {
    appConfig: {
        host: process.env.APP_HOST,
        port: process.env.APP_PORT  
    },
    dbconfig: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbname: process.env.DB_NAME
    }
}

module.exports = config