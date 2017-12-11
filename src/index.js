import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Concert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {going: 0, theyLikeIt: true};
    this.increaseGoing =this.increaseGoing.bind(this);
    this.removeShow = this.removeShow.bind(this);
  }

  increaseGoing() {
    var newGoing = this.state.going;
    newGoing = newGoing + 1;
    console.log(newGoing);
    this.setState({going: newGoing});
  }

  removeShow() {
    var current = this.state.theyLikeIt;
    current = !current;
    this.setState({theyLikeIt: current});
  }



  render() {
    const theyLikeIt = this.state.theyLikeIt
    let show = null;
    if (theyLikeIt) {
      show = <div id="concert">
              <h1> {this.props.band} is playing on {this.props.date}</h1>
              <h3> {this.state.going} Are going </h3>
              <h3> Its at {this.props.venue}</h3>
              <h4> That is pretty chill </h4>
              <br></br>
              <div id="buttonHolder">
                <button onClick={this.increaseGoing}>You Going Bro?</button>
                <button onClick={this.removeShow}>You hate this Bro!</button>
              </div>
              <br></br>
            </div>
    } else {
      show = <h5> Guess I wont see you there </h5>
    }
    return (
      <div>
        {show}
      </div>
    );
  }
}



function ConcertList(props){
  const concerts = props.concerts
  const concertListItems = concerts.map((concert) =>
    <Concert classname="concert" key={concert.id} band={concert.band} date={concert.date} venue={concert.venue} />

  );
  return (
      <ul>
        {concertListItems}
      </ul>
  );
}

const concerts = [{band:"Platinum Boys", date:"December 31st, 2017", venue:"PDM", id:0},
            { band: "Preoccupations",
            date: "January 3rd, 2018",
            venue:"The Firebird",
            id: 1
            },
            { band: "Wu Tang Clan",
              date: "December 12th, 2017",
              venue: "McDonald's Play Place",
              id: 2
            }];
ReactDOM.render(
  <ConcertList concerts={concerts}/>,
  document.getElementById('root')
);
