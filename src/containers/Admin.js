import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import {Tabs, Tab} from 'material-ui/Tabs'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Checkbox from 'material-ui/Checkbox'


class Admin extends PureComponent {

  render() {
    return (
      <Paper style={{ padding: 48, width: 900, margin: '50px auto' }} zDepth={1}>

        <Tabs>
          <Tab label="Users" >
            <div>
              <h2>Users</h2>
              <List>
                <ListItem
                  primaryText="Brendan Lim"
                  leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                    rightCheckbox={<Checkbox />}
                />
                <ListItem
                  primaryText="Eric Hoffman"
                  leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                  rightCheckbox={<Checkbox />}
                />
                <ListItem
                  primaryText="Bob Hope"
                  leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                    rightCheckbox={<Checkbox />}
                />
                <ListItem
                  primaryText="Clint Eastwood"
                  leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                  rightCheckbox={<Checkbox />}
                />
              </List>
            </div>
          </Tab>
          <Tab label="Students" >
          <div>
            <h2>Students</h2>
            <List>
              <ListItem
                primaryText="Brendan Lim"
                leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                  rightCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText="Eric Hoffman"
                leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                rightCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText="Bob Saget"
                leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                rightCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText="Eric Klein"
                leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                rightCheckbox={<Checkbox />}
              />
            </List>
          </div>
          </Tab>
          <Tab label="Lessons" >
          <div>
            <h2>Lessons</h2>
            <List>
              <ListItem
                primaryText="Todays Lesson"
                leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                  rightCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText="Todays Lesson"
                leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                rightCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText="Todays Lesson"
                leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                rightCheckbox={<Checkbox />}
              />
              <ListItem
                primaryText="Todays Lesson"
                leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                rightCheckbox={<Checkbox />}
              />
            </List>
          </div>
          </Tab>
        </Tabs>
      </Paper>
    )
  }
}

export default Admin
