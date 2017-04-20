import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import Paper from 'material-ui/Paper'
import {Tabs, Tab} from 'material-ui/Tabs'
import {List, ListItem, makeSelectable} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Checkbox from 'material-ui/Checkbox'


class Student extends PureComponent {

  render() {
    return (
      <Paper style={{ padding: 48, width: 900, margin: '50px auto' }} zDepth={1}>

        <Tabs>
          <Tab label="Todays Lesson" >
            <div>
              <h2>Todays Lesson</h2>
              <p>Your teammembers:</p>
              <List>
                <ListItem
                  primaryText="Brendan Lim"
                  leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                />
                <ListItem
                  primaryText="Eric Hoffman"
                  leftAvatar={<Avatar src="../images/ic_face_black_24dp_2x.png" />}
                />
              </List>
            </div>
          </Tab>
          <Tab label="Past Lessons" >
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

        </Tabs>
      </Paper>
    )
  }
}

export default Student
