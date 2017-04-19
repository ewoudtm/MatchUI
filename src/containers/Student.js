import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'


class Student extends PureComponent {

  render() {
    return (
      <Paper style={{ padding: 48, width: 500, margin: '50px auto' }} zDepth={1}>
        <h1>Student</h1>


      </Paper>
    )
  }
}

export default Student
