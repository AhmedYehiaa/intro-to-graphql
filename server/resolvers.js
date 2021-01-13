import { posts } from "./constants";

let id = 4;
class Post {
  constructor(post) {
    Object.assign(this, post);
    this.id = id++;
    this.comments = this.comments || [];
  }

  async comments() {
    /// we can do DB query here!
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          {
            text: "text 1",
            user: "user 1",
          },
        ]);
      }, 2000);
    });
  }
}

// ----- controller | handler
const root = {
  hello: () => 10,
  post: ({ id }) => new Post(posts.find((post) => post.id === id)),
  posts: () => posts.map((post) => new Post(post)),
  createPost: ({ title, description }) => {
    const post = new Post({ title, description });
    posts.push(post);
    return post;
  },
};

export default root;
