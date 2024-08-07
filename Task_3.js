const express = require('express')
const bodyParser = require('body-parser')
const app = express()
// const MongoClient = require('mongodb')
// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://User07:user07@cluster0.5jyf51h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000);

app.get('/', (req,res) => {
  res.sendFile('C:/Users/LENOVO/OneDrive/Desktop/DJSANGHVI/COMPETITIONS/UNICODE/NODE/Task_3'+'/index.html');
})

  // MongoClient.connect(uri, { useUnifiedTopology: true }, (err, client) => {
  //   if (err) return console.log(err)
  //   console.log("Connected to database");
  //   const db = client.db("Hogwartsdb");
  //   const charcollection = db.collection("Characters");
  //   app.post('/addchar', (req,res) => {
  //     charcollection
  //     .insertOne(req.body)
  //     .then(result=>{
  //       console.log(result)
  //     })
  //     .catch(error=>console.error(error)
  //     )
  //   })
  // })

  const { MongoClient, ServerApiVersion } = require('mongodb');
  const uri = "mongodb+srv://User07:user07@cluster0.5jyf51h.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
  // Create a MongoClient with a MongoClientOptions object to set the Stable API version
  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      const db = client.db("Hogwartsdb");
      const charcollection = db.collection("Characters");
      app.post('/addchar', (req,res) => {
          charcollection
          .insertOne(req.body)
          .then(result=>{
            console.log(result)
          })
          .catch(error=>console.error(error)
          )
        });
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir);