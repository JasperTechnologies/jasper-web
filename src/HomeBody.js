import React, { useRef } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import ipad from './ipadcomp.png'
import ipadstand from './ipadstand.jpg'

// icons
import SupervisorAccount from '@material-ui/icons/SupervisorAccount';
import AvTimer from '@material-ui/icons/AvTimer';
import Search from '@material-ui/icons/Search';
import Money from '@material-ui/icons/Money';


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

export default function HomeBody(props) {
  const classes = useStyles();
  const benefitContainerRef = props.bodyRef;

  return (
		<Grid container justify="center">
			<Grid xs="8" className={classes.heroContent}>
				<Typography component="h1" variant="h2" className={classes.header1} align="center" color="textPrimary" gutterBottom>
					Ordering Just Became Simple
				</Typography>
				<Typography variant="body1" align="center" color="textSecondary" component="p">
					Jasper is a automated self-service option for ordering food at restaurants
				</Typography>
			</Grid>
			<Grid xs="8" className={classes.centerContainer}>
				<img alt='jasper sample menu' className={classes.ipad} src={ipad}></img>
				<br></br>
				<br></br>
			</Grid>
			<Grid
				xs="8"
				className={classes.centerContainer}
				ref={benefitContainerRef}
			>
				<Grid
					xs="12"
					direction="column"
				>
					<Grid xs="12">
						<Typography component="h1" variant="h2" className={classes.header1} align="center" color="textPrimary" gutterBottom>
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
							xs="12"
							sm="6"
							container
							direction="column"
							className={classes.experienceGrid}
						>
							<SupervisorAccount className={classes.experienceIcon} />
							<Typography variant="body1" align="center" gutterBottom>
								Reduce Labor Costs
							</Typography>
							<Grid xs="8">
								<Typography variant="body2" align="center" gutterBottom>
									Jasper requires zero employees to take orders, process payments, and leaves customers with smiles. Get the same job done for less
								</Typography>
							</Grid>
						</Grid>
						<Grid
							xs="12"
							sm="6"
							container
							direction="column"
							className={classes.experienceGrid}
						>
							<AvTimer className={classes.experienceIcon} />
							<Typography variant="body1" align="center" gutterBottom>
								Save Customer Time
							</Typography>
							<Grid xs="8">
								<Typography variant="body2" align="center" gutterBottom>
									Customers love pictures. Our visuals and experience show how delicious the menu items are leaving potential buyers with excitement
								</Typography>
							</Grid>
						</Grid>
						<Grid
							xs="12"
							sm="6"
							container
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
							xs="12"
							sm="6"
							container
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
			</Grid>
			<Grid xs="8" className={classes.heroContent}>
				<Typography component="h1" variant="h2" className={classes.header1} align="center" color="textPrimary" gutterBottom>
					Jasper Experiences
				</Typography>
				<Typography variant="body1" align="center" color="textSecondary" component="p">
					Jasper offers cashier and order automation for fast-service restaurants
				</Typography>
			</Grid>
			<Grid xs="8" className={classes.centerContainer}>
				<img alt='jasper sample menu' className={classes.ipad} src={ipadstand}></img>
				<br></br>
				<br></br>
			</Grid>
		</Grid>
  );
}
