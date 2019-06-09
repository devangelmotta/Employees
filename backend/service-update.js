const { saveManyUsers } = require('./service-handle-db-local');

function callUpdateDatabase() {
  console.log("Calling update")
    setInterval(function(){ saveManyUsers() }, 10000);
  }


 callUpdateDatabase()

module.exports= callUpdateDatabase;