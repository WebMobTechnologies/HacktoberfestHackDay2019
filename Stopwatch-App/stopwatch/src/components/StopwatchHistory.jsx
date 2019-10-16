import React from 'react';

class StopwatchHistory extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    this.setHistoryState();
  }

  setHistoryState = () => {
    if (localStorage.times) {
      this.setState({ history: localStorage.times.split('|') });
    } else {
      this.setState({ history: [] });
    }
  };

  saveToLocalStorage = () => {
    if (localStorage.times) {
      localStorage.times =
        `${this.props.formatTime(
          this.props.currentTimeMin
        )}:${this.props.formatTime(
          this.props.currentTimeSec
        )}:${this.props.formatTime(this.props.currentTimeMs, 'ms')}|` +
        localStorage.times;
    } else {
      localStorage.times = `${this.props.formatTime(
        this.props.currentTimeMin
      )}:${this.props.formatTime(
        this.props.currentTimeSec
      )}:${this.props.formatTime(this.props.currentTimeMs, 'ms')}|`;
    }
  };

  saveTime = () => {
    if (typeof Storage !== 'undefined') {
      this.saveToLocalStorage();
    } else {
      console.error('local storage not supported');
    }
    this.setHistoryState();
  };

  resetHistory = () => {
    if (localStorage.times) {
      localStorage.removeItem('times');
    }
    this.setHistoryState();
  };

  render() {
    return (
      <div className={'stopwatch__history'}>
        <button onClick={this.saveTime}>LAP</button>
        <button onClick={this.resetHistory}>RESET LAPS</button>
        <h3>LAPS</h3>
        <ul>
          {this.state.history.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      </div>
    );
  }
}

export default StopwatchHistory;
