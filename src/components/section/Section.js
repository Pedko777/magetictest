import React from 'react';
import styles from './section.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { ReactComponent as Circle } from '../../ui/circle.svg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Section = () => {
  const classes = useStyles();
  return (
    <div className={` ${styles.sectionWrapper}  container`}>
      <div className={styles.leftbar}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <Circle />
          </li>
          <li className={styles.listItem}>
            <Circle />
          </li>
          <li className={styles.listItem}>
            <Circle />
          </li>
          <li className={styles.listItem}>
            <Circle />
          </li>
          <li className={styles.listItem}>
            <Circle />
          </li>
          <li className={styles.listItem}>
            <Circle />
          </li>
        </ul>
      </div>
      <div></div>
      <div className={styles.gridWrapper}>
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4} lg={4}>
              <Paper className={classes.paper}>
                <div className={styles.textGrid}>
                  <div>
                    <p>left text</p>
                  </div>
                  <div>
                    <p>right text</p>
                  </div>
                </div>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={8} lg={8}>
              <Paper className={classes.paper}>
                <div className={styles.textGrid}>
                  <div>
                    <p>left text</p>
                  </div>
                  <div>
                    <p>right text</p>
                  </div>
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Section;
