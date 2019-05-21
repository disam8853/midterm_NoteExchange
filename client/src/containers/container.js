import React from 'react';
import { NavLink } from 'react-router-dom'
import UserInfo from './user-information.js'
import Content from './content.js'
import TopList from './top-list.js'

class Container extends React.Component {
  render() {
    const userItem = (<div className='col-md-3 d-none d-md-block'><UserInfo/></div>);
    const topItem = (<div className='col-md-3 d-none d-md-block'><TopList/></div>);
    return (
      <div>
        <div className='row justify-content-center mb-3'>
          <div className="col-auto">
            <NavLink to='/create_post'>
              <button type="button" className="btn btn-success btn-lg">Add new note!</button>
            </NavLink>
          </div>
        </div>

        <div className='row'>
          
          <div className='col-md-12'>
            <Content
              posts_data={this.props.posts_data}
              changeSubj={this.props.changeSubj}
              subj={this.props.subj}
            />
          </div>
          
        </div>
			</div>
    )
  }
}

export default Container;