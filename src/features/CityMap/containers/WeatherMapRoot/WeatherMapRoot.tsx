import * as React from 'react'
import { connect } from 'react-redux'
import Types from 'Types'
import Paper from '@material-ui/core/Paper'
import { withStyles } from '@material-ui/core/styles'

import { AddCity, CitiesTable } from '../'
import styles from './styles'

export interface IProps {
  fetching: boolean,
  error: RequestError
  classes: {
    root: string,
    paper: string,
  }
}

class WeatherMapRoot extends React.Component<IProps> {

  componentWillReceiveProps = ({ fetching, error: { message } }: IProps): void => {
    !fetching && message && console.error(message)
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

const mapStateToProps = (state: Types.RootState) => {
  const { fetching, error } = state.cityMap
  return { fetching, error }
}

const ReduxWrapper = connect(mapStateToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(WeatherMapRoot))
export default WrappedComponent