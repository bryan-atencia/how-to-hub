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
      categories: [],
      backend:"strapi",
      gitData: []
    }
  }

  componentDidMount = () => {
    switch(this.state.backend) {
      case "strapi": {
        this.fetchStrapiCategories()
      }
      break;
      break;
      default: {
        this.fetchStrapiCategories()
        }
    }
  }

  fetchStrapiCategories = () => {

    // fetch("https://how-to-hub-strapi-backend.herokuapp.com/how-tos")
    //      .then(x => x.json())
    //      .then(y => this.setState({categories:[...y]})  )

    // fetch('https://api.github.com/repos/bryan-atencia/how-to-hub/contents/dist/admin/collections/How-tos')
    //   .then(blob => blob.json())
    //   .then(res => {
    //       for(let x = 0;x < res.length;x++) {
    //         fetch(`${res[x]['download_url']}`)
    //           .then(y => y.json())
    //           .then(z => {
    //             this.state.categories.push(z)
    //             this.setState({
    //               categories: this.state.categories
    //             })
    //           })
    //
    //       }
    //     })

    fetch("http://focused-hamilton-101097.netlify.app/.netlify/functions/fetchHowTos")
        .then(x => x.json())
        .then(y => {
          console.log(y, 'the y value')
        })

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
              {this.state.gitData && this.state.gitData.map((x, y) => <Grid key={y}>{ x.name }</Grid>)}
              <Typography variant="h6">Your complete guide to men’s apparel and accessories. Browse style tips, size guides, and steps to master tying a necktie, tying a bow tie, folding a pocket square, and more.</Typography>
            </Grid>
            {this.renderCategories()}
          </>
  }
}
