import React from 'react';
import { Link } from 'react-router-dom';

class TournamentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  // fetches all of the tournaments from the api and stores them in "tournaments"
  componentDidMount() {
    fetch('http://localhost:8080/tournaments')
        .then(res => res.json())
        .then((data) => {
          this.setState({ tournaments: data })
        })
        .catch(console.log)
  }

  // For each tournament, call the tournamentRow() function
  render() {
    if(this.state.tournaments) {
      var tournaments = this.state.tournaments.map(tournament => 
        this.tournamentRow(tournament));
      
      // Shows all tournaments as a table with each tournament as a new row
      return (
        <div>
          <h1>Tournaments</h1>
          <table>
            <tbody>
              {tournaments}
            </tbody>
          </table>
          </div>
      );
    
    }else {
      return null;
    }    
  }

  // Creates a table row with a link using each tournaments name and id
  tournamentRow(tournament) {
    var link = "/tournaments/" + tournament.id;
    return(
      <tr key={tournament.id}>
          <td>
            <Link to={link}>{tournament.name}</Link>
          </td>
      </tr>
    );
  }
}

export default TournamentList;