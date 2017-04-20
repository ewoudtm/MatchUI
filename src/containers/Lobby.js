import React, { PureComponent } from 'react'
import Paper from 'material-ui/Paper'
import RaisedButton from 'material-ui/RaisedButton'
import { Link } from 'react-router'



class Lobby extends PureComponent {

  render() {
    return (
      <Paper style={{ padding: 48, width: 900, margin: '50px auto' }} zDepth={1}>
        <div style={{ margin: '24px 0 0', textAlign: 'center' }}>
          <h1>Where do you want to go</h1>

          <Link to={'/admin'}>
            <RaisedButton
              label="Admin"
              primary={true}
              style={{ marginRight: '1rem' }} />
          </Link>
          <Link to={'/student'}>
            <RaisedButton
              label="Student"
              primary={true}
              style={{ marginRight: '1rem' }} />
          </Link>
        </div>
      </Paper>
    )
  }
}

export default Lobby
