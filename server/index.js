import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import root from "./resolvers";

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  })
);

app.get("/", (req, res) => res.send("App is running with Graphql"));

const PORT = 8080;
app.listen(PORT, () => console.log(`APP is up and running on port ${PORT}`));
