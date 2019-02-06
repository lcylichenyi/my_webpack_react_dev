//默认打包的入口是.src/index.js 所以名字不要错


//接收的成员名称，必须这么写!!
import React from 'react'
import ReactDOM from 'react-dom'

import Comment from '@/components/Comment'

// 导入全局样式表 bootstrap
import 'bootstrap/dist/css/bootstrap.css'



ReactDOM.render(  <Comment></Comment>,document.getElementById('app'))



