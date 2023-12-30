const { Schema, model } = require("mongoose");

const jobsSchema = new Schema({
  
});

const jobs = model("jobs", jobsSchema);

module.exports = jobs;
