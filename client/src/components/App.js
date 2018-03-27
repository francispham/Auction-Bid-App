import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import Home from './Home';
import AuctionShowPage from './AuctionShowPage';
import AuctionIndexPage from './AuctionIndexPage';
import AuctionNewPage from './AuctionNewPage';
import SignInPage from './SignInPage';
import NavBar from './NavBar';
import AuthRoute from './AuthRoute';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };

    this.signIn = this.signIn.bind(this);
    this.signOut = this.signOut.bind(this);
  }

  componentWillMount() {
    this.signIn();
  }

  signIn() {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      const payload = jwtDecode(jwt);
      this.setState({user: payload});
    }
  }

  signOut() {
    localStorage.removeItem('jwt');
    this.setState({user: null});
  }

  isSignedIn() {
    return !!this.state.user;
  }

  render() {
    const {user} = this.state;

    return (<Router>
      <div className="App">
        <NavBar user={user} onSignOut={this.signOut}/>
        <Switch>
          <Route exact="exact" path="/" component={Home}/>
          <AuthRoute isAuthenticated={this.isSignedIn()} exact path="/auctions" component={AuctionIndexPage}/>
          <AuthRoute isAuthenticated={this.isSignedIn()} path="/auctions/new" component={AuctionNewPage}/>
          <AuthRoute isAuthenticated={this.isSignedIn()} path="/auctions/:id" component={AuctionShowPage}/>
          <Route path="/sign_in" render={props => (<SignInPage {...props} onSignIn={this.signIn}/>)}/>
        </Switch>
      </div>
    </Router>)
  }
}

export default App;
