const mongoose = require("mongoose");
const express = require("express");
const { URL } = require('url');
const cors = require('cors');
require('dotenv').config();
const app = express()
app.use(express.json());
const port = 3000
app.use(cors());
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 5000
});
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
  
  app.get('/api/tags', async (req, res) => {
    try {
      const tags = await jobsSchema.distinct('tags');
      res.json(tags);
    } catch (error) {
      console.error('Error fetching tags:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  app.get('/api/companyName', async (req, res) => {
    try {
      const companyName = await jobsSchema.distinct('companyName');
      res.json(companyName);
    } catch (error) {
      console.error('Error fetching companyName:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  app.get('/api/jobs/filter', async (req, res) => {
    const { tags, companyName,post } = req.query;
  
    try {
      // Start with a base query
      let query = {};
  
      if (tags) {
        const selectedTags = tags.split(',');
        query.tags = { $in: selectedTags };
      }
  
      if (companyName) {
        const selectedCompanyName = companyName.split(',');
        query.companyName = { $in: selectedCompanyName };
      }
     
     
      
      // Use the Mongoose find method to filter jobs
      const filteredJobs = await jobsSchema.find(query);
  
      res.json(filteredJobs);
    } catch (error) {
      console.error('Error fetching filtered jobs:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
