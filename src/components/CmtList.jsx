import React from 'react'

export default function CmtList(item) {
	return <div>
		<h1>评论人:{item.user}</h1>
		<h2>评论内容:{item.contents}</h2>
		</div> 
}
