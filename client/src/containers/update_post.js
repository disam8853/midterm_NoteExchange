import React from 'react';
import axios from 'axios';

class CreatePost extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			content: "",
			subj: ""
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

          document.getElementById("note_title").value = this.state.title;
          document.getElementById("note_content").value = this.state.content;
          document.getElementById("subj_selection").value = this.state.subj;
        })
        .catch(err => {
          console.log(err);
        })
  }

	onSubmit(e) {
		let title = document.getElementById("note_title").value;
		let content = document.getElementById("note_content").value;
		let subj = parseInt(document.getElementById("subj_selection").value);

		const newNote = {
			post_title: title,
			post_content: content,
			subj: subj
		}

		axios.post('/note/'+this.props.match.params.post_id, newNote)
					.then(res => {
						console.log(res.data);
					});
	}

  render() {
    return (
      <div id='CreatePost'>
      	<div className='row'>
      		<h1 className='mx-auto'>
	      		Create a new note:
	      	</h1>
      	</div>

      	<form>
				  <div className="form-group">
				    <label for="note_title">Note name:</label>
				    <input type="text" className="form-control" id="note_title" placeholder="Math CH10 - Calculus"/>
				  </div>
				  <div className="form-group">
				    <label for="subj_selection">Choose a subject:</label>
				    <select className="form-control" id="subj_selection">
				      <option value='2'>English</option>
				      <option value='1'>Math</option>
				      <option value='0'>Chinese</option>
				    </select>
				  </div>
				  <div className="form-group">
				    <label for="note_content">Note content:</label>
				    <textarea className="form-control" id="note_content" rows="3"></textarea>
				  </div>
				  <button type="submit" className="btn btn-primary" onClick={() => this.onSubmit()}>Submit</button>
				</form>
      	
			</div>
    )
  }
}

export default CreatePost;