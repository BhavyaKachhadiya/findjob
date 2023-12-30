const mongoose = require("mongoose");
const express = require("express");
const cors = require('cors');
const app = express()
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
  

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
