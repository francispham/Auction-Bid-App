import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

import ProductShowPage from './ProductShowPage';
import ProductIndexPage from './ProductIndexPage';
import ProductNewPage from './ProductNewPage';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import NotFoundPage from './NotFoundPage';
import Home from './Home';
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
      this.setState({
        user: payload
      });
    }
  }

  signOut() {
    localStorage.removeItem('jwt');
    this.setState( {
      user: null
    });
  }

  isSignedIn () {
    return !!this.state.user;
  }


  render() {
    const { user } = this.state;

    return (
      <Router>
        <div className="App">
          <NavBar user={user}
           onSignOut = {this.signOut}
         />
          <Switch>
            <Route exact path="/" component={Home} />
            <AuthRoute
              isAuthenticated = {this.isSignedIn ()}
               exact path="/products" component={ProductIndexPage}
             />

            <AuthRoute
              isAuthenticated = {this.isSignedIn ()}
               path="/products/new" component={ProductNewPage}
             />

            <AuthRoute
              isAuthenticated = {this.isSignedIn ()}
               path="/products/:id" component={ProductShowPage}
             />

            <Route
              path="/sign_in"
              render={props => <SignInPage {...props} onSignIn={this.signIn} />}
            />
            <Route
              path="/sign_up"
              render={props => <SignUpPage {...props} onSignUp={this.signIn} />}
            />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
