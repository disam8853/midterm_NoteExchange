import React from 'react';
import { NavLink } from 'react-router-dom'
import './content.css'

class Content extends React.Component {
  render() {
  	let data = this.props.posts_data;
  	const note_items = 
  		data.filter(e => e.subj === this.props.subj)
  			.map((value, index) => 
				<NavLink to={`/note/${value.subj}/${value._id}`} className="list-group-item list-group-item-action">
					<h5 className='font-weight-bold text-break'>
						{(index+1) + "." + value.post_title}
					</h5>
				</NavLink>
			);

    return (
      <div id='content'>
      	<div className="list-group list-group-horizontal ">
				  <div
				  	className={"list-group-item list-group-item-action cate " + (this.props.subj === 0 ? "active":"")}
				  	onClick={()=>this.props.changeSubj(0)}>
				  	Chinese
				  </div>
				  <div
				  	className={"list-group-item list-group-item-action cate " + (this.props.subj === 1 ? "active":"")}
				  	onClick={()=>this.props.changeSubj(1)}>
				  	Math
				  </div>
				  <div
				  	className={"list-group-item list-group-item-action cate " + (this.props.subj === 2 ? "active":"")}
				  	onClick={()=>this.props.changeSubj(2)}>
				  	English
				  </div>
				</div>

				<div className="list-group list-group-flush">
					{note_items}
				</div>
			</div>
    )
  }
}

export default Content;