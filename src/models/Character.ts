import mongoose from "mongoose";

const characterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  initiative: { type: Number, required: false },
});

const Character = mongoose.model("Character", characterSchema);
export default Character;
