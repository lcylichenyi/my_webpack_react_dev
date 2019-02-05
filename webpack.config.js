const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
	template: path.join(__dirname,'./src/index.html'), //源文件
	filename: 'index.html'
})

//向外暴露一个打包的配置对象
module.exports = {
	//如果想压缩的话用production，开发的时候便于阅读就用development
	mode: 'development',
	//webpack 4.x,默认的打包入口路径是src->index.js
	plugins: [
	htmlPlugin 
	],
	module: {
		rules: [
			{ test: /\.js|jsx/, use: 'babel-loader', exclude: /node_modules/ }
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],  //表示这几个文件的后缀名可以省略不写
		alias: {
			'@': path.join(__dirname, './src') 
		}
	}
}