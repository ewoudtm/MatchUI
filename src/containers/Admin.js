import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import {Tabs, Tab} from 'material-ui/Tabs'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import Avatar from 'material-ui/Avatar'
import Checkbox from 'material-ui/Checkbox'
import subscribeToUsers from '../actions/users/subscribe'
import subscribeToLessons from '../actions/lessons/subscribe'
import createLesson from '../actions/lessons/createLesson'
import DatePicker from 'material-ui/DatePicker'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import Divider from 'material-ui/Divider'



class Admin extends PureComponent {
  componentWillMount() {
    this.props.subscribeToUsers()
    this.props.subscribeToLessons()
  }

  submitFormLessons(event) {
    event.preventDefault()
    const lesson = {
      title: this.state.title,
      date: this.state.date,
    }
    console.log('lesson submit form')
    this.props.createLesson(lesson)

  }

  updateLessonsTitle = (event, title) => {
    this.setState({
      title: title
    })
  }

  updateLessonsDate = (event, date) => {
    this.setState({
      date: date
    })
  }




  render() {
    return (
      <Paper style={{ padding: 48, width: 900, height: '100%', margin: '50px auto' }} zDepth={1}>

        <Tabs>

          <Tab label="Users" >
            <Table>
              <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
                <TableRow>
                  <TableHeaderColumn>Name</TableHeaderColumn>
                  <TableHeaderColumn>Admin</TableHeaderColumn>
                  <TableHeaderColumn>Student</TableHeaderColumn>
                </TableRow>
              </TableHeader>
              <TableBody displayRowCheckbox={false}>
                { this.props.users.map((user) => {
                  return (
                    <TableRow>
                      <TableRowColumn>{user.name}</TableRowColumn>
                      <TableRowColumn><Checkbox defaultChecked={user.admin}/></TableRowColumn>
                      <TableRowColumn><Checkbox defaultChecked={user.student}/></TableRowColumn>
                    </TableRow>
                  )})}
              </TableBody>
            </Table>
          </Tab>

          <Tab label="Students">
          <List>
            { this.props.users.map((user) => {
              const isStudent = user.student
              if (isStudent) {
                return (
                  <ListItem
                    primaryText={`${user.name}`}
                    leftAvatar={<Avatar src={`${user.gravatar}`} />}
                  />
                )
              } return
            })}
          </List>
          </Tab>

          <Tab label="Lessons" >
          <div>
            <div style={{ margin: '24px 0 0', textAlign: 'left' }}>
              <TextField
                hintText="Put the title of the Lesson here"
                fullWidth={true}
                onChange={this.updateLessonsTitle}
               />
               <DatePicker hintText="Pick a date"
                   onChange={this.updateLessonsDate}
                   container="inline"
               />
              <RaisedButton label="Add a Lesson" primary={true} onClick={this.submitFormLessons.bind(this)} />
            </div>
            <Divider />
            <List>
              { this.props.lessons.map((lesson) => {
                const isUnassigned = (lesson.teams === []) ? true : false
                if (isUnassigned) {
                  return (
                    <ListItem
                      primaryText={`${lesson.title}`}
                      secondaryText={`${lesson.date}`}
                    />
                  )
                } return (
                    <ListItem
                      primaryText={`${lesson.title}`}
                      secondaryText={`${lesson.date}`}
                    />
                  )
              })}
            </List>
          </div>
          </Tab>
        </Tabs>
      </Paper>
    )
  }
}


const mapStateToProps = ({ users, lessons }) => ({ users, lessons })
export default connect(mapStateToProps, { subscribeToUsers, subscribeToLessons, createLesson })(Admin)
