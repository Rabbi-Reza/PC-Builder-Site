const { MongoClient, ServerApiVersion } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@food-app.gjb98.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  console.log(req.query.catID);
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const productsCollection = client.db("pc-builder").collection("products");

    if (req.method === "GET") {
      const products = await productsCollection
        .find({ cid: req.query.catID })
        .toArray();

      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
  }
}

export default run;
