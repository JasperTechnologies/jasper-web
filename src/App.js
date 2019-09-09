import React, { useRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from './logo.png';
import ipad from './ipadcomp.png'
import ipadstand from './ipadstand.jpg'

// icons
import Check from '@material-ui/icons/Check';
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import AvTimer from '@material-ui/icons/AvTimer';
import Search from '@material-ui/icons/Search';
import Money from '@material-ui/icons/Money';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Jasper Technologies
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
    },
  },
  centerContainer: {
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: "5rem",
    paddingTop: "5rem"
  },
  logo: {
    width: '300px'
  },
  ipad: {
    width: '40rem',
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
  experienceIcon: {
    fontSize: '50px',
  },
  experienceGrid: {
    height: '250px',
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
//
// const tiers = [
//   {
//     title: 'Pro',
//     subheader: 'Most popular',
//     price: '15',
//     description: [
//       'Decrease Labor Costs',
//       'Decrease Customer Time in Line',
//       'Upsell Menu Items',
//       'Increase Tips',
//     ],
//     buttonText: 'Get started',
//     buttonVariant: 'contained',
//   },
// ];

const scrollToRef = (ref) => {
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: 'smooth'
  });
}   // General scroll to element function

export default function App(props) {
  const classes = useStyles();
  const benefitContainerRef = useRef(null);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="white" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img alt='jasper company logo' className={classes.logo} src={logo}></img>
          <nav>
            <Link variant="button" color="textPrimary" onClick={() => scrollToRef(benefitContainerRef)} className={classes.link}>
              Benefits
            </Link>
            {
              false && <Link variant="button" color="textPrimary" className={classes.link}>
                Contact Us
              </Link>
            }
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h1" align="center" color="textPrimary" gutterBottom>
          Ordering
        </Typography>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Just Became Simple
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" component="p">
          Jasper is a magical self-service option for ordering food at restaurants
        </Typography>
      </Container>
      <Container className={classes.centerContainer}>
        <img alt='jasper sample menu' className={classes.ipad} src={ipad}></img>
        <br></br>
        <br></br>
      </Container>
      {/* End hero unit */}
      <Container
        maxWidth="md"
        component="main"
        className={classes.centerContainer}
        ref={benefitContainerRef}
      >
        <Grid
          xs="12"
          direction="column"
        >
          <Grid xs="12">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Jasper Benefits
            </Typography>
          </Grid>
          <Grid
            container
            xs="12"
            direction="row"
            className={classes.experienceContainer}
          >
            <Grid
              xs="6"
              container
              align="center"
              direction="column"
              className={classes.experienceGrid}
            >
              <SupervisorAccount className={classes.experienceIcon} />
              <Typography variant="body1" align="center" gutterBottom>
                Reduce Labor Costs
              </Typography>
              <Grid xs="8">
                <Typography variant="body2" align="center" gutterBottom>
                  Jasper requires zero people to take orders, process payments, and leave customers with smiles. Get the same job done for less
                </Typography>
              </Grid>
            </Grid>
            <Grid
              xs="6"
              container
              align="center"
              direction="column"
              className={classes.experienceGrid}
            >
              <AvTimer className={classes.experienceIcon} />
              <Typography variant="body1" align="center" gutterBottom>
                Save Customer Time
              </Typography>
              <Grid xs="8">
                <Typography variant="body2" align="center" gutterBottom>
                  Customers love pictures. Our visuals and experience show how delicious the menu items are leave potential buyers with excitement!
                </Typography>
              </Grid>
            </Grid>
            <Grid
              xs="6"
              container
              align="center"
              direction="column"
              className={classes.experienceGrid}
            >
              <Search className={classes.experienceIcon} />
              <Typography variant="body1" align="center" gutterBottom>
                Increase Sales
              </Typography>
              <Grid xs="8">
                <Typography variant="body2" align="center" gutterBottom>
                  Menus seem to be getting larger and larger, and customers are increasingly confused by them. Jasper helps speed up this process with seamless menu item discovery
                </Typography>
              </Grid>
            </Grid>
            <Grid
              xs="6"
              container
              align="center"
              direction="column"
              className={classes.experienceGrid}
            >
              <Money className={classes.experienceIcon} />
              <Typography variant="body1" align="center" gutterBottom>
                Boost Tips
              </Typography>
              <Grid xs="8">
                <Typography variant="body2" align="center" gutterBottom>
                  People tend to tip more when politely suggested to do so with friendly default tip amounts
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Jasper Experiences
        </Typography>
        <Typography variant="body1" align="center" color="textSecondary" component="p">
          Jasper is offering an in-door dining automation for restaurant owners
        </Typography>
      </Container>
      <Container className={classes.centerContainer}>
        <img alt='jasper sample menu' className={classes.ipad} src={ipadstand}></img>
        <br></br>
        <br></br>
      </Container>
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Box mt={5}>
          <Typography variant="body2" color="textSecondary" align="center">
            Contact: Team@usejasper.com
          </Typography>
          <br></br>
          <Copyright />
        </Box>
      </Container>
    </React.Fragment>
  );
}
