import React, { Component } from 'react';
import classes from './Layout.css'
import Aux from '../Aux/Aux';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

  state = {
    showSideDrawer: false
  };

  sideDrawerCloseHandler = () => {
    this.setState({showSideDrawer: false});
  };

  sideDrawerToggleHandler = () => {
    this.setState((prevState) => {
      return {showSideDrawer: !this.state.showSideDrawer};
    });
  };

  render() {
    return (
    <Aux>
      <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
      <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerCloseHandler}/>
      <main className={classes.Content}>
        {this.props.children}
      </main>
    </Aux>
    );
  }
}

export default Layout;