import React, { Component } from 'react';
import Movies from './components/movies';
import NavBar from './components/navBar';
import Customers from './components/customers';
import MovieForm from './components/movieForm';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import Rentals from './components/rentals';
import NotFound from './components/not-found';
import Logout from './components/logout';
import Profile from './components/profile';
import ProtectedRoute from './components/protectedRoute';
import authService from './services/authService';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {};

  componentDidMount() {
    this.setState({ user: authService.getCurrentUser() });
  }

  render() {
    const { user } = this.state;

    return (
      <React.Fragment>
        <NavBar user={user} />
        <main className="container">
          <Switch>
            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            />
            <Route path="/register" component={RegisterForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/logout" component={Logout} />
            <Route path="/profile" component={Profile} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/not-found" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
