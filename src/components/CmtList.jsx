import React from 'react'
import cssobj from '@/css/Cmtlist.less'
import CmtListEvent from '@/components/CmtListEvent'


export default function CmtList(item) {
	return <div className={cssobj.cmtbox}>
		<h1 className={cssobj.content +' '+cssobj.cl}>评论人:{item.user}</h1>
		<h2 className={[cssobj.content,cssobj.cl].join(' ')}>评论内容:{item.contents}</h2>
		<CmtListEvent></CmtListEvent>
		</div> 



}
