const express = require("express");
require("./config");
const JobApplication = require("./content");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.get('/', (request, response) => {
  response.json(
    {
      "message": "Basic API",
      "routes": [
        {
          "route": "/create",
          "methods": [
            "POST"
          ]
        },
        {
          "route": "/getall",
          "methods": [
            "GET"
           
          ]
        },
        {
          "route": "/getinterview",
          "methods": [
            "GET"
           
          ]
        },
        {
          "route": "/getapplied",
          "methods": [
            "GET"
           
          ]
        },
        {
          "route": "/getoffers",
          "methods": [
            "GET"
           
          ]
        },
        {
          "route": "/getwishlist",
          "methods": [
            "GET"
           
          ]
        }
      ]
    }
  )
})

app.post("/create", async (req, res) => {
  let jobapplication = new JobApplication(req.body);
  let result = await jobapplication.save();
  result = await result.toObject();
  res.send(result);
});
app.get("/getall", async (req, res) => {
  let jobapplication = await JobApplication.find();
  if (jobapplication.length > 0) res.send(jobapplication);
  else res.send({ result: "error" });
});
app.get("/getapplied", async (req, res) => {
    let jobapplication = await JobApplication.find({status: "Applied"});
    if (jobapplication.length > 0) res.send(jobapplication);
    else res.send({ result: "error" });
});
app.get("/getinterview", async (req, res) => {
    let jobapplication = await JobApplication.find({status: "Interview"});
    if (jobapplication.length > 0) res.send(jobapplication);
    else res.send({ result: "error" });
});
app.get("/getoffers", async (req, res) => {
    let jobapplication = await JobApplication.find({status: "Offers"});
    if (jobapplication.length > 0) res.send(jobapplication);
    else res.send({ result: "error" });
});
app.get("/getwishlist", async (req, res) => {
    let jobapplication = await JobApplication.find({status: "Wishlist"});
    if (jobapplication.length > 0) res.send(jobapplication);
    else res.send({ result: "error" });
});

app.listen(5000);
module.exports = app;