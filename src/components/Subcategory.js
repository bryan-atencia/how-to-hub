import React from "react"

import { Grid, Typography, withStyles } from "@material-ui/core"
import { Link } from "react-router-dom";

@withStyles( (theme) => ({
  image: {
    height:"250px",
    width:"250px",
    borderRadius:"50%",
    backgroundColor:"#d5d5d5"
  },
  stepsGrid: {
    width:"100%",
    margin:"50px auto"
  },
  tileActionText: {
    borderBottom:"1px solid",
    width:"fit-content",
    margin:"20px 0",
    textTransform:"uppercase"
  },
  homeLink: {
    color:"black",
    textDecoration:"none"
  },
  tileTitle: {
    margin:"15px auto 0",
    fontWeight:"bold"
  },
  tileSubTitle:{
    margin:"15px 0"
  }
}))

export default class Subcategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subcategoryData: {},
      backend:"strapi"
    }
  }

  componentDidMount = () => {
    const { match } = this.props

    fetch(`https://how-to-hub-strapi-backend.herokuapp.com/subcategories/${match.params.id}`)
         .then(x => x.json())
         .then(y => this.setState({subcategoryData: y}))

  }

  renderSteps = () => {

    const { subcategoryData } = this.state
    const { classes } = this.props

    return <Grid container className={ classes.stepsGrid }>
            {
              subcategoryData.steps && subcategoryData.steps.map((x, y) => {
                return <Grid item xs={ 12 } sm={ 4 } key={ y }>
                          <Grid>
                            <Grid className={ classes.image }></Grid>
                          </Grid>
                          <Grid>
                            <Typography className={ classes.tileTitle }>{ x.title }</Typography>
                            <Typography className={ classes.tileSubTitle } style={{ width:"200px" }}>{ x.description }</Typography>
                          </Grid>
                       </Grid>
              })
            }
           </Grid>
  }

  render(){

    const { subcategoryData } = this.state
    const { classes } = this.props

    return <Grid>
              <Grid style={{ maxWidth:"900px" }}>
                <Typography variant="h2">{ subcategoryData.pageTitle }</Typography>
                <Typography variant="h6">{ subcategoryData.pageDescription }</Typography>
                <Grid container>
                  <Typography className={ classes.tileActionText } style={{ marginRight:"20px" }}>{ subcategoryData.pageActionLink }</Typography>
                  <Link to="/" className={ classes.homeLink } style={{ marginRight:"20px" }}>
                    <Typography variant="body1" className={ classes.tileActionText }>HOME</Typography>
                  </Link>
                  <Link to={subcategoryData.category ? `/category/${subcategoryData.category.id}` : "/"} className={ classes.homeLink }>
                    <Typography variant="body1" className={ classes.tileActionText }>BACK TO CATEGORY</Typography>
                  </Link>
                </Grid>
              </Grid>
              <Grid>{ this.renderSteps() }</Grid>
            </Grid>
  }
}
