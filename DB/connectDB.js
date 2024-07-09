import mongoose from 'mongoose';

// connecting to database
const connectDB = async () => {
    const connectionUrl = "mongodb+srv://lajvantikawale:215ujShSTLhBRzgj@cluster0.9fxzk0p.mongodb.net/"
    mongoose.connect(connectionUrl, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log(`Database connected successfully`))
        .catch((err) => console.log("Getting Error from DB connection" + err.message))
    mongoose.set('strictQuery', false);
};

export default connectDB;
