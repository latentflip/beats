var getConfig = require('hjs-webpack')


module.exports = getConfig({
  // entry point for the app
  in: 'src/app.js',

  // Name or full path of output directory
  // commonly named `www` or `public`. This
  // is where your fully static site should
  // end up for simple deployment.
  out: 'public',

  port: 5001,

  html: function (data) {
    // here we return an object where each key is a file to be generated
    return {
      '200.html': data.defaultTemplate()
    };
  }
})
