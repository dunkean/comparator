/* @flow */

module.exports = {
  host: process.env.NODE_HOST || 'localhost', // Define your host from 'package.json'
  port: process.env.PORT,
  app: {
    htmlAttributes: { lang: 'en' },
    title: 'Kitty Doggy Food',
    titleTemplate: 'Kitty Doggy - %s',
    meta: [
      {
        name: 'A comparator site for kitty doggy food',
        content: "The best site for your best friend's food."
      }
    ]
  }
};
