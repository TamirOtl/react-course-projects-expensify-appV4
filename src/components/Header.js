import React from 'react';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import {startLogOut} from '../actions/auth.js';
export const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to="/dashboard" activeClassName="is-active" >Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expense</NavLink>
    <button onClick={startLogOut()}>Log out</button>
  </header>
);
const mapDispatchToProps = (dispatch) => ({
  startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined,mapDispatchToProps)(Header);
