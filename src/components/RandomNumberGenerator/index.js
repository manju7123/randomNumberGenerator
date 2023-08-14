import {Component} from 'react'

import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    number: 0,
  }

  onGenerate = () => {
    this.setState({number: Math.ceil(Math.random() * 100)})
  }

  render() {
    const {number} = this.state
    return (
      <div className="bg-container">
        <div className="card">
          <h1 className="heading"> Random Number </h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100{' '}
          </p>
          <button className="btn" type="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="random-number"> {number} </p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
