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
			{ test: /\.js|jsx/, use: 'babel-loader', exclude: /node_modules/ },
			{ test: /\.css$/, use: ['style-loader', 'css-loader']}, //第三方的css文件都不模块化，都全局用，自己的样式文件都用less写
	        { test: /\.less$/, use: ['style-loader', 'css-loader?modules', 'less-loader'] }, // 处理 less 文件的 loader
	        { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?limit=7631&name=[hash:8]-[name].[ext]' }, // 处理 图片路径的 loader
	        // limit 给定的值，是图片的大小，单位是 byte， 如果我们引用的 图片，大于或等于给定的 limit值，则不会被转为base64格式的字符串， 如果 图片小于给定的 limit 值，则会被转为 base64的字符串
	        { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' } // 处理 字体文件的 loader 
		]
	},
	resolve: {
		extensions: ['.js', '.jsx', '.json'],  //表示这几个文件的后缀名可以省略不写
		alias: {
			'@': path.join(__dirname, './src') 
		}
	}
}