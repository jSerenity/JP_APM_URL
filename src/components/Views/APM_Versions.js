import React from 'react';
import classNames from "classnames";
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import styles from "../../assets/jss/material-style-react/components/APM_Version_Card";
import logoB from '../../assets/icons/logo.png';

const useStyles = makeStyles(styles);
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <span content="text/html; charset=UTF-32">
            &copy; {1900 + new Date().getYear()}{" "}
            <Link color="inherit" href="https://hypernovalabs.com/">
            Hypernova Labs
            </Link>{' '}
                      , Hecho para Banesco. Versi&#243;n: {1.1}
          </span>
    </Typography>
  );
}


const tiers = [
  {
    title: 'DESARROLLO',
    subheader: 'Pruebas de desarrollo',
    apiBaseUrl:"https://login.microsoftonline.com/33e17002-45c0-4d22-811a-82f220af313f/oauth2/authorize?response_type=id_token&redirect_uri=https%3A%2F%2Fpa-prod-webapp-nativa-prospectacion-dev.azurewebsites.net%2F.auth%2Flogin%2Faad%2Fcallback&client_id=2f2081a5-1732-41ae-a847-7020e12c62a3&scope=openid+profile+email&response_mode=form_post&nonce=ea5a1fcf0f6e4f22835b5e5ca655a61f_20200601152121&state=redir%3D%252F",
    price: '0',
    description: ['Uso por Roles', 'director Activo', 'Contraseña personal', 'Email Con .PA'],
    buttonText: 'INICIO DEV',
    buttonVariant: 'outlined',
  },
  {
    title: 'PRODUCCION',
    apiBaseUrl:"https://login.microsoftonline.com/33e17002-45c0-4d22-811a-82f220af313f/oauth2/authorize?response_type=id_token&redirect_uri=https%3A%2F%2Fpa-prod-webapp-nativa-prospectacion.azurewebsites.net%2F.auth%2Flogin%2Faad%2Fcallback&client_id=2f2081a5-1732-41ae-a847-7020e12c62a3&scope=openid+profile+email&response_mode=form_post&nonce=ea5a1fcf0f6e4f22835b5e5ca655a61f_20200601152121&state=redir%3D%252F",
    subheader: 'Data productiva',
    price: '15',
    description: ['Uso por Roles', 'director Activo', 'Contraseña personal', 'Email Con .PA'],
    buttonText: 'INICIO PROD',
    buttonVariant: 'contained',
  },
  {
    title: 'CALIDAD',
    subheader: 'Pruebas para pases a producción',
    apiBaseUrl:"https://login.windows.net/33e17002-45c0-4d22-811a-82f220af313f/oauth2/authorize?response_type=id_token&redirect_uri=https%3A%2F%2Fpa-prod-webapp-nativa-prospectacion-qa.azurewebsites.net%2F.auth%2Flogin%2Faad%2Fcallback&client_id=965f2f21-1abf-4116-8675-ce71a3029f68&scope=openid+profile+email&response_mode=form_post&nonce=32668b522fc84a0aaf2fcbe586f1fe71_20200922232727&state=redir%3D%252F",
    price: '30',
    description: ['Uso por Roles', 'director Activo', 'Contraseña personal', 'Email Con .PA'],
    buttonText: 'INICIO QA',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Banesco',
    description: ['APM'],
  },
];

export default function Pricing() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          
          </Typography>
          <nav>
           {/* <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Features
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Enterprise
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Support
  </Link>*/}
          </nav>
          <div
                      aria-haspopup="true"
                      className={classNames(classes.buttonLink)}>
                      <img src={logoB} alt={"Banesco"} />
        </div>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Versiones
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
        Esta página esta creada con el fin de tener las diferentes versiones de APM, en un sitio unificado, con las direcciones correctas a cada uno de los sitios.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => {

              var colorClasses;
              var cardHeaderClasses;
               if (tier.title === "CALIDAD") {
                colorClasses = classNames({
                    [" " + classes["red"]]: true
                });
                 cardHeaderClasses = classNames({
                    [classes.cardHeader]: true,
                    [classes["red" + "CardHeader"]]: true
                  });
                }else if (tier.title === "PRODUCCION") {
                    colorClasses = classNames({
                        [" " + classes["green"]]: true
                    });
                    cardHeaderClasses = classNames({
                        [classes.cardHeader]: true,
                        [classes["green" + "CardHeader"]]: true
                      });
                    }else {
                        colorClasses = classNames({
                            [" " + classes["blue"]]: true
                        });
                        cardHeaderClasses = classNames({
                            [classes.cardHeader]: true,
                            [classes["blue" + "CardHeader"]]: true
                          });
                    }
                    return (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'PRODUCCION' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={<Typography className={classes.cardCategoryWhite}>{tier.subheader}</Typography>}                  
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'CALIDAD' ? <StarIcon /> : null}
                  className={cardHeaderClasses}
                />
                <CardContent>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button href={tier.apiBaseUrl} fullWidth variant={tier.buttonVariant} className={colorClasses}>
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          )})}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        {/*<Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
                </Grid>*/}
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}