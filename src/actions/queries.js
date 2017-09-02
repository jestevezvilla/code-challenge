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