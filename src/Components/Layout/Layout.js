import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Hidden,
  Drawer,
  CssBaseline,
  MenuList,
  MenuItem,
  Divider,
  withStyles
} from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { compose } from 'recompose';

const drawerWidth = 240;

const imgurl =
  'https://images.pexels.com/photos/131979/pexels-photo-131979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260';

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative'
    }
  },
  content: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.default,
    backgroundImage: `url(${imgurl})`,
    padding: theme.spacing(3)
  },
  nested: {
    paddingLeft: theme.spacing(4)
  }
});

class Layout extends Component {
  state = {
    mobileOpen: false
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currTime: new Date().toLocaleTimeString()
      });
    }, 1000);
  }

  render() {
    const {
      classes,
      location: { pathname },
      children
    } = this.props;
    const { mobileOpen } = this.state;
    console.log('props', this.props);
    const drawer = (
      <div>
        <Hidden smDown>
          <div className={classes.toolbar} />
        </Hidden>
        <Divider />
        <MenuList>
          <MenuItem
            component={Link}
            to='/'
            selected={'/' === pathname}
            onClick={this.handleDrawerToggle}
          >
            Home
          </MenuItem>
          <MenuItem
            component={Link}
            to='/about'
            selected={'/about' === pathname}
            onClick={this.handleDrawerToggle}
          >
            About
          </MenuItem>
          <MenuItem
            component={Link}
            to='/todo'
            selected={'/todo' === pathname}
            onClick={this.handleDrawerToggle}
          >
            TodoApp
          </MenuItem>
          <MenuItem
            component={Link}
            to='/contact'
            selected={'/contact' === pathname}
            onClick={this.handleDrawerToggle}
          >
            Contact
          </MenuItem>
          <Divider />
        </MenuList>
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position='fixed' className={classes.appBar}>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              edge='start'
              onClick={this.handleDrawerToggle}
              className={classes.menuButton}
            >
              <Menu />
            </IconButton>
            <Typography variant='h6' noWrap>
              Current time :{this.state.currTime}
            </Typography>
          </Toolbar>
        </AppBar>

        <Hidden smUp implementation='css'>
          <Drawer
            variant='temporary'
            open={mobileOpen}
            onClose={this.handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        {/* <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden> */}

        <main className={classes.content}>
          <div className={classes.toolbar} />
          {children}
        </main>
      </div>
    );
  }
}

export default compose(withRouter, withStyles(styles))(Layout);
