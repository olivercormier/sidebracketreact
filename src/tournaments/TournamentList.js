import React from 'react';
import { Link } from 'react-router-dom';

class TournamentList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  componentDidMount() {
    fetch('http://localhost:8080/tournaments')
        .then(res => res.json())
        .then((data) => {
          this.setState({ tournaments: data })
        })
        .catch(console.log)
  }

  render() {
    if(this.state.tournaments) {
      var tournaments = this.state.tournaments.map(tournament => 
        this.tournamentRow(tournament));
      
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

  tournamentRow(tournament) {
    var link = "/tournaments/" + tournament.id;
    return(
      <tr key={tournament.id}>
        <td>
          {tournament.id}
        </td>
          <td>
            <Link to={link}>{tournament.name}</Link>
          </td>
      </tr>
    );
  }
}

export default TournamentList;