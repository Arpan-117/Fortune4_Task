import mongoose from "mongoose";

const conn = 'mongodb+srv://<Specific DB>.mongodb.net/';   //change place holder db and place in dot env

const connectDB = async () => {
    try {
      const con = await mongoose.connect(conn);
      console.log(
        `Conneted To Mongodb Databse ${con.connection.host}`
      );
    } catch (error) {
      console.log(`Errro in Mongodb ${error}`);
    }
  };

  export default connectDB;


