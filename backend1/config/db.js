const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://lakkadiabhigna:ooZyRMV7lZqDngnz@mlc.m3pno2x.mongodb.net/mlc-classifier?retryWrites=true&w=majority&appName=mlc', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
