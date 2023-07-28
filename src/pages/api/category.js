const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://university-admin:PLNYV9AVOM3mv8qq@food-app.gjb98.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const categoriesCollection = client.db("pc-builder").collection("categories");

    if (req.method === "GET") {
      const categories = await categoriesCollection.find({}).toArray();

      res.send({ message: "success", status: 200, data: categories });
    }

    // if (req.method === "POST") {
    //   const news = req.body;

    //   const result = await newsCollection.insertOne(news);

    //   res.json(result);
    // }
  } finally {
  }
}

export default run;
