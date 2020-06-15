import React from "react"
import { Grid, Typography, withStyles } from "@material-ui/core"

import { Link } from "react-router-dom";

@withStyles((theme) => ({
  heroImage: {
    background:"grey",
    height:"600px",
    width:"600px",
    borderRadius:"50%",
    backgroundColor:"#ffe5b4",
    margin:"0 auto"
  },
  image: {
    height:"250px",
    width:"250px",
    borderRadius:"50%",
    backgroundColor:"#ffe5b4"
  },
  mainGrid: {
    maxWidth:"775px",
    margin:"50px 0"
  },
  tileTitle: {
    margin:"15px auto 0",
    fontWeight:"bold"
  },
  tileSubTitle:{
    margin:"15px auto"
  },
  tileActionText: {
    borderBottom:"1px solid",
    width:"fit-content"
  },
  heroTitle: {
    fontWeight:"bold"
  },
  heroDescription: {
    margin:"15px 0"
  },
  homeLink: {
    position:"absolute",
    top:"12%",
    right:"10%",
    color:"black"
  },
  actionLink: {
    color:"black",
    textDecoration:"none"
  },
}))

export default class Category extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      subcategory: {}
    }
  }

  componentDidMount = () => {
    this.fetchCategory()
  }

  fetchCategory = () => {

    const { match } = this.props

    fetch(`https://how-to-hub-strapi-backend.herokuapp.com/categories/${match.params.id}`)
         .then(x => x.json())
         .then(y => this.setState({subcategory: y}))
  }

  renderSubCategories = () => {
    const { subcategory } = this.state
    const { classes } = this.props

    return <Grid container style={{ textAlign:"center" }}>
              {
                  subcategory.subcategories.map((x, y) => {
                    return <Grid container item key={ y } xs={12} sm={3} alignItems="center" direction="column">
                              <Grid className={ classes.image }></Grid>
                              <Grid container direction="column" alignItems="center" justify="center">
                                <Typography variant="h6" className={ classes.tileTitle }>{ x.title }</Typography>
                                <Typography variant="subtitle1" className={ classes.tileSubTitle } style={{ width:"270px" }}>{ x.description }</Typography>
                                <Link to={ `/subcategory/${x.id}` } className={ classes.actionLink }>
                                  <Typography variant="body1" className={ classes.tileActionText }>{ x.actionText }</Typography>
                                </Link>
                              </Grid>
                           </Grid>
                  })
              }
           </Grid>
  }

  render() {
    const { subcategory } = this.state
    const { classes } = this.props
    const descrip = subcategory.heroDescription ? subcategory.heroDescription.split("<b>") : []

    return <>
            <Grid className={ classes.mainGrid }>
              <Typography variant="h2" >{ subcategory.title }</Typography>
              <Typography variant="h6" style={{ margin:"15px 0" }}>{ subcategory.subtitle }</Typography>
              <Typography className={ classes.tileActionText }>{ subcategory.actionText }</Typography>
              <Link to="/" className={ classes.homeLink }>
                <Typography variant="h5">Home</Typography>
              </Link>
            </Grid>
            { subcategory.subcategories && this.renderSubCategories() }
            <Grid container style={{ margin:"50px auto" }}>
              <Grid item xs={ 12 } sm={ 7 }>
                <Grid className={ classes.heroImage }></Grid>
              </Grid>
              <Grid item xs={ 12 } sm={ 5 } container justify="center" alignItems="flex-start" direction="column">
                <Typography variant="h6" className={ classes.heroTitle }>{ subcategory.heroTitle }</Typography>
                {
                  descrip && descrip.map((x, y) => {
                    return <Typography key={ y } variant="subtitle1" className={ classes.heroDescription }>{ x }</Typography>
                  })
                }
                <Typography variant="body1" className={ classes.tileActionText }>{ subcategory.heroActionLink }</Typography>
              </Grid>
            </Grid>
           </>
  }
}
