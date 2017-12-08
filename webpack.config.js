var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var CleanWebpackPlugin = require('clean-webpack-plugin')

var extractPlugin = new ExtractTextPlugin({
	filename: './assets/css/app.css'
})

module.exports = {
	entry: './src/assets/js/app.js',
	output: {
		path: path.resolve(__dirname,'dist'),
		filename: './assets/js/app.js'
	},
	module:{
		rules:[
		{
			test:/\.js$/,
			exclude: /(node_modules|bower_components)/,
			use:[
			{
				loader: 'babel-loader',
				options: {
					presets: ['env']
				}
			}
			]
		},
		{
			test:/\.scss$/,
			use: extractPlugin.extract({
				fallback: 'style-loader',
				use: ['css-loader','sass-loader'],
				publicPath: '/dist'
			})

		},
		{
			test:/\.html$/,
			use: ['html-loader']
		},
		{
			test: /\.(eot|woff|woff2|ttf)$/,
			loaders: [
			'url-loader'
			]
		},
		{
			test:/\.(jpg|png|jpeg|gif|svg)$/,
			use: [
                    //'file-loader?name=[name].[ext]&outputPath=assets/img/&publicPath=assets/img/',
                    'file-loader?name=assets/images/[hash:14].[ext]',
                    'image-webpack-loader'
                    ]
                }
                ]
            },
            plugins: [
            extractPlugin,
            new HtmlWebpackPlugin({
            	title: 'GeeksMotion Template',
            	filename: 'index.html',
            	template: './src/index.html',
            	inject: false,
            }),
            new HtmlWebpackPlugin({
            	filename: 'page.html',
            	template: './src/page.html',
            	chuncks:[]
            }),
            new CleanWebpackPlugin(['dist'])
            ]


	//plugins:[
	//new webpack.optimize.UglifyJsPlugin({
		// ...
	//})
//	]
};