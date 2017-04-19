import React, { PureComponent, PropTypes } from 'react'
import { connect } from 'react-redux'
import subscribeStudents from '../actions/students/subscribe'
import rollDie from '../actions/games/roll-die'
import cash from '../actions/games/cash'
import './StudentPage.sass'

class StudentPage extends PureComponent {
  static propTypes = {}

  componentDidMount() {
    this.props.subscribeStudents()
  }

  render() {
    const { _id, title, players } = this.props
    const player1 = players[0]
    const player2 = players[1]
    console.log(_id)

    return (
    <div className='game page'>

      <div className="flex-container">
        <div className="flex-player">
         <div className="playerName">{ player1.name }</div>
         <div className="gameTotal">{ player1.gameTotal }</div>
         <div className="roundTotal">{ player1.roundTotal }</div>
         <div >
           { this.renderCashButton(_id) }
         </div>
        </div>

        <div className="flex-die">
          <div className="gameName">{ title }</div>
          <div className="gameDie">{ dieRoll }</div>
           <div className="actions">
             { this.renderRollDieButton(_id) }
           </div>
        </div>

        <div className="flex-player color">
         <div className="playerName">{ player2.name }</div>
         <div className="gameTotal">{ player2.gameTotal }</div>
         <div className="roundTotal">{ player2.roundTotal }</div>
         <div className="actions">
           { this.renderCashButton(_id)}
         </div>
        </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ students }, { params }, { lessons }) => {
  const student = students.reduce((prev, next) => {
    if (next._id === params.studentId) {
      return next
    }
    return prev
  }, {})

  return {
    ...student
  }
}

export default connect(mapStateToProps, {subscribeStudents, rollDie, cash})(StudentPage)
