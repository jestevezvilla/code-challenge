export const ARTICLES_QUERY = `{
  articles{
    author
    excerpt
    id
    title
  }
}`;

export const ARTICLE_QUERY = id => `{
  article(id:"${id}") {
    author
    excerpt
    content
    published
    tags
    title
  }
}`;

export const DELETE_ARTICLE_QUERY = id => `mutation {
  deleteArticle(id:"${id}") {
    id
  }
}`;

export const UPDATE_ARTICLE_QUERY = id => `mutation {
  updateArticle(id:"${id}") {
    id
  }
}`;
