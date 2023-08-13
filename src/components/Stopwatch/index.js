import './index.css'
import {Component} from 'react'

const initial = {
  isRunning: false,
  initialSeconds: 0,
}
class Stopwatch extends Component {
  state = initial

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimeInterval = () => {
    clearInterval(this.intervalId)
  }

  increaseBy1 = () => {
    this.setState(prevState => ({
      initialSeconds: prevState.initialSeconds + 1,
    }))
  }

  onStop = () => {
    this.clearTimeInterval()
  }

  onReset = () => {
    this.clearTimeInterval()
    this.setState(initial)
  }

  onStart = () => {
    // eslint-disable-next-line
    const {isRunning, initialSeconds} = this.state
    this.intervalId = setInterval(this.increaseBy1, 1000)
    this.setState(prevState => ({
      isRunning: !prevState.isRunning,
    }))
  }

  getTime = () => {
    // eslint-disable-next-line
    const {isRunning, initialSeconds} = this.state
    const minutes = Math.floor(initialSeconds / 60)
    const seconds = Math.floor(initialSeconds % 60)

    const stringMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringSeconds = seconds > 9 ? seconds : `0${seconds}`

    return (
      <h1 className="b">
        {stringMinutes}:{stringSeconds}
      </h1>
    )
  }

  render() {
    return (
      <div className="appContainer">
        <h1 className="headEdit">Stopwatch</h1>
        <div className="timerContainer">
          <div className="a">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="imgEdit"
            />
            <h1 className="headEdit2">Timer</h1>
          </div>
          <div>{this.getTime()}</div>
          <div className="controlBtn">
            <button onClick={this.onStart} className="c" type="button">
              Start
            </button>
            <button onClick={this.onStop} className="c" type="button">
              Stop
            </button>
            <button onClick={this.onReset} className="c" type="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
