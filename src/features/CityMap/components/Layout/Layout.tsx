import * as React from 'react'
import Paper from '@material-ui/core/Paper'

import AddCityConnected from '../../connected/AddCityConnected'
import CitiesTableConnected from '../../connected/CitiesTableConnected'

export interface IProps {
  fetching: boolean,
  error: RequestError
  classes: {
    root: string,
    paper: string,
  }
}

class Layout extends React.Component<IProps> {

  componentWillReceiveProps = ({ fetching, error: { message } }: IProps): void => {
    !fetching && message && console.log(message)
  }

  render = () => {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <AddCityConnected />
          <CitiesTableConnected />
        </Paper>
      </div>
    )
  }
}

export default Layout