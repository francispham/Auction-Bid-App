import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import AuctionNewPage from './AuctionNewPage';
import AuctionShowPage from './AuctionShowPage';

class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/auctions/new" component={AuctionNewPage} />
          <Route path="/auctions/:id" component={AuctionShowPage} />
        </Switch>
      </Router>
    )
  }
}

export default App;
