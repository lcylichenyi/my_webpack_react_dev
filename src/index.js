//默认打包的入口是.src/index.js 所以名字不要错

console.log('woaaaca')


//接收的成员名称，必须这么写!!
import React from 'react'
import ReactDOM from 'react-dom'



// const myh1 = React.createElement('h1',{ id: 'myh1'},'H1111111111')

// const mydiv = React.createElement('div',null,'div',myh1)

const mydiv = <div id="mydiv" title="div aaa">divdivdiv</div>

ReactDOM.render(mydiv,document.getElementById('app'))