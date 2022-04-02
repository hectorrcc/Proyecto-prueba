const config = {
    appConfig: {
        host: 'http://localhost',
        port: 5000  
    },
    dbconfig: {
        port: process.env.DB_PORT,
        host: process.env.DB_HOST,
        dbname: process.env.DB_NAME
    }
}

module.exports = config