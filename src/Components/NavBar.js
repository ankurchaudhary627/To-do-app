import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { MenuList, MenuItem} from '@material-ui/core';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom'

import routes from './AppRouter';

import Home from './home'
import ToDoApp from './ToDoApp'
import Contact from './contact'
import NotFound from './notfound'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const activeRoute = (routeName) => {
    return this.props.location.pathname.indexOf(routeName) > -1 ? true : false;
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            console.log("Welcome!");
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        {/* <List>
          {['Home', 'To-do App', 'Contact'].map((text, index) => (
            // <Link to={'/'} >
                <ListItem button key={text} component="a" href="https://www.facebook.com">
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                </ListItem>
            // </Link>
          ))}
        </List> */}
        {/* <Router>
          {
            routes.map((prop, key) => {
              return (
                <Switch>
                  <Route exact path="/" component={Home} >
                    <Link to={prop.path} style={{textDecoration:'none'}} key={key}>
                      <ListItem button key={key}>
                        <ListItemIcon><MailIcon/></ListItemIcon>
                        <ListItemText primary={prop.sidebarName} />
                      </ListItem>
                    </Link>
                  </Route>
                  <Route path="/todo" component={ToDoApp} />
                  <Route path="/contact" component={Contact} />
                  <Route component={NotFound} />
                </Switch>
                // <Link to={prop.path} style={{ textDecoration: 'none', color:'black' }} key={key}>
                //   <ListItem button key={key} >
                //     <ListItemIcon>
                //       <MailIcon />
                //     </ListItemIcon>
                //     <ListItemText primary={prop.sidebarName} />
                //   </ListItem>
                // </Link>
              );
            })
            
          }
        
        </Router> */}

        <Router>
          <Link to={'/'} style={{ textDecoration: 'none', color:'black' }}>
              <ListItem button >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary='Home' />
              </ListItem>
          </Link>
          <Link to={'/todo'} style={{ textDecoration: 'none', color:'black' }}>
              <ListItem button >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary='To-do App' />
              </ListItem>
          </Link>
          <Link to={'/contact'} style={{ textDecoration: 'none', color:'black' }}>
              <ListItem button >
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary='Contact' />
              </ListItem>
          </Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/todo" component={ToDoApp} />
            <Route path="/contact" component={Contact} />
            <Route component={NotFound} />
          </Switch>
        </Router>

        <Divider />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography align='center' color='textPrimary' variant='h3'>
            Welcome to React World!!!
        </Typography>
      </main>
    </div>
  );
}
