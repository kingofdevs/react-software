import React from "react";
import Grid from '@material-ui/core/Grid';
import styles from "./styles";
import classnames from 'classnames'
import Button from "components/CustomButtons/Button.js";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

export default function ProvideDashboard(props) {

  const classes = useStyles();

  return (
    <div>
      <div className={classes.section}>
        <Grid
          container
          direction={props.reverse && "row-reverse"}
        >
          <Grid item xs={12} sm={12} md={6}>
            <img className={classes.img} src={props.image} alt={'{frontend image}'} />
          </Grid>
          
          <Grid item xs={12} sm={12} md={6}>
            <div className={classes.body}>
              <h5 className={classes.h5}>{props.title}</h5>
              <h1 className={classes.h6}>{props.description}</h1>
              <h3 className={classes.h3}>{props.content}</h3>
              <div className={classes.dark}>{props.explain}</div>
              {
                props.details.map((item, index) => (
                  <Item
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))
              }
              <div className={classes.mt}>
                {
                  props.btn &&
                  <Button color="pink" size='lg'>
                    {props.btn}&nbsp;&nbsp;<i className="fas fa-arrow-alt-circle-down"></i>
                  </Button>
                }
              </div>

            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

function Item(props) {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.h4}>
        <i className={classnames("fa fa-check", classes.pink)}></i>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{props.title}
      </div>
      <div className={classnames(classes.h7, classes.ml)}>{props.content}</div>
    </div>
  )
}