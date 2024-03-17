// webpack.config.js

const path = require('path');

module.exports = {
    entry: './server.js',
    output: {
      path: path.join(__dirname, 'dist'),
      filename: 'final.js',
    },
    target: 'node',
    stats :{
      errorDetails:true
    }
};
