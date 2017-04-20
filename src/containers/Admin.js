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
import LessonDialog from '../components/LessonDialog'




class Admin extends PureComponent {
  componentWillMount() {
    this.props.subscribeToUsers()
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
            <h2>Lessons</h2>
            <LessonDialog />
            <List>
              { this.props.lessons.map((lesson) => {
                const isUnassigned = (lesson.teams === []) ? true : false
                if (isUnassigned) {
                  return (
                    <ListItem
                      primaryText={<i className="material-icons">people outline</i> +'  '+`${lesson.title}`}
                      secondaryText={`${lesson.date}`}
                    />
                  )
                } return (
                    <ListItem
                      primaryText={<i className="material-icons">people</i> +'  '+`${lesson.title}`}
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
export default connect(mapStateToProps, { subscribeToUsers, subscribeToLessons })(Admin)
