var HTMLWebpackPlugin = require('html-webpack-plugin');      
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({ 
   template: __dirname + '/commands.html',      
   filename: 'commands.html',      
   inject: 'body'      
}); 

module.exports = { 
  entry: __dirname + '/commands.js',    
  output: { 
    filename: 'webpackbundle.js'    
  }, 
  module: { 
    rules: [ 
      { 
        test: /.js?$/, 
        exclude: /node_modules/, 
        use: { 
          loader: 'babel-loader'   
        } 
      } 
    ] 
  }, 
  plugins: [HTMLWebpackPluginConfig] 
}; 