import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
  state = {speed: 0}

  onIncrease = () => {
    this.setState(prevState => ({speed: prevState.speed + 10}))
  }

  onDecrease = () => {
    this.setState(prevState => ({speed: prevState.speed - 10}))
  }

  render() {
    const {speed} = this.state
    return (
      <div className="background">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          alt="speedometer"
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
        />
        <h1 className="head">
          Speed is <span className="span">{speed}mph</span>
        </h1>
        <h1 className="para">Min Limit is 0mph, Max Limit is 200mph</h1>
        <div className="rowItems">
          <button onClick={this.onIncrease} className="button1">
            Accelerate
          </button>
          <button onClick={this.onDecrease} className="button2">
            Apply Brake
          </button>
        </div>
      </div>
    )
  }
}
export default Speedometer
