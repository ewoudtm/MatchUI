import React, { PureComponent, PropTypes } from 'react'
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import { connect } from 'react-redux'
import MenuItem from 'material-ui/MenuItem'
import { Link } from 'react-router'
import signOut from '../actions/user/sign-out'
import FlatButton from 'material-ui/FlatButton'
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { history } from '../store'


import {
  ROOT_PATH,
  CHAT_PATH,
} from '../routes'

 class Navigation extends PureComponent {
  static propTypes = {
    signedIn: PropTypes.bool.isRequired,
  }

  constructor() {
    super()

    this.state = { open: false }
  }

  toggleMenu() {
    this.setState({
      open: !this.state.open
    })
  }

  signUp() {
    history.push('users/sign-up')
  }

  signOut(event) {
    event.preventDefault()
    this.props.signOut()
  }

  render() {
    const { signedIn } = this.props
    return (
      <div>
        <AppBar
          className="navbar"
          title="Match"
            onLeftIconButtonTouchTap={this.toggleMenu.bind(this)}
            iconElementRight={signedIn ?
            <FlatButton label="Sign out" onClick={this.signOut.bind(this)} /> :
            <FlatButton label="Sign up" onClick={this.signUp} />
          }
        />
        <Drawer open={this.state.open}>
          <div>
            <div>
              <Link to={ROOT_PATH} onTouchTap={this.toggleMenu.bind(this)}>
                <MenuItem>Close</MenuItem>
              </Link>
            </div>
            <div style={{ paddingTop: 80 }}>
              <Link to={ROOT_PATH} onTouchTap={this.toggleMenu.bind(this)}>
                <MenuItem>Lobby</MenuItem>
              </Link>
              <Link to={CHAT_PATH} onTouchTap={this.toggleMenu.bind(this)}>
                <MenuItem>Chat</MenuItem>
              </Link>
            </div>
          </div>
        </Drawer>
      </div>
    )
  }
}

const mapStateToProps = ({ currentUser }) => ({
  signedIn: (!!currentUser && !!currentUser._id), currentUser
})

export default connect(mapStateToProps, { signOut })(Navigation)
