import React, {Component} from 'react';
import {Token} from '../data/requests';

class SignInPage extends Component {
  constructor (props) {
    super (props);

    this.createToken = this.createToken.bind (this);
  }

  createToken(event) {
    const { onSignIn = () => {} } = this.props;
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    Token.create({
      email: formData.get('email'),
      password: formData.get('password')
    }).then(data => {
      if (!data.error) {
        localStorage.setItem('jwt', data.jwt);
        onSignIn();
        this.props.history.push('/');
      } else {
        alert(data.error);
      }
    });
  }

  render() {
    return (
      <main className="SignInPage" style={{ margin: '0 1rem' }}>
        <h2>Sign In</h2>
        <form onSubmit={this.createToken}>
          <div>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" name="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label> <br />
            <input type="password" id="password" name="password" />
          </div>

          <div>
            <input type="submit" value="Sign In" />
          </div>
        </form>
      </main>
    );
  }
}

export default SignInPage;
