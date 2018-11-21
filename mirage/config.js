export default function() {
  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  this.urlPrefix = 'http://localhost:3080';
  this.namespace = 'api/';
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    http://www.ember-cli-mirage.com/docs/v0.2.x/shorthands/
  */
  this.get('/articles', ({articles}, request) => {
    let slug = request.queryParams['filter[slug]'];
    if (slug) {
      let query = articles.where({slug});
      if (query.models.length) {
        return query;
      }
    }
    return articles.all();
  });

  this.get('/articles/:id');
}
