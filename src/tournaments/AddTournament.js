import React from 'react';

class AddTournament extends React.Component {

    constructor(props) {
        super(props);

        this.state = {tournamentName: "", gameName: "", 
        tournamentHandler: this.props.tournamentHandler};

        this.setTournamentName = this.setTournamentName.bind(this);
        this.setGameName = this.setGameName.bind(this);
        this.submitTournament = this.submitTournament.bind(this);
        this.addTournament = this.addTournament.bind(this);

    }

    setTournamentName(event) {
        this.setState({tournamentName: event.target.value});
      }
  
      setGameName(event) {
        this.setState({gameName: event.target.value});
      }
  
      submitTournament(_event) {
        this.addTournament(this.state.tournamentName, this.state.gameName);
      }

      addTournament(tournamentName, gameName) {
        fetch("http://localhost:8080/tournaments?tournamentName=" + tournamentName 
        + "&gameName=" + gameName)
          .then((res) => {
            if (res.status === 200) {
              console.log("Tournament Created");
            }
          }).catch(console.log)
      }

    render() {
          return (
            <form>
              <h1>Add Tournament</h1>
              <input type="text" value={this.state.tournamentName} onChange={this.setTournamentName} placeholder="Enter Tournament Name"/> <br />
              <input type="text" value={this.state.gameName} onChange={this.setGameName} placeholder="Enter Game"/> <br />
              <button onClick={this.submitTournament}>Create</button>
            </form>
          );
      }

}
export default AddTournament;