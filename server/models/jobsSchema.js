const { Schema, model } = require("mongoose");


const jobsSchema = new Schema({
  logo:String,
  date: { type: Date, default: Date.now },
  companyName: String,
  post: String,
  tags: [String], 
  salary: Number,
  location: String,
  role: String,
  industry: String,
  department: String,
  ug: String,
  pg: String,
});

const jobs = model("jobs", jobsSchema);

module.exports = jobs;
