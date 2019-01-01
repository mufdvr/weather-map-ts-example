import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import { withStyles } from '@material-ui/core/styles'

import * as actions from '../../actions'
import styles from './styles'
import AddCity from './AddCity'

const mapStateToProps = (state: Types.RootState) => {
  const { fetching, error, weatherMap } = state.weatherMap
  return {
    fetching,
    error,
    weatherMap: weatherMap.payload
  }
}

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
  addCity: actions.addCity.request
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(AddCity))
export default WrappedComponent