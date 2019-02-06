import React from 'react'

export default class CmtListUpdateEvent extends React.Component {
	constructor(){
	super()
	this.state = {}
	}

	render(){
	return <div>
	<input type="button" value="修改" className='btn btn-primary' onClick={this.DeleteEvent} />
	<input type="button" value="删除" className='btn btn-danger' onClick={this.UpdateEvent} />
	</div>
	}

	DeleteEvent(){
		console.log('ddd')
	}

	UpdateEvent(){
		console.log('uuu')
	}
}