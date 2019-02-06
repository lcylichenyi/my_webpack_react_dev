import React from 'react'
import CmtList from '@/components/CmtList'



export default class Comment extends React.Component {
	constructor() {
		super()
		this.state = { CommentList: [
			{ id: 1, user: '张1', contents: '哈哈，沙发1111'},
			{ id: 2, user: '张2', contents: '哈哈，沙发2222'},
			{ id: 3, user: '张3', contents: '哈哈，沙发3333'},
			{ id: 4, user: '张4', contents: '哈哈，沙发4444'},
			{ id: 5, user: '张5', contents: '哈哈，沙发5555'},
			{ id: 6, user: '张6', contents: '哈哈，沙发6666'}

			]}
	}
	render() {
		return <div>
		<h1 className='cmttitle italic'>这是评论列表组件</h1>
		{this.state.CommentList.map(item => <CmtList{...item} key={item.id}></CmtList>)}
		</div>
	}
}