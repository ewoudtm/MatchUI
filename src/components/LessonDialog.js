import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import createLesson from '../actions/lessons/createLesson'

class LessonDialog extends PureComponent {
  constructor() {
    super()
    this.state = {
      title: "",
      date: null,
      open: false,
    }
  }

  submitForm(event) {
    event.preventDefault()
    const lesson = {
      title: this.state.title,
      date: this.state.date,
    }
    this.props.createLesson(lesson)

  }

  handleOpen = () => {
    this.setState({open: true})
  }

  handleClose = () => {
    this.setState({open: false})
  }

  updateTitle = (event, title) => {
    this.setState({
      title: title
    })
  }

  updateDate = (event, date) => {
    this.setState({
      date: date
    })
  }


  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onTouchTap={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onTouchTap={this.submitForm.bind(this), this.handleClose}
      />,
    ]


    return (
      <div>
        <RaisedButton label="Create Lesson" onTouchTap={this.handleOpen} />
        <Dialog
          title="Create a Lesson"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <TextField
            hintText="Title of the lesson..."
            fullWidth={true}
            onChange={this.updateTitle}
          />
          <DatePicker hintText="Pick a date"
              onChange={this.updateDate}
              container="inline"
          />
        </Dialog>
      </div>
    )
  }
}


export default connect(null, { createLesson })(LessonDialog)
