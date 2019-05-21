import React from 'react';
import { NavLink } from 'react-router-dom'
import axios from 'axios';
import showdown from 'showdown'
import './post_render.css'

const subjs = ['Chinese', 'Math', 'English'];

class PostRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: "",
      subj: 0
    };
  }

  componentWillMount() {
    axios.get('/note/'+this.props.match.params.post_id)
        .then(res => {
          this.setState({
            title: res.data.post_title,
            content: res.data.post_content,
            subj: res.data.subj
          });
        })
        .catch(err => {
          console.log(err);
        })
  }

  deleteThisNote() {
    axios.delete('/note/'+this.props.match.params.post_id)
        .then(res => {
          window.location = "/";
        })
        .catch(err => {
          console.log(err);
        })
  }

  render() {
  	const subj_name = subjs[this.state.subj];
    let converter = new showdown.Converter();
    let html = converter.makeHtml(this.state.content);
    let md = (<div dangerouslySetInnerHTML={{ __html: html }} />);
    return (
      <div id='PostRender'>
      	<div className='row mt-5'>
      		<div className='col-6 dir'>
      			Directory: {subj_name}/{this.state.title}
      		</div>	
          <div className='col-6'>
            <NavLink to={'/update_post/'+this.props.match.params.post_id}>
              <button type="button" className="btn btn-success float-right">Update this note</button>
            </NavLink>
            <button type="button" className="btn btn-danger float-right mr-3" onClick={()=>this.deleteThisNote()}>Delete this note</button>
          </div>
      	</div>

      	<div className='row mt-4'>
      		<div className='col-12 center'>
      			<h1>{this.state.title}</h1>
      		</div>
      	</div>

      	<div className='row'>
      		<div className='col-12 center'>
      			<small>{subj_name}</small>
      		</div>
      	</div>

      	<div className='row mt-4'>
      		<div className='col-12'>
						{md}      		
      		</div>
      	</div>
			</div>
    )
  }
}

export default PostRender;