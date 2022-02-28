import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  name: String,
  phone: Number,
  landline: Number,
  dbStatus: Boolean,
  registerDate: {type: Date, default: Date.now}
});

const contact = mongoose.model("contacts", contactSchema);
export default contact;
