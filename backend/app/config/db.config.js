// backend/app/config/db.config.js
module.exports = {
  // Local use: localhost
  // Docker use: env variable MONGO_URL
  url: process.env.MONGO_URL || "mongodb://localhost:27017/dd_db"
};
