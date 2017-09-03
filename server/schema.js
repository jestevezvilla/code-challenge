import {
  GraphQLBoolean,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLSchema,
} from 'graphql';
import db from './db';

const articleType = new GraphQLObjectType({
  name: 'Article',
  description: 'This represents a Article',
  fields: () => ({
    author: {
      type: GraphQLString,
    },
    content: {
      type: GraphQLString,
    },
    excerpt: {
      type: GraphQLString,
    },
    id: {
      type: GraphQLString,
    },
    published: {
      type: GraphQLBoolean,
    },
    tags: {
      type: new GraphQLList(GraphQLString),
    },
    title: {
      type: GraphQLString,
    },
  }),
});

const Query = new GraphQLObjectType({
  name: 'Query',
  description: 'This is a root query',
  fields: () => ({
    articles: {
      type: new GraphQLList(articleType),
      resolve() {
        return db.Article.find();
      },
    },
    article: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve: (root, { id }) =>
        db.Article.findById(id),
    },
  }),
});

// mutation
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    createArticle: {
      type: articleType,
      args: {
        author: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(root, { author }) {
        const article = new db.Article();
        article.author = author;
        return article.save();
      },
    },
    deleteArticle: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
      },
      resolve(root, { id }) {
        return db.Article.findOneAndRemove(id);
      },
    },
    updateArticle: {
      type: articleType,
      args: {
        id: {
          type: new GraphQLNonNull(GraphQLString),
        },
        author: {
          type: new GraphQLNonNull(GraphQLString),
        },
        published: {
          type: new GraphQLNonNull(GraphQLBoolean),
        },
      },
      resolve(obj, { id, author, published }) {
        db.Article.update(
          { _id: id },
          { $set:
            { author, published },
          });
        return db.Article.findById(id);
      },
    },
  },
});

const Schema = new GraphQLSchema({
  query: Query,
  mutation: Mutation,
});

export default Schema;
