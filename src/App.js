import React from 'react';
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
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
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
    paddingBottom: "5rem"
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

const tiers = [
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '15',
    description: [
      'Decrease Labor Costs',
      'Decrease Customer Time in Line',
      'Upsell Menu Items',
      'Increase Tips',
    ],
    buttonText: 'Get started',
    buttonVariant: 'contained',
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="white" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <img alt='jasper company logo' className={classes.logo} src={logo}></img>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Contact Us
            </Link>
          </nav>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Ordering Just Became Simple
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Jasper enables an automated fast and magical self-service option for ordering food at restaurants.
        </Typography>
      </Container>
      <Container className={classes.centerContainer}>
        <img alt='jasper sample menu' className={classes.ipad} src={ipad}></img>
        <br></br>
        <br></br>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" className={classes.centerContainer}>
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={8}>
              <Card>
                <CardHeader
                  title='Why Jasper?'
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                    </Typography>
                    <Typography variant="h4" color="textSecondary">
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="h5" align="left" key={line}>
                        <CheckCircleIcon style={{color: 'green', flex: 1}}></CheckCircleIcon>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Container>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary">
          Replace Cashiers with a Wonderful Experience
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