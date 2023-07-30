const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@food-app.gjb98.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
async function run(req, res) {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    const productsCollection = client.db("pc-builder").collection("products");

    if (req.method === "GET") {
      // Assuming req.query.prodID is the product ID you want to filter by
      const productID = req.query.prodID;

      // Construct the query to filter by _id using ObjectId
      const query = { _id: new ObjectId(productID) };

      const products = await productsCollection.find(query).toArray();

      res.send({ message: "success", status: 200, data: products });
    }
  } finally {
    // Make sure to close the connection after the operation is done
    // await client.close();
  }
}

export default run;
