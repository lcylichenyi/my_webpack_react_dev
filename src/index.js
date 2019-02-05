//默认打包的入口是.src/index.js 所以名字不要错


//接收的成员名称，必须这么写!!
import React from 'react'
import ReactDOM from 'react-dom'


const user = {
	name: '小李',
	age: '20',
	sex: 'shuai'
}

const user2 = {
	name: '小颜',
	age: '20',
	sex: 'shuai'
}

import Test from './components/test'

class Movie extends React.Component {
	constructor() {
		super()
		this.state = { 'lcy': '好帅'}
	}
	render() {
		console.log(this )
		return <h1>movieeeee{this.state.lcy}eeeeeeeee{this.props.name}</h1>
	}
}

console.dir(Movie)

ReactDOM.render(  <div><Movie {...user}></Movie><Movie {...user2}></Movie></div>,document.getElementById('app'))