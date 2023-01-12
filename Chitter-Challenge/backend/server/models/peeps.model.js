import mongoose from "mongoose";

const newPeepSchema = new mongoose.Schema(
    {
        name: { type: String },
        username: { type: String },
        peepDateTime: { type: String },
        message: { type: String },
    },
    { collection: "Chitters" }
);

const Peep = mongoose.model('Peep', newPeepSchema);

export default Peep;

