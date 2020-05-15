let environment = "dev";

let serverURLs = {
    "dev": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "3001",
      
       "MONGO_DB": "mongodb://localhost:27017/Worklog"
    },
    "production": {
        "NODE_SERVER": "http://localhost",
        "NODE_SERVER_PORT": "3001",
      
       "MONGO_DB": "mongodb://localhost:27017/Worklog"
    }
}

let config = {
    "DB_URL": {
        "url": `${serverURLs[environment].MONGO_DB}`
    },
    "NODE_SERVER_PORT": {
        "port": `${serverURLs[environment].NODE_SERVER_PORT}`
    },
    "NODE_SERVER_URL": {
        "url": `${serverURLs[environment].NODE_SERVER}`
    }
};

module.exports = {
    config: config
};
