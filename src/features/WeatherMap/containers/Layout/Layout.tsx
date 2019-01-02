import * as React from 'react'
import Paper from '@material-ui/core/Paper'

import { AddCity, CitiesTable } from '../../containers'
import { Snackbars } from 'components'

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
    !fetching && message && Snackbars.error(message)
  }

  render = () => {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <AddCity />
          <CitiesTable />
        </Paper>
      </div>
    )
  }
}

export default Layout