import React from 'react';
import { 
    Switch,
    Route
 } from 'react-router-dom';
import TournamentDetails from './tournaments/TournamentDetails';
import TournamentList from './tournaments/TournamentList';
import AddTournament from './tournaments/AddTournament';
import Home from './Home';

class Main extends React.Component {

    render() {
        return(
        <div>
            <Switch>
                <Route path="/tournaments/add" component={AddTournament}/>
                <Route path="/tournaments/:id" component={TournamentDetails}/>
                <Route path="/tournaments" component={TournamentList}/>
                <Route path="/" component={Home}/>
            </Switch>
        </div>
        );}
}
export default Main;