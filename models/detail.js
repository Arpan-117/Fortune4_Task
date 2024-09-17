import mongoose from "mongoose";
const {Schema, model} = mongoose;

const detailSchema = new Schema({
    spec: {type: String,
        required: true,
    },
    unit: {
        type: String,
        required: true,
    }
});

const Detail = model('Detail', detailSchema);

export default User;