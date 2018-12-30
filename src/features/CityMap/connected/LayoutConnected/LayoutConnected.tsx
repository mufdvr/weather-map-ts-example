import { connect } from 'react-redux'
import Types from 'Types'
import { withStyles } from '@material-ui/core/styles'

import styles from './styles'
import { Layout } from '../../components'

const mapStateToProps = (state: Types.RootState) => {
  const { fetching, error } = state.cityMap
  return { fetching, error }
}

const ReduxWrapper = connect(mapStateToProps)
const StylesWrapper = withStyles(styles)
const WrappedComponent = ReduxWrapper(StylesWrapper(Layout))
export default WrappedComponent