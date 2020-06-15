import React from "react"

import { Link } from "react-router-dom";

import { Grid, Typography, withStyles } from "@material-ui/core"

@withStyles((theme) => ({
  image: {
    background:"grey",
    height:"250px",
    width:"250px",
    borderRadius:"50%",
    backgroundColor:"#ffe5b4"
  },
  actionText: {
    textTransform:"uppercase",
    textAlign:"center",
    borderBottom:"1px solid",
    width:"fit-content",
    margin:"10px auto",
    color:"black"
  },
  actionLink: {
    color:"black",
    textDecoration:"none"
  },
  mainGrid: {
    maxWidth:"775px",
    margin:"50px 0"
  }
}))

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount = () =>{
    this.fetchCategories()
  }

  fetchCategories = () => {
    fetch("https://how-to-hub-strapi-backend.herokuapp.com/how-tos")
         .then(x => x.json())
         .then(y => this.setState({categories:[...y]}))
  }

  renderCategories = () => {
    const { categories } = this.state
    const { classes } = this.props

    return <Grid container justify="space-between" alignItems="center">
            {
                categories.map((x, y) => {
                  return <Grid item key={ y }>
                            <Grid className={ classes.image }></Grid>
                              <Link to={`/category/${x.id}`} className={ classes.actionLink }>
                                <Typography className={ classes.actionText }>{ x.name }</Typography>
                              </Link>
                            </Grid>
                })
            }
          </Grid>
  }

  render(){
    const { classes } = this.props

    return <>
            <Grid className={ classes.mainGrid }>
              <Typography variant="h2" gutterBottom>The Bartender</Typography>
              <Typography variant="h6">Your complete guide to men’s apparel and accessories. Browse style tips, size guides, and steps to master tying a necktie, tying a bow tie, folding a pocket square, and more.</Typography>
            </Grid>
            {this.renderCategories()}
          </>
  }
}
