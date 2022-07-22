const mongoose = require('mongoose');

class Database {
  constructor() {
    this.connect();
  }

   async connect() {
    try {
      const url = process.env.MONGO_URL;

      await mongoose.connect(url);
      console.log('📦 Connected to database!');
    } catch (error) {
      console.error(error.messge);
    }

  }
}

module.exports = new Database().connect();