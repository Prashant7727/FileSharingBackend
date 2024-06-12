import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const DBConnection = async () => {
    const USERNAME = process.env.DB_USERNAME;
    const PASSWORD = process.env.DB_PASSWORD;

    const MONGO_URI = `mongodb+srv://${USERNAME}:${PASSWORD}@cluster0.iewc4ll.mongodb.net/`;
    try {
        await mongoose.connect(MONGO_URI);
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}

// mongodb+srv://prashantsisodia08:<password>@cluster0.iewc4ll.mongodb.net/


export default DBConnection;