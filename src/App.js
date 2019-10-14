import React, { useRef, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './logo.png';
import HomeBody from './HomeBody'
import PrivacyBody from './PrivacyBody'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Jasper Solutions
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
    ul: {
      margin: 0,
      padding: 0,
    },
    li: {
      listStyle: 'none',
    }
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: "5rem",
    paddingTop: "5rem"
  },
  logo: {
    width: '100px',
    [theme.breakpoints.up('sm')]: {
      width: '300px',
    }
  },
  ipad: {
    width: '80%',
    alignSelf: 'center'
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  header1: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '26px !important'
    }
  },
  experienceIcon: {
    fontSize: '50px',
  },
  experienceGrid: {
    alignItems: 'center',
    minHeight: '250px',
  },
  experienceContainer: {
    paddingTop: '80px',
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });
}   // General scroll to element function

export default function App(props) {
  const classes = useStyles();
  const benefitContainerRef = useRef(null);
  const [ currentPage, updateCurrentPage ] = useState("home")

  function renderCurrentPage(){
    if(currentPage === 'home'){
      return <HomeBody bodyRef={benefitContainerRef}/>
    } else {
      return <PrivacyBody/>
    }
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="white" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img alt='jasper company logo' className={classes.logo} src={logo}></img>
          <div>
            <Button variant="button" color="textPrimary" onClick={() => {
              updateCurrentPage('home')
              setTimeout(() => scrollToRef(benefitContainerRef), 50)
              }} className={classes.link}>
              Benefits
            </Button>
            <Button variant="button" color="textPrimary" onClick={() => {
              updateCurrentPage('privacy')
              }} className={classes.link}>
              Privacy Policy
            </Button>
          </div>
          {
            false && <Button variant="button" color="textPrimary" className={classes.link}>
              Contact Us
            </Button>
          }
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      {renderCurrentPage()}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          {
            false && <Typography variant="body2" color="textSecondary" align="center">
              Contact: Team@usejasper.com
            </Typography>
          }
          <br></br>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
