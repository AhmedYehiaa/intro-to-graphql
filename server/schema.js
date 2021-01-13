import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Post {
    id: Int
    title: String
    description: String
    comments: [Comment]
  }

  type Comment {
    text: String,
    user: String
  }

  type Query {
    hello: Int
    post(id: Int): Post
    posts: [Post]
  }

  type Mutation {
    createPost(title: String, description: String): Post
  }
`);

export default schema;
