import React from "react"

import {  BrowserRouter,
          Switch,
          Route
        } from "react-router-dom";

import { Grid, withStyles } from "@material-ui/core"

import Main from "./Main"
import Category from "./Category"
import Subcategory from "./Subcategory"

@withStyles((theme) => ({
  rootGrid: {
    height:"100%",
    width:"100%",
    maxWidth:"1180px",
    margin:"0 auto",
    padding:"40px"
  }
}))

export default class App extends React.Component {

  componentDidMount(){
    document.body.style.margin = 0
    fetch('focused-hamilton-101097.netlify.app', {
      method:"POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        'Content-Type': 'application/json',
        "Accept": "application/json"
      }
    })
    .then(x => {
      console.log(x, x.json())
      return x.json()
    }).then(y => {
      console.log(y)
    })
  }

  render(){

    const { classes } = this.props

    return <BrowserRouter>
              <Route render={( { location, match } ) => {
                  const { pathname, key } = location
                    return (
                        <Grid className={ classes.rootGrid }>
                          <Switch location={ location }>
                            <Route exact path="/" component={ Main }></Route>
                            <Route exact path="/category/:id" component={ Category }></Route>
                            <Route exact path="/subcategory/:id" component={ Subcategory }></Route>
                            <Route component={ Main }></Route>
                          </Switch>
                        </Grid>
                    )
                }}>
              </Route>
          </BrowserRouter>
  }
}
