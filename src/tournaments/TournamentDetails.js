import React from 'react';
import {Redirect} from 'react-router-dom';

class TournamentDetails extends React.Component {

  constructor(props) {
    super(props);
    this.state = {redirect: null, tournament: {}, organizer: {}, user: {}, 
    game: {}, results: [], participantUser: {}};
    this.returnToList = this.returnToList.bind(this);
    this.resultsRow = this.resultsRow.bind(this);
  }

  // Uses the id from the url to fetch tournament details
  componentDidMount() {
    const id = this.props.match.params.id;
    fetch("http://localhost:8080/tournaments/" + id)
    .then(res => res.json())
    .then((tourData) => {
      this.setState({tournament: tourData});

      // Uses the gameId to get the game name
      fetch("http://localhost:8080/games/" + this.state.tournament.gameId)
      .then( res => res.json())
      .then((gameData) => {
        this.setState({game: gameData});
      });

      // Uses tournamentId to get the results
      fetch("http://localhost:8080/results?tournamentId=" + id)
      .then( res => res.json())
      .then((resultData) => {
        this.setState({results: resultData});
      });
      
      // Uses the organizerId to get organizer name
      fetch("http://localhost:8080/organizers/" + this.state.tournament.organizerId)
      .then(res => res.json())
      .then((orgData) => {
        this.setState({organizer: orgData});

        fetch("http://localhost:8080/users/" + this.state.organizer.userId)
        .then( res => res.json())
        .then((userData) => {
          this.setState({user: userData});
        }) 
      });      
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    } 
    else if (this.state.tournament) {
      return (
        <div>
          <h1>Tournament Details</h1>
          <p>
            Tournament Name: {this.state.tournament.name} <br/>
            Organizer Name: {this.state.user.username} <br/>
            Game Name: {this.state.game.name}
          </p>
          <div>
                <table>
                  <thead>
                    <tr>
                      <th>Placing</th>
                      <th>Participant</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.results.map(row => this.resultsRow(row))}
                  </tbody>
                </table>
                </div>
          <button onClick={this.returnToList}>Return</button>
        </div>
      );
    } else {
      return null;
    }
    
  }

  // Return button uses redirect to return to tournament list if clicked
  returnToList() {
    this.setState({redirect: "/tournaments"});
  }

resultsRow(row) {
  return(
    <tr key={row.id}>
        <td>
          {row.placing}
        </td>
        <td>
          {row.participantName}
        </td>
    </tr>
  );
}

}
export default TournamentDetails;