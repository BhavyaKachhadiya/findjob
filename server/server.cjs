const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express()
app.use(express.json());
const port = 3000
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/jobs",{ useNewUrlParser: true,useUnifiedTopology: true});
mongoose.connection.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
});


const jobsSchema = require("./models/jobsSchema");



app.get("/api/jobs", async function(req, res) {
    try {
      const products = await jobsSchema.find();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  app.post("/api/addjobs", async function(req, res) {
    try {
        // Assuming req.body contains the job data
      const newJob = new jobsSchema(req.body);
  
      // Save the job to the database
      await newJob.save();
  
      res.status(201).json({ message: 'Job added successfully for sever' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
