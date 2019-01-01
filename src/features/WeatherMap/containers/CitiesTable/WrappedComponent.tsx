import { connect } from 'react-redux'
import { bindActionCreators, Dispatch } from 'redux'
import Types from 'Types'
import { withStyles } from '@material-ui/core/styles'
import styles from './styles'
import * as actions from '../../actions'

import CitiesTable from './CitiesTable'

const mapStateToProps = (state: Types.RootState) => ({
  weatherMap: state.weatherMap.weatherMap.payload
})

const mapDispatchToProps = (dispatch: Dispatch<Types.RootAction>) => bindActionCreators({
  deleteCity: actions.deleteCity,
  sortByCity: actions.sortByCity
}, dispatch)

const ReduxWrapper = connect(mapStateToProps, mapDispatchToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(CitiesTable))
export default WrappedComponent
